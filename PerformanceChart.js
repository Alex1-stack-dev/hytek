import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export default function PerformanceChart({ results }) {
  const data = {
    labels: results.map(r => r.athlete),
    datasets: [
      {
        label: "Final Time",
        data: results.map(r => parseFloat(r.time)),
        borderColor: "blue",
        fill: false,
      },
    ],
  };
  return (
    <div>
      <h2>Performance Graph</h2>
      <Line data={data} />
    </div>
  );
}