unit TimingConsole;

interface

procedure ConnectToTimingDevice;
procedure AutoDetectTimingDevice;
procedure ReceiveTimingData;
procedure SendScoreboardData;

implementation

uses
  SerialComm, ScoreboardDisplay, AuditTrail;

procedure ConnectToTimingDevice;
begin
  // Show list of serial/USB ports, connect using selected protocol (CTS, Dolphin, Daktronics, TimeMachine)
end;

procedure AutoDetectTimingDevice;
begin
  // Enumerate all COM ports, send handshake (e.g., 'TM?'), wait for device response, match protocol
  LogAction('Auto-detection started');
end;

procedure ReceiveTimingData;
begin
  // Parse timing data, update DBF tables
  LogAction('Timing data received');
end;

procedure SendScoreboardData;
begin
  // Format and send to Daktronics/Colorado via RS232
  LogAction('Scoreboard updated');
end;

end.