import React, { useState } from "react";
export default function PreferencesMenu() {
  const [prefs, setPrefs] = useState({ scoringScheme: [5, 4, 3, 2, 1], exportFormat: "csv" });

  function handleSchemeChange(idx, value) {
    let scheme = [...prefs.scoringScheme];
    scheme[idx] = parseInt(value, 10) || 0;
    setPrefs({ ...prefs, scoringScheme: scheme });
  }

  return (
    <div>
      <h2>User Preferences</h2>
      <label>Export Format:
        <select value={prefs.exportFormat} onChange={e => setPrefs({ ...prefs, exportFormat: e.target.value })}>
          <option value="csv">CSV</option>
          <option value="pdf">PDF</option>
          <option value="ev3">EV3</option>
          <option value="hy3">HY3</option>
        </select>
      </label>
      <h3>Scoring Scheme</h3>
      {prefs.scoringScheme.map((pts, idx) => (
        <div key={idx}>
          Place {idx + 1}: <input value={pts} onChange={e => handleSchemeChange(idx, e.target.value)} />
        </div>
      ))}
    </div>
  );
}