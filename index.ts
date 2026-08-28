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
  constructor(props: { port?: number } = {}) {
    super();
    try {
      this.port = props.port ?? this.port;
      this._bind();
    } catch (err) {
      console.error(`AGIServer error`, err);
    }
  }

  /**
   * Bind ports+listeners and signal ready.
   */
  _bind() {
    try {
      this.fAGI = net.createServer((socket) => {
        const remoteServer: string | false = socket.remoteAddress?.replace(/^::ffff:/, "") || false;

        let dataBuffer = "";

        const onSocketError = (err: Error) => {
          if (this.listenerCount("error")) this.emit("error", err);
          else console.error("AGIServer socket error", err);
        };

        const onInitialData = (data: Buffer) => {
          dataBuffer += data.toString();

          const delimiter = dataBuffer.match(/\r?\n\r?\n/);
          if (!delimiter || delimiter.index === undefined) return;

          socket.pause();
          socket.off("data", onInitialData);
          socket.off("error", onSocketError);

          const header = dataBuffer.slice(0, delimiter.index);
          const remainder = dataBuffer.slice(delimiter.index + delimiter[0].length);
          const agiVariables: Record<string, string> = {};

          for (const line of header.split(/\r?\n/)) {
            if (!line.startsWith("agi_")) continue;

            const separator = line.indexOf(":");
            if (separator < 0) continue;

            const key = line.slice(4, separator).trim();
            agiVariables[key] = line.slice(separator + 1).trim();
          }

          const call = new AGIChannel({
            ...agiVariables,
            remoteServer,
            socket,
          });

          this.emit("call", call);

          if (remainder) socket.unshift(Buffer.from(remainder));
          socket.resume();
        };

        socket.once("error", onSocketError);
        socket.on("data", onInitialData);
      });

      this.fAGI.on("error", (err) => {
        if (this.listenerCount("error")) this.emit("error", err);
        else console.error("AGIServer error", err);
      });

      this.fAGI.listen(this.port, () => {
        this.emit("ready", this.port);
      });
    } catch (err) {
      console.error("AGIServer error", err);
    }
  }
}
export = AGIServer;
