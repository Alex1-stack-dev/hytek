unit MainForm;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, Menus, Grids, DBGrids, ExtCtrls, StdCtrls, ComCtrls, DataModule, Licensing;

type
  TfrmMain = class(TForm)
    MainMenu: TMainMenu;
    miFile: TMenuItem;
    miOpenMeet: TMenuItem;
    miImport: TMenuItem;
    miExport: TMenuItem;
    miReports: TMenuItem;
    miTiming: TMenuItem;
    miExit: TMenuItem;
    miLicense: TMenuItem;
    StatusBar: TStatusBar;
    MeetGrid: TDBGrid;
    procedure FormCreate(Sender: TObject);
    procedure miOpenMeetClick(Sender: TObject);
    procedure miImportClick(Sender: TObject);
    procedure miExportClick(Sender: TObject);
    procedure miReportsClick(Sender: TObject);
    procedure miTimingClick(Sender: TObject);
    procedure miLicenseClick(Sender: TObject);
    procedure miExitClick(Sender: TObject);
  private
    procedure UpdateStatus;
  public
    { Public declarations }
  end;

var
  frmMain: TfrmMain;

implementation

{$R *.dfm}

procedure TfrmMain.FormCreate(Sender: TObject);
begin
  if not CheckLicense then
  begin
    ShowMessage('License check failed. Exiting.');
    Application.Terminate;
    Exit;
  end;
  UpdateStatus;
end;

procedure TfrmMain.UpdateStatus;
begin
  StatusBar.SimpleText := 'Meet Manager | User: ' + GetCurrentUser;
end;

procedure TfrmMain.miOpenMeetClick(Sender: TObject);
begin
  dm.OpenMeetDialog;
end;

procedure TfrmMain.miImportClick(Sender: TObject);
begin
  dm.ImportMeetData;
end;

procedure TfrmMain.miExportClick(Sender: TObject);
begin
  dm.ExportMeetData;
end;

procedure TfrmMain.miReportsClick(Sender: TObject);
begin
  dm.ShowReportsDialog;
end;

procedure TfrmMain.miTimingClick(Sender: TObject);
begin
  dm.ShowTimingConsole;
end;

procedure TfrmMain.miLicenseClick(Sender: TObject);
begin
  ShowLicenseStatus;
end;

procedure TfrmMain.miExitClick(Sender: TObject);
begin
  Application.Terminate;
end;

end.