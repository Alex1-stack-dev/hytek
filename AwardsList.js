import React from "react";
export default function AwardsList({ awards }) {
  return (
    <div>
      <h2>Awards</h2>
      <ul>
        {awards.map((award, idx) => (
          <li key={idx}>
            {award.athlete} (Heat {award.heat}, Lane {award.lane}) - {award.award}
          </li>
        ))}
      </ul>
    </div>
  );
}