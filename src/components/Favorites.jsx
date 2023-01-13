import React, { useEffect } from "react";
import Chart, { Colors } from "chart.js/auto";
import { useState } from "react";

import { Bar } from "react-chartjs-2";
import { useGlobalContext } from "../contexts/Contexts";

const Favorites = () => {
  const { repos } = useGlobalContext();
  const [chartData, setChartData] = useState({ data: [], labels: [] });
  useEffect(() => {
    const finalData = {};
    repos.forEach((repo) => {
      finalData[repo.name] = repo.stargazers_count;
    });

    const arrayOfData = Object.entries(finalData);
    const topRatedRepos = arrayOfData.sort((a, b) => b[1] - a[1]);
    if (topRatedRepos.length > 5) {
      const top5Repos = topRatedRepos.slice(0, 5);
      const finalRatedDatas = [];
      const finalRatedLabels = [];
      top5Repos.forEach((elem) => {
        finalRatedDatas.push(elem[1]);
        finalRatedLabels.push(elem[0]);
      });
      setChartData({
        data: [...finalRatedDatas],
        labels: [...finalRatedLabels],
      });
    } else if (topRatedRepos.length < 5) {
      const finalRatedDatas = [];
      const finalRatedLabels = [];
      topRatedRepos.forEach((elem) => {
        finalRatedDatas.push(elem[1]);
        finalRatedLabels.push(elem[0]);
      });

      setChartData({
        data: [...finalRatedDatas],
        labels: [...finalRatedLabels],
      });
    }
  }, []);

  return (
    <div className="favorites">
      <Bar
        data={{
          labels: chartData.labels,
          datasets: [
            {
              maxBarThickness: 50,
              barPercentage: 1,
              data: chartData.data,
              backgroundColor: ["#6957da"],
              label: "محبوبترین پروژه ها برحسب تعداد ستاره",
              yAxisID: "yAxis",
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "محبوب ترین پروژه ها برحسب تعداد ستاره",
              position: "bottom",
              font: { family: "iransans", size: 15 },
            },
            subtitle: {
              display: true,
              text: "تعداد ستاره ها",
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
        }}
      />
    </div>
  );
};

export default Favorites;
