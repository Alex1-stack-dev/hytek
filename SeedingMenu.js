import React, { useState } from "react";
export default function SeedingMenu() {
  const [entries, setEntries] = useState([
    { athlete: "John S.", seedTime: 56.12 },
    { athlete: "Amy T.", seedTime: 57.03 },
    // ... more entries
  ]);
  const [seeded, setSeeded] = useState([]);
  const [rule, setRule] = useState("fastest-last");

  function seedEntries() {
    let sorted = [...entries];
    if (rule === "fastest-last") sorted.sort((a, b) => a.seedTime - b.seedTime);
    if (rule === "random") sorted.sort(() => Math.random() - 0.5);
    // Circle seeding, custom rules can be added here
    setSeeded(
      sorted.map((entry, idx) => ({
        ...entry,
        heat: Math.floor(idx / 8) + 1,
        lane: (idx % 8) + 1,
      }))
    );
  }

  return (
    <div>
      <h2>Seeding Menu</h2>
      <select value={rule} onChange={e => setRule(e.target.value)}>
        <option value="fastest-last">Fastest Last</option>
        <option value="random">Random</option>
        <option value="circle">Circle Seeding</option>
      </select>
      <button onClick={seedEntries}>Seed Entries</button>
      <table>
        <thead>
          <tr>
            <th>Athlete</th><th>Seed Time</th><th>Heat</th><th>Lane</th>
          </tr>
        </thead>
        <tbody>
          {seeded.map((row, idx) => (
            <tr key={idx}>
              <td>{row.athlete}</td>
              <td>{row.seedTime}</td>
              <td>{row.heat}</td>
              <td>{row.lane}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}