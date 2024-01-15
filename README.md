# asteriskagi

Asterisk AGI (FastAGI) Server for Nodejs

# Overview

Event-based server useful for building [Asterisk](https://www.asterisk.org) FastAGI applications in Nodejs. Each call produces a "call" event containing a call handle you can interact with to get variables, perform actions, etc.

# Features

- Event-driven
- Compatible with Asterisk AGI://

# Getting Started

## Installation

Using NPM:

```
$ npm install asteriskagi
```

## Basic Usage

```javascript
import AGIServer from "asteriskagi";

const agi = new AGIServer(/* {port: 1234} */); // Server (optional port)

agi.on("call", async (call) => {
  const {
    remoteServer,
    uniqueid,
    context,
    extension,
    priority,
    calleridname,
    callerid,
    channel,
  } = call;

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
