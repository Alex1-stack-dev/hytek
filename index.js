const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:3000";
export async function fetchLiveResults() {
  const res = await fetch(`${API_BASE}/api/results/meet1`, { credentials: "include" });
  if (!res.ok) throw new Error("Failed to fetch results");
  return res.json();
}
export async function fetchLiveScoreboard() {
  const res = await fetch(`${API_BASE}/api/scoreboard/meet1`, { credentials: "include" });
  if (!res.ok) throw new Error("Failed to fetch scoreboard");
  return res.json();
}