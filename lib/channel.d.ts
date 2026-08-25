/// <reference types="node" />
/// <reference types="node" />
/**
 *  Asterisk AGI (FastAGI) Server for Nodejs / Channel
 *  @module node-asteriskagi
 *  @license MIT
 *  @author Corey S. McFadden <cmcfadden@clearlyip.com>
 *  @copyright This project is not affiliated with, endorsed by, or sponsored by Digium Inc. or Sangoma Technologies Corp, holders of the "Asterisk" trademark, which is used here for identification purposes only.
 */
import * as net from "net";
import events from "events";
export declare class AGIChannel extends events.EventEmitter {
    private _socket;
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
    currently?: string | false;
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
    });
    AddQueueMember: (args: string) => Promise<false | undefined>;
    AgentLogin: (args: string) => Promise<false | undefined>;
    AgentRequest: (args: string) => Promise<false | undefined>;
    AGI: (args: string) => Promise<false | undefined>;
    AlarmReceiver: (args: string) => Promise<false | undefined>;
    AMD: (args: string) => Promise<false | undefined>;
    AttendedTransfer: (args: string) => Promise<false | undefined>;
    AudioSocket: (args: string) => Promise<false | undefined>;
    Authenticate: (args: string) => Promise<false | undefined>;
    Background: (args: string) => Promise<false | undefined>;
    BackGround: (args: string) => Promise<false | undefined>;
    BackgroundDetect: (args: string) => Promise<false | undefined>;
    BlindTransfer: (args: string) => Promise<false | undefined>;
    Bridge: (args: string) => Promise<false | undefined>;
    BridgeAdd: (args: string) => Promise<false | undefined>;
    BridgeWait: (args: string) => Promise<false | undefined>;
    Busy: (args: string | undefined) => Promise<false | undefined>;
    CallCompletionCancel: (args: string) => Promise<false | undefined>;
    CallCompletionRequest: (args: string) => Promise<false | undefined>;
    CELGenUserEvent: (args: string) => Promise<false | undefined>;
    ChangeMonitor: (args: string) => Promise<false | undefined>;
    ChanIsAvail: (args: string) => Promise<false | undefined>;
    ChannelRedirect: (args: string) => Promise<false | undefined>;
    ChanSpy: (args: string) => Promise<false | undefined>;
    ClearHash: (args: string) => Promise<false | undefined>;
    ConfBridge: (args: string) => Promise<false | undefined>;
    ConfKick: (args: string) => Promise<false | undefined>;
    Congestion: (args: string | undefined) => Promise<false | undefined>;
    ContinueWhile: (args: string) => Promise<false | undefined>;
    ControlPlayback: (args: string) => Promise<false | undefined>;
    DAHDIScan: (args: string) => Promise<false | undefined>;
    DateTime: (args: string) => Promise<false | undefined>;
    DBdeltree: (args: string) => Promise<false | undefined>;
    DeadAGI: (args: string) => Promise<false | undefined>;
    Dial: (args: string) => Promise<false | undefined>;
    Dictate: (args: string) => Promise<false | undefined>;
    Directory: (args: string) => Promise<false | undefined>;
    DISA: (args: string) => Promise<false | undefined>;
    DumpChan: (args: string) => Promise<false | undefined>;
    EAGI: (args: string) => Promise<false | undefined>;
    Echo: () => Promise<false | undefined>;
    Else: (args: string) => Promise<false | undefined>;
    ElseIf: (args: string) => Promise<false | undefined>;
    EndIf: () => Promise<false | undefined>;
    EndWhile: () => Promise<false | undefined>;
    ExecIf: (args: string) => Promise<false | undefined>;
    ExecIfTime: (args: string) => Promise<false | undefined>;
    ExitIf: (args: string) => Promise<false | undefined>;
    ExitWhile: () => Promise<false | undefined>;
    ExtenSpy: (args: string) => Promise<false | undefined>;
    ExternalIVR: (args: string) => Promise<false | undefined>;
    Festival: (args: string) => Promise<false | undefined>;
    FollowMe: (args: string) => Promise<false | undefined>;
    ForkCDR: (args: string | undefined) => Promise<false | undefined>;
    Gosub: (args: string) => Promise<false | undefined>;
    GosubIf: (args: string) => Promise<false | undefined>;
    Goto: (args: string) => Promise<false | undefined>;
    GotoIf: (args: string) => Promise<false | undefined>;
    GotoIfTime: (args: string) => Promise<false | undefined>;
    HangupCauseClear: (args: string) => Promise<false | undefined>;
    If: (args: string) => Promise<false | undefined>;
    ImportVar: (args: string) => Promise<false | undefined>;
    Incomplete: (args: string) => Promise<false | undefined>;
    Log: (args: string) => Promise<false | undefined>;
    Macro: (args: string) => Promise<false | undefined>;
    MacroExclusive: (args: string) => Promise<false | undefined>;
    MacroExit: (args: string) => Promise<false | undefined>;
    MacroIf: (args: string) => Promise<false | undefined>;
    MessageSend: (args: string) => Promise<false | undefined>;
    Milliwatt: (args: string | undefined) => Promise<false | undefined>;
    MinivmAccMess: (args: string) => Promise<false | undefined>;
    MinivmDelete: (args: string) => Promise<false | undefined>;
    MinivmGreet: (args: string) => Promise<false | undefined>;
    MinivmMWI: (args: string) => Promise<false | undefined>;
    MinivmNotify: (args: string) => Promise<false | undefined>;
    MinivmRecord: (args: string) => Promise<false | undefined>;
    MixMonitor: (args: string) => Promise<false | undefined>;
    Monitor: (args: string) => Promise<false | undefined>;
    Morsecode: (args: string) => Promise<false | undefined>;
    MP3Player: (args: string) => Promise<false | undefined>;
    MSet: (args: string) => Promise<false | undefined>;
    MusicOnHold: (args: string | undefined) => Promise<false | undefined>;
    NoCDR: (args: string) => Promise<false | undefined>;
    ODBC_Commit: (args: string) => Promise<false | undefined>;
    ODBC_Rollback: (args: string) => Promise<false | undefined>;
    ODBCFinish: (args: string) => Promise<false | undefined>;
    Originate: (args: string) => Promise<false | undefined>;
    Page: (args: string) => Promise<false | undefined>;
    Park: (args: string) => Promise<false | undefined>;
    ParkAndAnnounce: (args: string) => Promise<false | undefined>;
    ParkedCall: (args: string) => Promise<false | undefined>;
    PauseMonitor: (args: string) => Promise<false | undefined>;
    PauseQueueMember: (args: string) => Promise<false | undefined>;
    Pickup: (args: string) => Promise<false | undefined>;
    PickupChan: (args: string) => Promise<false | undefined>;
    PlayTones: (args: string) => Promise<false | undefined>;
    PrivacyManager: (args: string) => Promise<false | undefined>;
    Proceeding: () => Promise<false | undefined>;
    Progress: () => Promise<false | undefined>;
    Queue: (args: string) => Promise<false | undefined>;
    QueueLog: (args: string) => Promise<false | undefined>;
    QueueUpdate: (args: string) => Promise<false | undefined>;
    RaiseException: (args: string) => Promise<false | undefined>;
    Read: (args: string) => Promise<false | undefined>;
    ReadExten: (args: string) => Promise<false | undefined>;
    ReceiveFAX: (args: string) => Promise<false | undefined>;
    ReceiveMF: (args: string) => Promise<false | undefined>;
    ReceiveSF: (args: string) => Promise<false | undefined>;
    ReceiveText: (args: string) => Promise<false | undefined>;
    Record: (args: string) => Promise<false | undefined>;
    Reload: (args: string | undefined) => Promise<false | undefined>;
    RemoveQueueMember: (args: string) => Promise<false | undefined>;
    ResetCDR: (args: string) => Promise<false | undefined>;
    RetryDial: (args: string) => Promise<false | undefined>;
    Return: (args: string) => Promise<false | undefined>;
    Ringing: (args: string) => Promise<false | undefined>;
    SayAlpha: (args: string) => Promise<false | undefined>;
    SayAlphaCase: (args: string) => Promise<false | undefined>;
    SayDigits: (args: string) => Promise<false | undefined>;
    SayMoney: (args: string) => Promise<false | undefined>;
    SayNumber: (args: string) => Promise<false | undefined>;
    SayOrdinal: (args: string) => Promise<false | undefined>;
    SayPhonetic: (args: string) => Promise<false | undefined>;
    SayUnixTime: (args: string) => Promise<false | undefined>;
    SendDTMF: (args: string) => Promise<false | undefined>;
    SendFAX: (args: string) => Promise<false | undefined>;
    SendMF: (args: string) => Promise<false | undefined>;
    SendSF: (args: string) => Promise<false | undefined>;
    SendText: (args: string) => Promise<false | undefined>;
    Set: (args: string) => Promise<false | undefined>;
    SetAMAFlags: (args: string) => Promise<false | undefined>;
    SMS: (args: string) => Promise<false | undefined>;
    SoftHangup: (args: string) => Promise<false | undefined>;
    SpeechActivateGrammar: (args: string) => Promise<false | undefined>;
    SpeechBackground: (args: string) => Promise<false | undefined>;
    SpeechCreate: (args: string) => Promise<false | undefined>;
    SpeechDeactivateGrammar: (args: string) => Promise<false | undefined>;
    SpeechDestroy: (args: string) => Promise<false | undefined>;
    SpeechLoadGrammar: (args: string) => Promise<false | undefined>;
    SpeechProcessingSound: (args: string) => Promise<false | undefined>;
    SpeechStart: (args: string) => Promise<false | undefined>;
    SpeechUnloadGrammar: (args: string) => Promise<false | undefined>;
    StackPop: (args: string) => Promise<false | undefined>;
    StartMusicOnHold: (args: string) => Promise<false | undefined>;
    Stasis: (args: string) => Promise<false | undefined>;
    StopMixMonitor: (args: string | undefined) => Promise<false | undefined>;
    StopMonitor: (args: string | undefined) => Promise<false | undefined>;
    StopMusicOnHold: () => Promise<false | undefined>;
    StopPlayTones: () => Promise<false | undefined>;
    StoreDTMF: (args: string) => Promise<false | undefined>;
    StreamEcho: (args: string | undefined) => Promise<false | undefined>;
    System: (args: string) => Promise<false | undefined>;
    TestClient: (args: string) => Promise<false | undefined>;
    TestServer: (args: string) => Promise<false | undefined>;
    ToneScan: (args: string | undefined) => Promise<false | undefined>;
    Transfer: (args: string) => Promise<false | undefined>;
    TryExec: (args: string) => Promise<false | undefined>;
    TrySystem: (args: string) => Promise<false | undefined>;
    UnpauseMonitor: () => Promise<false | undefined>;
    UnpauseQueueMember: (args: string) => Promise<false | undefined>;
    UserEvent: (args: string) => Promise<false | undefined>;
    VMAuthenticate: (args: string) => Promise<false | undefined>;
    VMSayName: (args: string) => Promise<false | undefined>;
    VoiceMail: (args: string) => Promise<false | undefined>;
    VoiceMailMain: (args: string | undefined) => Promise<false | undefined>;
    VoiceMailPlayMsg: (args: string) => Promise<false | undefined>;
    Wait: (args: string) => Promise<false | undefined>;
    WaitDigit: (args: string | undefined) => Promise<false | undefined>;
    WaitExten: (args: string | undefined) => Promise<false | undefined>;
    WaitForCondition: (args: string) => Promise<false | undefined>;
    WaitForNoise: (args: string | undefined) => Promise<false | undefined>;
    WaitForRing: (args: string | undefined) => Promise<false | undefined>;
    WaitForSilence: (args: string | undefined) => Promise<false | undefined>;
    WaitForTone: (args: string | undefined) => Promise<false | undefined>;
    WaitUntil: (args: string | undefined) => Promise<false | undefined>;
    While: (args: string) => Promise<false | undefined>;
    Zapateller: (args: string) => Promise<false | undefined>;
    /**
     * Answer Channel
     */
    Answer(): Promise<unknown>;
    /**
     * Wildcard command handler
     * @param {string} command
     * @param {string|undefined} args
     */
    Exec(command: string, args: string | undefined): Promise<false | undefined>;
    /**
     * Get AGI Variable
     * @param {string} variable
     * @returns
     */
    getVariable(variable: string): Promise<unknown>;
    /**
     * Hang up channel
     */
    Hangup(): Promise<void>;
    /**
     * Do Nothing (No Operation)
     * @param {string} args - text
     */
    NoOp(args: string): Promise<unknown>;
    /**
     * Sends audio file on channel.
     * @param {string} filename
     */
    Playback(filename: string): Promise<false | undefined>;
    /**
     * Send FastAGI command to specified socket
     * @param {string} command
     */
    send(command: string): Promise<unknown>;
    /**
     * Verbose log line
     * @param args - Text to log
     */
    Verbose(args: string): Promise<unknown>;
    /**
     * Parse AGI response codes
     * @param {string} str
     * @returns object - Response code,result,data
     */
    _parseResponse(str: string): {
        code: string;
        result: number;
        data: string;
    } | {
        code: string;
        result: string;
        data: string;
    };
}
