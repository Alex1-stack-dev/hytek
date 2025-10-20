import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RunMenu from "./menus/RunMenu";
import TimingConsoleMenu from "./menus/TimingConsoleMenu";
import SeedingMenu from "./menus/SeedingMenu";
import ReportsMenu from "./menus/ReportsMenu";
import EventsMenu from "./menus/EventsMenu";
import ScoringMenu from "./menus/ScoringMenu";
import PreferencesMenu from "./menus/PreferencesMenu";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/run" element={<RunMenu />} />
        <Route path="/timing" element={<TimingConsoleMenu />} />
        <Route path="/seeding" element={<SeedingMenu />} />
        <Route path="/reports" element={<ReportsMenu />} />
        <Route path="/events" element={<EventsMenu />} />
        <Route path="/scoring" element={<ScoringMenu />} />
        <Route path="/preferences" element={<PreferencesMenu />} />
      </Routes>
    </BrowserRouter>
  );
}