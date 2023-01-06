import React from "react";
import Chart, { plugins } from "chart.js/auto";
import { Pie } from "react-chartjs-2";

const Stars = () => {
  return (
    <div className="stars">
      <Pie
        data={{
          datasets: [
            {
              data: [22, 45, 27],
              backgroundColor: ["#a400a4", "#2a6fff", "gold"],
            },
          ],
          labels: ["html", "css", "javascript"],
        }}
        options={{
          plugins: {
            legend: { position: "left" },
            title: {
              text: "ستاره ها برحسب زبان",
              font: {
                size: 14,
                family: "iransans",
              },
              display: true,
              position: "bottom",
            },
          },
        }}
      />
    </div>
  );
};

export default Stars;
