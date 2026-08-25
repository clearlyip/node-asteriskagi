/**
 *  Asterisk AGI (FastAGI) Server for Nodejs
 *  @module node-asteriskagi
 *  @license MIT
 *  @author Corey S. McFadden <cmcfadden@clearlyip.com>
 *  @copyright This project is not affiliated with, endorsed by, or sponsored by Digium Inc. or Sangoma Technologies Corp, holders of the "Asterisk" trademark, which is used here for identification purposes only.
 */
 import { EventEmitter } from "node:events";
 import type { AGIChannel } from "./channel";

 declare class AGIServer extends EventEmitter {
   public port: number;

   constructor(props?: AGIServer.Options);

   on(event: "call", listener: (call: AGIChannel) => void): this;
   on(event: "ready", listener: (port: number) => void): this;
   on(event: "error", listener: (error: Error | string) => void): this;
   on(event: string | symbol, listener: (...args: any[]) => void): this;
 }

 declare namespace AGIServer {
   interface Options {
     port?: number;
   }
 }

 export = AGIServer;
