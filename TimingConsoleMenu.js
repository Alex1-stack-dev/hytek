import React, { useState } from "react";
export default function TimingConsoleMenu() {
  const [connected, setConnected] = useState(false);
  const [logs, setLogs] = useState([]);
  // Simulate hardware connection
  function connectConsole(system) {
    setConnected(true);
    setLogs(logs => [
      ...logs,
      `Connected to ${system} timing system (simulated)`
    ]);
    // Real implementation: Use Electron main process/node-serialport for actual hardware
  }

  return (
    <div>
      <h2>Timing Console Menu</h2>
      <button onClick={() => connectConsole("CTS Dolphin")}>Connect CTS Dolphin</button>
      <button onClick={() => connectConsole("CTS Touchpads")}>Connect CTS Touchpads</button>
      <button onClick={() => connectConsole("Daktronics")}>Connect Daktronics</button>
      <button onClick={() => connectConsole("Time Machine G2")}>Connect Time Machine G2</button>
      <ul>
        {logs.map((log, idx) => <li key={idx}>{log}</li>)}
      </ul>
      {connected && <div>Timing console connected (simulation)</div>}
    </div>
  );
}