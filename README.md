# asteriskagi

Asterisk AGI (FastAGI) Server for Nodejs

# Overview

Event-based server useful for building [Asterisk](https://www.asterisk.org) FastAGI applications in Nodejs. Each call produces a "call" event containing a call handle you can interact with to get variables, perform actions, etc.

# Features

- Event-driven
- Compatible with Asterisk AGI(agi://)

# Getting Started

## Installation

Using NPM:

```
$ npm install asteriskagi
```

## Basic Usage

```javascript
import AGIServer from "asteriskagi";

const agi = new AGIServer(/* {port: 4573} */); // Server (optional port, default: 4573)

agi.on("call", async (call) => {
  const { remoteServer, uniqueid, context, extension, priority, calleridname, callerid, channel } = call;

  call.on("hangup", () => {
    console.log(`Hangup  ${remoteServer}/${channel}`);
  });

  call.on("error", (err) => {
    console.error(`ERROR: ${remoteServer}/${channel}: ${err}`);
  });

  await call.Answer();
  await call.Playback("beep");
  await call.SayAlpha("hello");
  await call.Hangup();
});
```

In Asterisk dialplan (assuming the Node server is running on the same machine):

```
exten => 1234,1,AGI(agi://localhost:4573)
```

## Commands

All standard Asterisk dialplan commands (as of 20.x) are accessible via the call object. (See 'Basic Usage' for examples.)

## AGIServer Events

| Event | Description                                              |
| ----- | -------------------------------------------------------- |
| call  | Emitted when a call arrives. Contains the "call" object. |
| ready | Emits when the server is listening and ready.            |
| error | Emitted when an error occurs. (err) = "Errror text"      |

## Call Events

| Event  | Description                                         |
| ------ | --------------------------------------------------- |
| hangup | Emitted when a call disconnects.                    |
| error  | Emitted when an error occurs. (err) = "Errror text" |
