import React from "react";
export default function ResultsTable({ results }) {
  return (
    <div>
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>Athlete</th>
            <th>Heat</th>
            <th>Lane</th>
            <th>Time</th>
            <th>Place</th>
            <th>Points</th>
            <th>DQ</th>
            <th>Award</th>
          </tr>
        </thead>
        <tbody>
          {results.map((row, idx) => (
            <tr key={idx}>
              <td>{row.athlete}</td>
              <td>{row.heat}</td>
              <td>{row.lane}</td>
              <td>{row.time}</td>
              <td>{row.place}</td>
              <td>{row.points}</td>
              <td>{row.dq ? "DQ" : ""}</td>
              <td>{row.award || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}