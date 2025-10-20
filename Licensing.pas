unit Licensing;

interface

function CheckLicense: Boolean;
function ShowLicenseStatus: Boolean;
function GetCurrentUser: string;

implementation

uses
  Windows, Registry, SysUtils;

function CheckLicense: Boolean;
var
  Reg: TRegistry;
  Serial: string;
begin
  Reg := TRegistry.Create;
  try
    Reg.RootKey := HKEY_LOCAL_MACHINE;
    if Reg.OpenKeyReadOnly('\Software\MeetManager') then
    begin
      Serial := Reg.ReadString('Serial');
      Result := (Serial = 'VALID-SERIAL-KEY');
    end
    else Result := False;
  finally
    Reg.Free;
  end;
end;

function ShowLicenseStatus: Boolean;
begin
  // Show license status dialog
end;

function GetCurrentUser: string;
begin
  Result := GetEnvironmentVariable('USERNAME');
end;

end.