unit ImportExport;

interface

procedure ImportCSV(FileName: string);
procedure ExportCSV(FileName: string);
procedure ImportHY3(FileName: string);
procedure ExportHY3(FileName: string);
procedure ImportSDIF(FileName: string);
procedure ExportSDIF(FileName: string);
procedure ImportCL2(FileName: string);
procedure ExportCL2(FileName: string);
procedure ImportEV3(FileName: string);
procedure ExportEV3(FileName: string);
procedure ImportMDB(FileName: string);

implementation

procedure ImportCSV(FileName: string);
begin
  // Parse CSV and update DBF
end;

procedure ExportCSV(FileName: string);
begin
  // Export meet data to CSV
end;

// Similar for HY3, SDIF, CL2, EV3, MDB

end.