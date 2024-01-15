"use strict";
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
exports.AGIChannel = void 0;
const events_1 = __importDefault(require("events"));
class AGIChannel extends events_1.default.EventEmitter {
    constructor(props) {
        super();
        this.channel = "";
        this.language = "en";
        this.uniqueid = "";
        this.version = "";
        this.callerid = "";
        this.calleridname = "";
        this.callingpres = "";
        this.callingani2 = "";
        this.callington = "";
        this.callingtns = "";
        this.dnid = "";
        this.rdnis = "";
        this.context = "";
        this.extension = "";
        this.priority = "";
        this.enhanced = "";
        this.accountcode = "";
        this.threadid = "";
        // Commands mapped to Exec
        this.AddQueueMember = (args) => this.Exec("AddQueueMember", args);
        this.AgentLogin = (args) => this.Exec("AgentLogin", args);
        this.AgentRequest = (args) => this.Exec("AgentRequest", args);
        this.AGI = (args) => this.Exec("AGI", args);
        this.AlarmReceiver = (args) => this.Exec("AlarmReceiver", args);
        this.AMD = (args) => this.Exec("AMD", args);
        this.AttendedTransfer = (args) => this.Exec("AttendedTransfer", args);
        this.AudioSocket = (args) => this.Exec("AudioSocket", args);
        this.Authenticate = (args) => this.Exec("Authenticate", args);
        this.Background = (args) => this.Exec("Background", args);
        this.BackGround = (args) => this.Exec("BackGround", args);
        this.BackgroundDetect = (args) => this.Exec("BackgroundDetect", args);
        this.BlindTransfer = (args) => this.Exec("BlindTransfer", args);
        this.Bridge = (args) => this.Exec("Bridge", args);
        this.BridgeAdd = (args) => this.Exec("BridgeAdd", args);
        this.BridgeWait = (args) => this.Exec("BridgeWait", args);
        this.Busy = (args) => this.Exec("Busy", args);
        this.CallCompletionCancel = (args) => this.Exec("CallCompletionCancel", args);
        this.CallCompletionRequest = (args) => this.Exec("CallCompletionRequest", args);
        this.CELGenUserEvent = (args) => this.Exec("CELGenUserEvent", args);
        this.ChangeMonitor = (args) => this.Exec("ChangeMonitor", args);
        this.ChanIsAvail = (args) => this.Exec("ChanIsAvail", args);
        this.ChannelRedirect = (args) => this.Exec("ChannelRedirect", args);
        this.ChanSpy = (args) => this.Exec("ChanSpy", args);
        this.ClearHash = (args) => this.Exec("ClearHash", args);
        this.ConfBridge = (args) => this.Exec("ConfBridge", args);
        this.ConfKick = (args) => this.Exec("ConfKick", args);
        this.Congestion = (args) => this.Exec("Congestion", args);
        this.ContinueWhile = (args) => this.Exec("ContinueWhile", args);
        this.ControlPlayback = (args) => this.Exec("ControlPlayback", args);
        this.DAHDIScan = (args) => this.Exec("DAHDIScan", args);
        this.DateTime = (args) => this.Exec("DateTime", args);
        this.DBdeltree = (args) => this.Exec("DBdeltree", args);
        this.DeadAGI = (args) => this.Exec("DeadAGI", args);
        this.Dial = (args) => this.Exec("Dial", args);
        this.Dictate = (args) => this.Exec("Dictate", args);
        this.Directory = (args) => this.Exec("Directory", args);
        this.DISA = (args) => this.Exec("DISA", args);
        this.DumpChan = (args) => this.Exec("DumpChan", args);
        this.EAGI = (args) => this.Exec("EAGI", args);
        this.Echo = () => this.Exec("Echo", undefined);
        this.Else = (args) => this.Exec("Else", args);
        this.ElseIf = (args) => this.Exec("ElseIf", args);
        this.EndIf = () => this.Exec("EndIf", undefined);
        this.EndWhile = () => this.Exec("EndWhile", undefined);
        this.ExecIf = (args) => this.Exec("ExecIf", args);
        this.ExecIfTime = (args) => this.Exec("ExecIfTime", args);
        this.ExitIf = (args) => this.Exec("ExitIf", args);
        this.ExitWhile = () => this.Exec("ExitWhile", undefined);
        this.ExtenSpy = (args) => this.Exec("ExtenSpy", args);
        this.ExternalIVR = (args) => this.Exec("ExternalIVR", args);
        this.Festival = (args) => this.Exec("Festival", args);
        this.FollowMe = (args) => this.Exec("FollowMe", args);
        this.ForkCDR = (args) => this.Exec("ForkCDR", args);
        this.Gosub = (args) => this.Exec("Gosub", args);
        this.GosubIf = (args) => this.Exec("GosubIf", args);
        this.Goto = (args) => this.Exec("Goto", args);
        this.GotoIf = (args) => this.Exec("GotoIf", args);
        this.GotoIfTime = (args) => this.Exec("GotoIfTime", args);
        this.HangupCauseClear = (args) => this.Exec("HangupCauseClear", args);
        this.If = (args) => this.Exec("If", args);
        this.ImportVar = (args) => this.Exec("ImportVar", args);
        this.Incomplete = (args) => this.Exec("Incomplete", args);
        this.Log = (args) => this.Exec("Log", args);
        this.Macro = (args) => this.Exec("Macro", args);
        this.MacroExclusive = (args) => this.Exec("MacroExclusive", args);
        this.MacroExit = (args) => this.Exec("MacroExit", args);
        this.MacroIf = (args) => this.Exec("MacroIf", args);
        this.MessageSend = (args) => this.Exec("MessageSend", args);
        this.Milliwatt = (args) => this.Exec("Milliwatt", args);
        this.MinivmAccMess = (args) => this.Exec("MinivmAccMess", args);
        this.MinivmDelete = (args) => this.Exec("MinivmDelete", args);
        this.MinivmGreet = (args) => this.Exec("MinivmGreet", args);
        this.MinivmMWI = (args) => this.Exec("MinivmMWI", args);
        this.MinivmNotify = (args) => this.Exec("MinivmNotify", args);
        this.MinivmRecord = (args) => this.Exec("MinivmRecord", args);
        this.MixMonitor = (args) => this.Exec("MixMonitor", args);
        this.Monitor = (args) => this.Exec("Monitor", args);
        this.Morsecode = (args) => this.Exec("Morsecode", args);
        this.MP3Player = (args) => this.Exec("MP3Player", args);
        this.MSet = (args) => this.Exec("MSet", args);
        this.MusicOnHold = (args) => this.Exec("MusicOnHold", args);
        this.NoCDR = (args) => this.Exec("NoCDR", args);
        this.ODBC_Commit = (args) => this.Exec("ODBC_Commit", args);
        this.ODBC_Rollback = (args) => this.Exec("ODBC_Rollback", args);
        this.ODBCFinish = (args) => this.Exec("ODBCFinish", args);
        this.Originate = (args) => this.Exec("Originate", args);
        this.Page = (args) => this.Exec("Page", args);
        this.Park = (args) => this.Exec("Park", args);
        this.ParkAndAnnounce = (args) => this.Exec("ParkAndAnnounce", args);
        this.ParkedCall = (args) => this.Exec("ParkedCall", args);
        this.PauseMonitor = (args) => this.Exec("PauseMonitor", args);
        this.PauseQueueMember = (args) => this.Exec("PauseQueueMember", args);
        this.Pickup = (args) => this.Exec("Pickup", args);
        this.PickupChan = (args) => this.Exec("PickupChan", args);
        this.PlayTones = (args) => this.Exec("PlayTones", args);
        this.PrivacyManager = (args) => this.Exec("PrivacyManager", args);
        this.Proceeding = () => this.Exec("Proceeding", undefined);
        this.Progress = () => this.Exec("Progress", undefined);
        this.Queue = (args) => this.Exec("Queue", args);
        this.QueueLog = (args) => this.Exec("QueueLog", args);
        this.QueueUpdate = (args) => this.Exec("QueueUpdate", args);
        this.RaiseException = (args) => this.Exec("RaiseException", args);
        this.Read = (args) => this.Exec("Read", args);
        this.ReadExten = (args) => this.Exec("ReadExten", args);
        this.ReceiveFAX = (args) => this.Exec("ReceiveFAX", args);
        this.ReceiveMF = (args) => this.Exec("ReceiveMF", args);
        this.ReceiveSF = (args) => this.Exec("ReceiveSF", args);
        this.ReceiveText = (args) => this.Exec("ReceiveText", args);
        this.Record = (args) => this.Exec("Record", args);
        this.Reload = (args) => this.Exec("Reload", args);
        this.RemoveQueueMember = (args) => this.Exec("RemoveQueueMember", args);
        this.ResetCDR = (args) => this.Exec("ResetCDR", args);
        this.RetryDial = (args) => this.Exec("RetryDial", args);
        this.Return = (args) => this.Exec("Return", args);
        this.Ringing = (args) => this.Exec("Ringing", args);
        this.SayAlpha = (args) => this.Exec("SayAlpha", args);
        this.SayAlphaCase = (args) => this.Exec("SayAlphaCase", args);
        this.SayDigits = (args) => this.Exec("SayDigits", args);
        this.SayMoney = (args) => this.Exec("SayMoney", args);
        this.SayNumber = (args) => this.Exec("SayNumber", args);
        this.SayOrdinal = (args) => this.Exec("SayOrdinal", args);
        this.SayPhonetic = (args) => this.Exec("SayPhonetic", args);
        this.SayUnixTime = (args) => this.Exec("SayUnixTime", args);
        this.SendDTMF = (args) => this.Exec("SendDTMF", args);
        this.SendFAX = (args) => this.Exec("SendFAX", args);
        this.SendMF = (args) => this.Exec("SendMF", args);
        this.SendSF = (args) => this.Exec("SendSF", args);
        this.SendText = (args) => this.Exec("SendText", args);
        this.Set = (args) => this.Exec("Set", args);
        this.SetAMAFlags = (args) => this.Exec("SetAMAFlags", args);
        this.SMS = (args) => this.Exec("SMS", args);
        this.SoftHangup = (args) => this.Exec("SoftHangup", args);
        this.SpeechActivateGrammar = (args) => this.Exec("SpeechActivateGrammar", args);
        this.SpeechBackground = (args) => this.Exec("SpeechBackground", args);
        this.SpeechCreate = (args) => this.Exec("SpeechCreate", args);
        this.SpeechDeactivateGrammar = (args) => this.Exec("SpeechDeactivateGrammar", args);
        this.SpeechDestroy = (args) => this.Exec("SpeechDestroy", args);
        this.SpeechLoadGrammar = (args) => this.Exec("SpeechLoadGrammar", args);
        this.SpeechProcessingSound = (args) => this.Exec("SpeechProcessingSound", args);
        this.SpeechStart = (args) => this.Exec("SpeechStart", args);
        this.SpeechUnloadGrammar = (args) => this.Exec("SpeechUnloadGrammar", args);
        this.StackPop = (args) => this.Exec("StackPop", args);
        this.StartMusicOnHold = (args) => this.Exec("StartMusicOnHold", args);
        this.Stasis = (args) => this.Exec("Stasis", args);
        this.StopMixMonitor = (args) => this.Exec("StopMixMonitor", args);
        this.StopMonitor = (args) => this.Exec("StopMonitor", args);
        this.StopMusicOnHold = () => this.Exec("StopMusicOnHold", undefined);
        this.StopPlayTones = () => this.Exec("StopPlayTones", undefined);
        this.StoreDTMF = (args) => this.Exec("StoreDTMF", args);
        this.StreamEcho = (args) => this.Exec("StreamEcho", args);
        this.System = (args) => this.Exec("System", args);
        this.TestClient = (args) => this.Exec("TestClient", args);
        this.TestServer = (args) => this.Exec("TestServer", args);
        this.ToneScan = (args) => this.Exec("ToneScan", args);
        this.Transfer = (args) => this.Exec("Transfer", args);
        this.TryExec = (args) => this.Exec("TryExec", args);
        this.TrySystem = (args) => this.Exec("TrySystem", args);
        this.UnpauseMonitor = () => this.Exec("UnpauseMonitor", undefined);
        this.UnpauseQueueMember = (args) => this.Exec("UnpauseQueueMember", args);
        this.UserEvent = (args) => this.Exec("UserEvent", args);
        this.VMAuthenticate = (args) => this.Exec("VMAuthenticate", args);
        this.VMSayName = (args) => this.Exec("VMSayName", args);
        this.VoiceMail = (args) => this.Exec("VoiceMail", args);
        this.VoiceMailMain = (args) => this.Exec("VoiceMailMain", args);
        this.VoiceMailPlayMsg = (args) => this.Exec("VoiceMailPlayMsg", args);
        this.Wait = (args) => this.Exec("Wait", args);
        this.WaitDigit = (args) => this.Exec("WaitDigit", args);
        this.WaitExten = (args) => this.Exec("WaitExten", args);
        this.WaitForCondition = (args) => this.Exec("WaitForCondition", args);
        this.WaitForNoise = (args) => this.Exec("WaitForNoise", args);
        this.WaitForRing = (args) => this.Exec("WaitForRing", args);
        this.WaitForSilence = (args) => this.Exec("WaitForSilence", args);
        this.WaitForTone = (args) => this.Exec("WaitForTone", args);
        this.WaitUntil = (args) => this.Exec("WaitUntil", args);
        this.While = (args) => this.Exec("While", args);
        this.Zapateller = (args) => this.Exec("Zapateller", args);
        this._socket = props.socket;
        this.remoteServer = props.remoteServer;
        this.channel = props.channel || "";
        this.language = (props === null || props === void 0 ? void 0 : props.language) || "en";
        this.uniqueid = (props === null || props === void 0 ? void 0 : props.uniqueid) || "";
        this.version = (props === null || props === void 0 ? void 0 : props.version) || "";
        this.callerid = (props === null || props === void 0 ? void 0 : props.callerid) || "";
        this.calleridname = (props === null || props === void 0 ? void 0 : props.calleridname) || "";
        this.callingpres = (props === null || props === void 0 ? void 0 : props.callingpres) || "";
        this.callingani2 = (props === null || props === void 0 ? void 0 : props.callingani2) || "";
        this.callington = (props === null || props === void 0 ? void 0 : props.callington) || "";
        this.callingtns = (props === null || props === void 0 ? void 0 : props.callingtns) || "";
        this.dnid = (props === null || props === void 0 ? void 0 : props.dnid) || "";
        this.rdnis = (props === null || props === void 0 ? void 0 : props.rdnis) || "";
        this.context = (props === null || props === void 0 ? void 0 : props.context) || "";
        this.extension = (props === null || props === void 0 ? void 0 : props.extension) || "";
        this.priority = (props === null || props === void 0 ? void 0 : props.priority) || "";
        this.enhanced = (props === null || props === void 0 ? void 0 : props.enhanced) || "";
        this.accountcode = (props === null || props === void 0 ? void 0 : props.accountcode) || "";
        this.threadid = (props === null || props === void 0 ? void 0 : props.threadid) || "";
        this.currently = false; // Current operation
    }
    /**
     * Answer Channel
     */
    Answer() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.send("ANSWER");
        });
    }
    /**
     * Wildcard command handler
     * @param {string} command
     * @param {string|undefined} args
     */
    Exec(command, args) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.currently = command;
                yield this.send(`EXEC ${command} ${args}`);
                this.currently = false;
                return;
            }
            catch (err) {
                return false;
            }
        });
    }
    /**
     * Get AGI Variable
     * @param {string} variable
     * @returns
     */
    getVariable(variable) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.send("GET VARIABLE " + variable);
            }
            catch (err) {
                this.emit("error", "getVariable ERROR: " + err);
                return false;
            }
        });
    }
    /**
     * Hang up channel
     */
    Hangup() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.send("HANGUP");
        });
    }
    /**
     * Do Nothing (No Operation)
     * @param {string} args - text
     */
    NoOp(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.send(`NOOP ${args}`);
        });
    }
    /**
     * Sends audio file on channel.
     * @param {string} filename
     */
    Playback(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.currently = "Playback";
                yield this.send("STREAM FILE " + filename + ' ""');
                this.currently = false;
                return;
            }
            catch (err) {
                this.emit("error", "Playback ERROR: " + err);
                return false;
            }
        });
    }
    /**
     * Send FastAGI command to specified socket
     * @param {string} command
     */
    send(command) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                try {
                    this._socket.once("data", (data) => {
                        const response = this._parseResponse(data.toString().trim());
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
                        resolve(final ? final[1] : response.data);
                    });
                    if (this._socket.writable) {
                        this._socket.write(command + "\n", "utf8");
                    }
                    else {
                        // reject("Dead channel detected.");
                        this._socket && this._socket.end();
                        resolve(false);
                    }
                }
                catch (err) {
                    this.emit("error", "AGI Send Error:" + err);
                    resolve(false);
                    return;
                }
            });
        });
    }
    /**
     * Verbose log line
     * @param args - Text to log
     */
    Verbose(args) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.send(`VERBOSE ${args}`);
        });
    }
    /**
     * Parse AGI response codes
     * @param {string} str
     * @returns object - Response code,result,data
     */
    _parseResponse(str) {
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
        }
        catch (err) {
            return { code: "", result: "", data: str };
        }
    }
}
exports.AGIChannel = AGIChannel;
