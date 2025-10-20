import React, { useState } from "react";
export default function EventsMenu() {
  const [events, setEvents] = useState([
    { name: "50 Free", distance: 50, stroke: "Freestyle" },
    { name: "100 Back", distance: 100, stroke: "Backstroke" }
  ]);
  const [newEvent, setNewEvent] = useState({ name: "", distance: "", stroke: "" });

  function addEvent() {
    setEvents([...events, newEvent]);
    setNewEvent({ name: "", distance: "", stroke: "" });
  }

  return (
    <div>
      <h2>Events Menu</h2>
      <input placeholder="Name" value={newEvent.name} onChange={e => setNewEvent({ ...newEvent, name: e.target.value })} />
      <input placeholder="Distance" value={newEvent.distance} onChange={e => setNewEvent({ ...newEvent, distance: e.target.value })} />
      <input placeholder="Stroke" value={newEvent.stroke} onChange={e => setNewEvent({ ...newEvent, stroke: e.target.value })} />
      <button onClick={addEvent}>Add Event</button>
      <ul>
        {events.map((evt, idx) => <li key={idx}>{evt.name} - {evt.distance}m {evt.stroke}</li>)}
      </ul>
    </div>
  );
}