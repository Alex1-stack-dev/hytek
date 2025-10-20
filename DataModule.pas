unit DataModule;

interface

uses
  SysUtils, Classes, DB, DBF, DBTables, Dialogs, AuditTrail;

type
  Tdm = class(TDataModule)
    dbMeet: TDBF;
    tblHeats: TDBF;
    tblEvents: TDBF;
    tblAthletes: TDBF;
    tblEntries: TDBF;
    tblSplits: TDBF;
    tblTeams: TDBF;
    procedure OpenMeetDialog;
    procedure ImportMeetData;
    procedure ExportMeetData;
    procedure ShowReportsDialog;
    procedure ShowTimingConsole;
  private
    procedure BackupDBF;
    procedure RestoreDBF;
    procedure SelfHealData;
  public
    { Public declarations }
  end;

var
  dm: Tdm;

implementation

{$R *.dfm}

procedure Tdm.OpenMeetDialog;
begin
  // File open dialog logic for .DBF meet files
end;

procedure Tdm.ImportMeetData;
begin
  // Import CSV/HY3/SDIF/CL2/EV3 routines
end;

procedure Tdm.ExportMeetData;
begin
  // Export CSV/HY3/SDIF/CL2/EV3 routines
end;

procedure Tdm.ShowReportsDialog;
begin
  // Show reporting options (RTF, PDF, TXT, CSV)
end;

procedure Tdm.ShowTimingConsole;
begin
  // Launch timing console UI
end;

procedure Tdm.BackupDBF;
begin
  // Use zlib or third-party compression for DBF backup
end;

procedure Tdm.RestoreDBF;
begin
  // Restore DBF from backup
end;

procedure Tdm.SelfHealData;
begin
  // Fix common DBF/data bugs (duplicate places, missing results, scoring errors)
  LogAction('Self-heal data triggered');
end;

end.