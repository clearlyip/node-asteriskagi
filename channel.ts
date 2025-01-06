/**
 *  Asterisk AGI (FastAGI) Server for Nodejs / Channel
 *  @module node-asteriskagi
 *  @license MIT
 *  @author Corey S. McFadden <cmcfadden@clearlyip.com>
 *  @copyright This project is not affiliated with, endorsed by, or sponsored by Digium Inc. or Sangoma Technologies Corp, holders of the "Asterisk" trademark, which is used here for identification purposes only.
 */
import * as net from "net";
import events from "events";

export class AGIChannel extends events.EventEmitter {
  private _socket!: net.Socket;
  public remoteServer: string | false;
  public channel?: string = "";
  public language?: string = "en";
  public uniqueid?: string = "";
  public version?: string = "";
  public callerid?: string = "";
  public calleridname?: string = "";
  public callingpres?: string = "";
  public callingani2?: string = "";
  public callington?: string = "";
  public callingtns?: string = "";
  public dnid?: string = "";
  public rdnis?: string = "";
  public context?: string = "";
  public extension?: string = "";
  public priority?: string = "";
  public enhanced?: string = "";
  public accountcode?: string = "";
  public threadid?: string = "";
  public currently?: string | false;

  constructor(props: {
    socket: net.Socket;
    remoteServer: string | false;
    channel?: string;
    language?: string;
    uniqueid?: string;
    version?: string;
    callerid?: string;
    calleridname?: string;
    callingpres?: string;
    callingani2?: string;
    callington?: string;
    callingtns?: string;
    dnid?: string;
    rdnis?: string;
    context?: string;
    extension?: string;
    priority?: string;
    enhanced?: string;
    accountcode?: string;
    threadid?: string;
  }) {
    super();
    this._socket = props.socket;
    this.remoteServer = props.remoteServer;
    this.channel = props.channel || "";
    this.language = props?.language || "en";
    this.uniqueid = props?.uniqueid || "";
    this.version = props?.version || "";
    this.callerid = props?.callerid || "";
    this.calleridname = props?.calleridname || "";
    this.callingpres = props?.callingpres || "";
    this.callingani2 = props?.callingani2 || "";
    this.callington = props?.callington || "";
    this.callingtns = props?.callingtns || "";
    this.dnid = props?.dnid || "";
    this.rdnis = props?.rdnis || "";
    this.context = props?.context || "";
    this.extension = props?.extension || "";
    this.priority = props?.priority || "";
    this.enhanced = props?.enhanced || "";
    this.accountcode = props?.accountcode || "";
    this.threadid = props?.threadid || "";
    this.currently = false; // Current operation
  }

  // Commands mapped to Exec
  AddQueueMember = (args: string) => this.Exec("AddQueueMember", args);
  AgentLogin = (args: string) => this.Exec("AgentLogin", args);
  AgentRequest = (args: string) => this.Exec("AgentRequest", args);
  AGI = (args: string) => this.Exec("AGI", args);
  AlarmReceiver = (args: string) => this.Exec("AlarmReceiver", args);
  AMD = (args: string) => this.Exec("AMD", args);
  AttendedTransfer = (args: string) => this.Exec("AttendedTransfer", args);
  AudioSocket = (args: string) => this.Exec("AudioSocket", args);
  Authenticate = (args: string) => this.Exec("Authenticate", args);
  Background = (args: string) => this.Exec("Background", args);
  BackGround = (args: string) => this.Exec("BackGround", args);
  BackgroundDetect = (args: string) => this.Exec("BackgroundDetect", args);
  BlindTransfer = (args: string) => this.Exec("BlindTransfer", args);
  Bridge = (args: string) => this.Exec("Bridge", args);
  BridgeAdd = (args: string) => this.Exec("BridgeAdd", args);
  BridgeWait = (args: string) => this.Exec("BridgeWait", args);
  Busy = (args: string | undefined) => this.Exec("Busy", args);
  CallCompletionCancel = (args: string) => this.Exec("CallCompletionCancel", args);
  CallCompletionRequest = (args: string) => this.Exec("CallCompletionRequest", args);
  CELGenUserEvent = (args: string) => this.Exec("CELGenUserEvent", args);
  ChangeMonitor = (args: string) => this.Exec("ChangeMonitor", args);
  ChanIsAvail = (args: string) => this.Exec("ChanIsAvail", args);
  ChannelRedirect = (args: string) => this.Exec("ChannelRedirect", args);
  ChanSpy = (args: string) => this.Exec("ChanSpy", args);
  ClearHash = (args: string) => this.Exec("ClearHash", args);
  ConfBridge = (args: string) => this.Exec("ConfBridge", args);
  ConfKick = (args: string) => this.Exec("ConfKick", args);
  Congestion = (args: string | undefined) => this.Exec("Congestion", args);
  ContinueWhile = (args: string) => this.Exec("ContinueWhile", args);
  ControlPlayback = (args: string) => this.Exec("ControlPlayback", args);
  DAHDIScan = (args: string) => this.Exec("DAHDIScan", args);
  DateTime = (args: string) => this.Exec("DateTime", args);
  DBdeltree = (args: string) => this.Exec("DBdeltree", args);
  DeadAGI = (args: string) => this.Exec("DeadAGI", args);
  Dial = (args: string) => this.Exec("Dial", args);
  Dictate = (args: string) => this.Exec("Dictate", args);
  Directory = (args: string) => this.Exec("Directory", args);
  DISA = (args: string) => this.Exec("DISA", args);
  DumpChan = (args: string) => this.Exec("DumpChan", args);
  EAGI = (args: string) => this.Exec("EAGI", args);
  Echo = () => this.Exec("Echo", undefined);
  Else = (args: string) => this.Exec("Else", args);
  ElseIf = (args: string) => this.Exec("ElseIf", args);
  EndIf = () => this.Exec("EndIf", undefined);
  EndWhile = () => this.Exec("EndWhile", undefined);
  ExecIf = (args: string) => this.Exec("ExecIf", args);
  ExecIfTime = (args: string) => this.Exec("ExecIfTime", args);
  ExitIf = (args: string) => this.Exec("ExitIf", args);
  ExitWhile = () => this.Exec("ExitWhile", undefined);
  ExtenSpy = (args: string) => this.Exec("ExtenSpy", args);
  ExternalIVR = (args: string) => this.Exec("ExternalIVR", args);
  Festival = (args: string) => this.Exec("Festival", args);
  FollowMe = (args: string) => this.Exec("FollowMe", args);
  ForkCDR = (args: string | undefined) => this.Exec("ForkCDR", args);
  Gosub = (args: string) => this.Exec("Gosub", args);
  GosubIf = (args: string) => this.Exec("GosubIf", args);
  Goto = (args: string) => this.Exec("Goto", args);
  GotoIf = (args: string) => this.Exec("GotoIf", args);
  GotoIfTime = (args: string) => this.Exec("GotoIfTime", args);
  HangupCauseClear = (args: string) => this.Exec("HangupCauseClear", args);
  If = (args: string) => this.Exec("If", args);
  ImportVar = (args: string) => this.Exec("ImportVar", args);
  Incomplete = (args: string) => this.Exec("Incomplete", args);
  Log = (args: string) => this.Exec("Log", args);
  Macro = (args: string) => this.Exec("Macro", args);
  MacroExclusive = (args: string) => this.Exec("MacroExclusive", args);
  MacroExit = (args: string) => this.Exec("MacroExit", args);
  MacroIf = (args: string) => this.Exec("MacroIf", args);
  MessageSend = (args: string) => this.Exec("MessageSend", args);
  Milliwatt = (args: string | undefined) => this.Exec("Milliwatt", args);
  MinivmAccMess = (args: string) => this.Exec("MinivmAccMess", args);
  MinivmDelete = (args: string) => this.Exec("MinivmDelete", args);
  MinivmGreet = (args: string) => this.Exec("MinivmGreet", args);
  MinivmMWI = (args: string) => this.Exec("MinivmMWI", args);
  MinivmNotify = (args: string) => this.Exec("MinivmNotify", args);
  MinivmRecord = (args: string) => this.Exec("MinivmRecord", args);
  MixMonitor = (args: string) => this.Exec("MixMonitor", args);
  Monitor = (args: string) => this.Exec("Monitor", args);
  Morsecode = (args: string) => this.Exec("Morsecode", args);
  MP3Player = (args: string) => this.Exec("MP3Player", args);
  MSet = (args: string) => this.Exec("MSet", args);
  MusicOnHold = (args: string | undefined) => this.Exec("MusicOnHold", args);
  NoCDR = (args: string) => this.Exec("NoCDR", args);
  ODBC_Commit = (args: string) => this.Exec("ODBC_Commit", args);
  ODBC_Rollback = (args: string) => this.Exec("ODBC_Rollback", args);
  ODBCFinish = (args: string) => this.Exec("ODBCFinish", args);
  Originate = (args: string) => this.Exec("Originate", args);
  Page = (args: string) => this.Exec("Page", args);
  Park = (args: string) => this.Exec("Park", args);
  ParkAndAnnounce = (args: string) => this.Exec("ParkAndAnnounce", args);
  ParkedCall = (args: string) => this.Exec("ParkedCall", args);
  PauseMonitor = (args: string) => this.Exec("PauseMonitor", args);
  PauseQueueMember = (args: string) => this.Exec("PauseQueueMember", args);
  Pickup = (args: string) => this.Exec("Pickup", args);
  PickupChan = (args: string) => this.Exec("PickupChan", args);
  PlayTones = (args: string) => this.Exec("PlayTones", args);
  PrivacyManager = (args: string) => this.Exec("PrivacyManager", args);
  Proceeding = () => this.Exec("Proceeding", undefined);
  Progress = () => this.Exec("Progress", undefined);
  Queue = (args: string) => this.Exec("Queue", args);
  QueueLog = (args: string) => this.Exec("QueueLog", args);
  QueueUpdate = (args: string) => this.Exec("QueueUpdate", args);
  RaiseException = (args: string) => this.Exec("RaiseException", args);
  Read = (args: string) => this.Exec("Read", args);
  ReadExten = (args: string) => this.Exec("ReadExten", args);
  ReceiveFAX = (args: string) => this.Exec("ReceiveFAX", args);
  ReceiveMF = (args: string) => this.Exec("ReceiveMF", args);
  ReceiveSF = (args: string) => this.Exec("ReceiveSF", args);
  ReceiveText = (args: string) => this.Exec("ReceiveText", args);
  Record = (args: string) => this.Exec("Record", args);
  Reload = (args: string | undefined) => this.Exec("Reload", args);
  RemoveQueueMember = (args: string) => this.Exec("RemoveQueueMember", args);
  ResetCDR = (args: string) => this.Exec("ResetCDR", args);
  RetryDial = (args: string) => this.Exec("RetryDial", args);
  Return = (args: string) => this.Exec("Return", args);
  Ringing = (args: string) => this.Exec("Ringing", args);
  SayAlpha = (args: string) => this.Exec("SayAlpha", args);
  SayAlphaCase = (args: string) => this.Exec("SayAlphaCase", args);
  SayDigits = (args: string) => this.Exec("SayDigits", args);
  SayMoney = (args: string) => this.Exec("SayMoney", args);
  SayNumber = (args: string) => this.Exec("SayNumber", args);
  SayOrdinal = (args: string) => this.Exec("SayOrdinal", args);
  SayPhonetic = (args: string) => this.Exec("SayPhonetic", args);
  SayUnixTime = (args: string) => this.Exec("SayUnixTime", args);
  SendDTMF = (args: string) => this.Exec("SendDTMF", args);
  SendFAX = (args: string) => this.Exec("SendFAX", args);
  SendMF = (args: string) => this.Exec("SendMF", args);
  SendSF = (args: string) => this.Exec("SendSF", args);
  SendText = (args: string) => this.Exec("SendText", args);
  Set = (args: string) => this.Exec("Set", args);
  SetAMAFlags = (args: string) => this.Exec("SetAMAFlags", args);
  SMS = (args: string) => this.Exec("SMS", args);
  SoftHangup = (args: string) => this.Exec("SoftHangup", args);
  SpeechActivateGrammar = (args: string) => this.Exec("SpeechActivateGrammar", args);
  SpeechBackground = (args: string) => this.Exec("SpeechBackground", args);
  SpeechCreate = (args: string) => this.Exec("SpeechCreate", args);
  SpeechDeactivateGrammar = (args: string) => this.Exec("SpeechDeactivateGrammar", args);
  SpeechDestroy = (args: string) => this.Exec("SpeechDestroy", args);
  SpeechLoadGrammar = (args: string) => this.Exec("SpeechLoadGrammar", args);
  SpeechProcessingSound = (args: string) => this.Exec("SpeechProcessingSound", args);
  SpeechStart = (args: string) => this.Exec("SpeechStart", args);
  SpeechUnloadGrammar = (args: string) => this.Exec("SpeechUnloadGrammar", args);
  StackPop = (args: string) => this.Exec("StackPop", args);
  StartMusicOnHold = (args: string) => this.Exec("StartMusicOnHold", args);
  Stasis = (args: string) => this.Exec("Stasis", args);
  StopMixMonitor = (args: string | undefined) => this.Exec("StopMixMonitor", args);
  StopMonitor = (args: string | undefined) => this.Exec("StopMonitor", args);
  StopMusicOnHold = () => this.Exec("StopMusicOnHold", undefined);
  StopPlayTones = () => this.Exec("StopPlayTones", undefined);
  StoreDTMF = (args: string) => this.Exec("StoreDTMF", args);
  StreamEcho = (args: string | undefined) => this.Exec("StreamEcho", args);
  System = (args: string) => this.Exec("System", args);
  TestClient = (args: string) => this.Exec("TestClient", args);
  TestServer = (args: string) => this.Exec("TestServer", args);
  ToneScan = (args: string | undefined) => this.Exec("ToneScan", args);
  Transfer = (args: string) => this.Exec("Transfer", args);
  TryExec = (args: string) => this.Exec("TryExec", args);
  TrySystem = (args: string) => this.Exec("TrySystem", args);
  UnpauseMonitor = () => this.Exec("UnpauseMonitor", undefined);
  UnpauseQueueMember = (args: string) => this.Exec("UnpauseQueueMember", args);
  UserEvent = (args: string) => this.Exec("UserEvent", args);
  VMAuthenticate = (args: string) => this.Exec("VMAuthenticate", args);
  VMSayName = (args: string) => this.Exec("VMSayName", args);
  VoiceMail = (args: string) => this.Exec("VoiceMail", args);
  VoiceMailMain = (args: string | undefined) => this.Exec("VoiceMailMain", args);
  VoiceMailPlayMsg = (args: string) => this.Exec("VoiceMailPlayMsg", args);
  Wait = (args: string) => this.Exec("Wait", args);
  WaitDigit = (args: string | undefined) => this.Exec("WaitDigit", args);
  WaitExten = (args: string | undefined) => this.Exec("WaitExten", args);
  WaitForCondition = (args: string) => this.Exec("WaitForCondition", args);
  WaitForNoise = (args: string | undefined) => this.Exec("WaitForNoise", args);
  WaitForRing = (args: string | undefined) => this.Exec("WaitForRing", args);
  WaitForSilence = (args: string | undefined) => this.Exec("WaitForSilence", args);
  WaitForTone = (args: string | undefined) => this.Exec("WaitForTone", args);
  WaitUntil = (args: string | undefined) => this.Exec("WaitUntil", args);
  While = (args: string) => this.Exec("While", args);
  Zapateller = (args: string) => this.Exec("Zapateller", args);

  /**
   * Answer Channel
   */
  async Answer() {
    return await this.send("ANSWER");
  }

  /**
   * Wildcard command handler
   * @param {string} command
   * @param {string|undefined} args
   */
  async Exec(command: string, args: string | undefined) {
    try {
      this.currently = command;
      await this.send(`EXEC ${command} ${args}`);
      this.currently = false;
      return;
    } catch (err) {
      return false;
    }
  }

  /**
   * Get AGI Variable
   * @param {string} variable
   * @returns
   */
  async getVariable(variable: string) {
    try {
      return await this.send("GET VARIABLE " + variable);
    } catch (err) {
      this.emit("error", "getVariable ERROR: " + err);
      return false;
    }
  }

  /**
   * Hang up channel
   */
  async Hangup() {
    await this.send("HANGUP");
  }

  /**
   * Do Nothing (No Operation)
   * @param {string} args - text
   */
  async NoOp(args: string) {
    return await this.send(`NOOP ${args}`);
  }

  /**
   * Sends audio file on channel.
   * @param {string} filename
   */
  async Playback(filename: string) {
    try {
      this.currently = "Playback";
      await this.send("STREAM FILE " + filename + ' ""');
      this.currently = false;
      return;
    } catch (err) {
      this.emit("error", "Playback ERROR: " + err);
      return false;
    }
  }

  /**
   * Send FastAGI command to specified socket
   * @param {string} command
   */
  async send(command: string) {
    return new Promise((resolve, reject) => {
      try {
        this._socket.once("data", (data) => {
          const response: any = this._parseResponse(data.toString().trim());
          if (response.code == "520") {
            this.emit("error", response.data);
            resolve(false);
            return;
          }
          if (response.result < 0) {
            this.emit("error", "Dead channel detected.");
            resolve(false);
            // reject("Dead channel detected.");
            this._socket && this._socket.end();
          }
          const final = response.data.match(/\((.*?)\)/);
          let dataResponse: any = null;
          if (final) {
            dataResponse = final[1];
          } else if (response.data) {
            dataResponse = response.data;
          } else {
            dataResponse = response.result;
          }
          resolve(dataResponse);
        });
        if (this._socket.writable) {
          this._socket.write(command + "\n", "utf8");
        } else {
          // reject("Dead channel detected.");
          this._socket && this._socket.end();
          resolve(false);
        }
      } catch (err) {
        this.emit("error", "AGI Send Error:" + err);
        resolve(false);
        return;
      }
    });
  }

  /**
   * Verbose log line
   * @param args - Text to log
   */
  async Verbose(args: string) {
    return await this.send(`VERBOSE ${args}`);
  }

  /**
   * Parse AGI response codes
   * @param {string} str
   * @returns object - Response code,result,data
   */
  _parseResponse(str: string) {
    try {
      let match = str.match(/(\d+)\s+result=(-?\d+)(?:\s+(.*))?/);
      if (match) {
        return {
          code: match[1],
          result: Number(match[2]) || 0,
          data: match[3] || "",
        };
      }
      match = str.match(/(\d+)-(.*)/);
      return match
        ? {
            code: match[1],
            result: 0,
            data: match[2],
          }
        : { code: "", result: "", data: str };
    } catch (err) {
      return { code: "", result: "", data: str };
    }
  }
}
