"use strict";
/**
 *  Asterisk AGI (FastAGI) Server for Nodejs
 *  @module node-asteriskagi
 *  @license MIT
 *  @author Corey S. McFadden <cmcfadden@clearlyip.com>
 *  @copyright This project is not affiliated with, endorsed by, or sponsored by Digium Inc. or Sangoma Technologies Corp, holders of the "Asterisk" trademark, which is used here for identification purposes only.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net = __importStar(require("net"));
const events_1 = __importDefault(require("events"));
const channel_1 = require("./channel");
class AGIServer extends events_1.default.EventEmitter {
    constructor(props) {
        super();
        this.port = 4573;
        try {
            this.port = (props === null || props === void 0 ? void 0 : props.port) || this.port;
            this._bind();
        }
        catch (err) {
            console.log(`AGIServer error`, err);
        }
    }
    /**
     * Bind ports+listeners and signal ready.
     */
    _bind() {
        try {
            this.fAGI = net.createServer((socket) => {
                const remoteServer = (socket === null || socket === void 0 ? void 0 : socket.remoteAddress)
                    ? socket.remoteAddress.split(":").pop() || false
                    : false;
                let dataBuffer = "";
                socket.on("data", (data) => __awaiter(this, void 0, void 0, function* () {
                    dataBuffer += data.toString();
                    if (dataBuffer.includes("\n\n")) {
                        socket.removeAllListeners("data");
                        const agiVariables = dataBuffer
                            .split("\n")
                            .reduce((acc, line) => {
                            if (line.startsWith("agi_")) {
                                const [key, value] = line
                                    .split(":")
                                    .map((item) => item.trim());
                                acc[key.substring(4)] = value;
                            }
                            return acc;
                        }, {});
                        // Hangup detection
                        socket.on("data", (data) => __awaiter(this, void 0, void 0, function* () {
                            if (data.toString().includes("HANGUP")) {
                                socket.removeAllListeners("data");
                                socket.end();
                            }
                        }));
                        const call = new channel_1.AGIChannel(Object.assign(Object.assign({}, agiVariables), { remoteServer,
                            socket }));
                        this.emit("call", call);
                        socket.on("end", () => {
                            call.emit("hangup");
                        });
                    }
                }));
            });
            this.fAGI.listen(this.port, () => {
                this.emit("ready", this.port);
            });
        }
        catch (err) {
            console.log(`AGIServer`, err);
        }
    }
}
module.exports = AGIServer;
