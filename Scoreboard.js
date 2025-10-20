import React from "react";
export default function Scoreboard({ scoreboard }) {
  return (
    <div>
      <h2>Scoreboard</h2>
      <table>
        <thead>
          <tr>
            <th>Lane</th>
            <th>Athlete</th>
            <th>Time</th>
            <th>Place</th>
          </tr>
        </thead>
        <tbody>
          {scoreboard.map((row, idx) => (
            <tr key={idx}>
              <td>{row.lane}</td>
              <td>{row.athlete}</td>
              <td>{row.time}</td>
              <td>{row.place}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}