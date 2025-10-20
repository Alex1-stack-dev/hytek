import React from "react";
import jsPDF from "jspdf";

export default function ReportsMenu() {
  function exportCSV() {
    // Simulate export
    const csv = "Athlete,Time,Place,Points\nJohn,55.98,1,5\nAmy,57.12,2,4";
    const blob = new Blob([csv], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "results.csv";
    a.click();
  }

  function exportPDF() {
    const doc = new jsPDF();
    doc.text("Meet Results", 10, 10);
    doc.text("John S. - 55.98 - 1st Place", 10, 20);
    doc.text("Amy T. - 57.12 - 2nd Place", 10, 30);
    doc.save("results.pdf");
  }

  function exportHY3() {
    // Simulate HY3 export (real format needs more implementation, see HY-Tek specs)
    const hy3 = "HY3 DATA EXAMPLE";
    const blob = new Blob([hy3], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "results.hy3";
    a.click();
  }

  function exportEV3() {
    // Simulate EV3 export (real format needs more implementation, see HY-Tek specs)
    const ev3 = "EV3 DATA EXAMPLE";
    const blob = new Blob([ev3], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = "results.ev3";
    a.click();
  }

  return (
    <div>
      <h2>Reports Menu</h2>
      <button onClick={exportCSV}>Export CSV</button>
      <button onClick={exportPDF}>Export PDF</button>
      <button onClick={exportHY3}>Export HY3</button>
      <button onClick={exportEV3}>Export EV3</button>
    </div>
  );
}