/**
 *  Asterisk AGI (FastAGI) Server for Nodejs
 *  @module node-asteriskagi
 *  @license MIT
 *  @author Corey S. McFadden <cmcfadden@clearlyip.com>
 *  @copyright This project is not affiliated with, endorsed by, or sponsored by Digium Inc. or Sangoma Technologies Corp, holders of the "Asterisk" trademark, which is used here for identification purposes only.
 */
import events from "events";
declare class AGIServer extends events.EventEmitter {
    port: number;
    private fAGI;
    constructor(props?: {
        port?: number;
    });
    /**
     * Bind ports+listeners and signal ready.
     */
    _bind(): void;
}
export = AGIServer;
