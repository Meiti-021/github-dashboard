import React, { useEffect } from "react";
import Chart, { Colors } from "chart.js/auto";
import { useState } from "react";

import { Bar } from "react-chartjs-2";
import { useGlobalContext } from "../contexts/Contexts";
const colors = [
  "rgb(222,214,238)",
  "rgb(80,255,254)",
  "rgb(241,78,121)",
  "rgb(236,255,133)",
  "rgb(193,162,255)",
  "rgb(78,255,141)",
];

const Events = ({ color }) => {
  const [chartData, setChartData] = useState({ data: [], labels: [] });
  const { event } = useGlobalContext();
  useEffect(() => {
    const allTypes = {};
    event.forEach((event) => {
      if (allTypes.hasOwnProperty(event.type)) {
        allTypes[event.type] += 1;
      } else {
        allTypes[event.type] = 1;
      }
    });
    setChartData({
      data: Object.values(allTypes),
      labels: Object.keys(allTypes),
    });
  }, []);
  return (
    <div className="events" style={{ border: `1px solid ${color}` }}>
      <Bar
        data={{
          labels: chartData.labels,
          datasets: [
            {
              maxBarThickness: 50,
              barPercentage: 1,
              data: chartData.data,
              backgroundColor: [color],
              label: "نوع فعالیت های اخیر",
              yAxisID: "yAxis",
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "نوع فعالیت های اخیر",
              position: "top",
              font: { family: "iransans", size: 15 },
            },
            subtitle: {
              display: true,
              text: "دفعات تکرار",
              position: "left",
              font: {
                size: 15,
                family: "iransans",
              },
            },
            legend: {
              display: false,
            },
          },

          scales: {
            yAxis: {
              ticks: {
                stepSize:
                  chartData.data[0] > 10000
                    ? 1000
                    : chartData.data[0] > 1000 && chartData.data[0] < 10000
                    ? 100
                    : chartData.data[0] > 100 && chartData.data[0] < 1000
                    ? 50
                    : chartData.data[0] > 10 && chartData.data[0] < 100
                    ? 50
                    : 1,
              },
            },
          },
          animation: {
            tension: {
              duration: 3000,
            },
          },
        }}
      />
    </div>
  );
};

export default Events;
