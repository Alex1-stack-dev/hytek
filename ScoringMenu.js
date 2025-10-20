import React, { useState } from "react";
export default function ScoringMenu() {
  const [scheme, setScheme] = useState([5, 4, 3, 2, 1]);
  function handleChange(idx, value) {
    let newScheme = [...scheme];
    newScheme[idx] = parseInt(value, 10) || 0;
    setScheme(newScheme);
  }
  return (
    <div>
      <h2>Scoring Preferences</h2>
      <table>
        <thead>
          <tr>
            <th>Place</th><th>Points</th>
          </tr>
        </thead>
        <tbody>
          {scheme.map((pts, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>
                <input value={pts} onChange={e => handleChange(idx, e.target.value)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <pre>Current Scheme: {scheme.join(", ")}</pre>
    </div>
  );
}