/**
 *  Asterisk AGI (FastAGI) Server for Nodejs
 *  @module node-asteriskagi
 *  @license MIT
 *  @author Corey S. McFadden <cmcfadden@clearlyip.com>
 *  @copyright This project is not affiliated with, endorsed by, or sponsored by Digium Inc. or Sangoma Technologies Corp, holders of the "Asterisk" trademark, which is used here for identification purposes only.
 */

import * as net from "net";
import events from "events";
import { AGIChannel } from "./channel";

class AGIServer extends events.EventEmitter {
  public port: number = 4573;
  private fAGI!: net.Server;
  constructor(props: { port?: number }) {
    super();
    try {
      this.port = props?.port || this.port;
      this._bind();
    } catch (err) {
      console.log(`AGIServer error`, err);
    }
  }

  /**
   * Bind ports+listeners and signal ready.
   */
  _bind() {
    try {
      this.fAGI = net.createServer((socket) => {
        const remoteServer: string | false = socket?.remoteAddress
          ? socket.remoteAddress.split(":").pop() || false
          : false;

        let dataBuffer = "";
        socket.on("data", async (data) => {
          dataBuffer += data.toString();
          if (dataBuffer.includes("\n\n")) {
            socket.removeAllListeners("data");
            const agiVariables = dataBuffer
              .split("\n")
              .reduce<{ [key: string]: string }>((acc, line) => {
                if (line.startsWith("agi_")) {
                  const [key, value] = line
                    .split(":")
                    .map((item) => item.trim());
                  acc[key.substring(4)] = value;
                }
                return acc;
              }, {});

            // Hangup detection
            socket.on("data", async (data) => {
              if (data.toString().includes("HANGUP")) {
                socket.removeAllListeners("data");
                socket.end();
              }
            });

            const call = new AGIChannel({
              ...agiVariables,
              remoteServer,
              socket,
            });
            this.emit("call", call);

            socket.on("end", () => {
              call.emit("hangup");
            });
          }
        });
      });
      this.fAGI.listen(this.port, () => {
        this.emit("ready", this.port);
      });
    } catch (err) {
      console.log(`AGIServer`, err);
    }
  }
}
module.exports = AGIServer;
