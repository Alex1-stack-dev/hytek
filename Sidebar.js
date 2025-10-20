import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/run">Run Meet</Link></li>
        <li><Link to="/timing">Timing Console</Link></li>
        <li><Link to="/seeding">Seeding</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/scoring">Scoring</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/preferences">Preferences</Link></li>
      </ul>
    </nav>
  );
}