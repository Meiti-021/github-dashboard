import React from "react";
import Chart, { plugins } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const Languages = () => {
  return (
    <div className="languages">
      <Doughnut
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
              text: "زبان های استفاده شده در پروژه ها",
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

export default Languages;
