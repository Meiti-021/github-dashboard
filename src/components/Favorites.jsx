import React from "react";
import Chart, { Colors } from "chart.js/auto";

import { Bar } from "react-chartjs-2";

const DefaultData = {
  labels: ["html", "css", "java"],
  datasets: [
    {
      data: [10, 20, 70, 40],
      backgroundColor: ["#2a6fff"],
      label: "محبوبترین پروژه ها",
    },
  ],
};

const Favorites = () => {
  return (
    <div className="favorites">
      <Bar
        data={DefaultData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "محبوب ترین پروژه ها",
              position: "bottom",
              font: { family: "iransans", size: 15 },
            },
            subtitle: {
              display: true,
              text: "حجم کدها",
              position: " center",
              padding: 2,
            },
            legend: {
              display: false,
            },
          },
          layout: {
            autoPadding: false,
          },
        }}
      />
    </div>
  );
};

export default Favorites;
