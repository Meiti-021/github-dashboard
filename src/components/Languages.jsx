import React, { useEffect, useState } from "react";
import Chart, { plugins } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { useGlobalContext } from "../contexts/Contexts";

const colorArray = [
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#99E6E6",
  "#6666FF",
];

const Languages = () => {
  const { repos } = useGlobalContext();
  const [chartData, setChartData] = useState({ data: [], labels: [] });

  useEffect(() => {
    const languageArray = [];
    const languageSizes = [];
    repos.forEach((repo) => {
      languageArray.push(repo.language);
      languageSizes.push(repo.size);
    });
    const languagesSet = new Set(languageArray);
    const pureLanguages = [];
    languagesSet.forEach((elem) => pureLanguages.push(elem));
    const eachIndex = {};
    pureLanguages.forEach((lang) => {
      eachIndex[lang] = [];
      languageArray.forEach((langElement, index) => {
        if (lang === langElement) {
          eachIndex[lang].push(index);
        }
      });
    });

    const newArray = Object.entries(eachIndex);
    newArray.forEach((elem) => {
      let total = 0;
      elem[1].forEach((innerElem) => {
        total += languageSizes[innerElem];
      });
      elem[1] = total;
    });
    const finalData = [];
    const finalLabels = [];

    newArray.forEach((data) => {
      finalData.push(data[1]);
      finalLabels.push(data[0]);
    });

    setChartData({ ...chartData, data: finalData, labels: finalLabels });
  }, []);
  return (
    <div className="languages">
      <Doughnut
        data={{
          datasets: [
            {
              data: chartData.data,
              borderColor: "#1e1f25",
              borderWidth: 5,
              backgroundColor: colorArray,
            },
          ],
          labels: chartData.labels,
        }}
        options={{
          plugins: {
            legend: { position: "left" },
            title: {
              text: " زبان های استفاده شده در پروژه ها بر حسب کیلوبایت",
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
