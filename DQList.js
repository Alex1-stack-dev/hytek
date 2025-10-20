import React from "react";
export default function DQList({ dqs }) {
  return (
    <div>
      <h2>Disqualifications (DQ)</h2>
      <ul>
        {dqs.map((dq, idx) => (
          <li key={idx}>
            {dq.athlete} (Heat {dq.heat}, Lane {dq.lane}) - {dq.dqReason}
          </li>
        ))}
      </ul>
    </div>
  );
}