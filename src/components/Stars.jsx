import React, { useEffect, useState } from "react";
import Chart, { plugins } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { useGlobalContext } from "../contexts/Contexts";
const colorArray = [
  "rgb(222,214,238)",
  "rgb(80,255,254)",
  "rgb(241,78,121)",
  "rgb(236,255,133)",
  "rgb(193,162,255)",
  "rgb(78,255,141)",
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

const Stars = () => {
  const { starList } = useGlobalContext();
  const [chartData, setChartData] = useState({ data: [], labels: [] });

  useEffect(() => {
    const languageArray = [];
    const languageSizes = [];
    starList.forEach((repo) => {
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
        total += innerElem;
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
    <div className="stars">
      <Pie
        data={{
          datasets: [
            {
              data: chartData.data,
              borderWidth: 0,
              borderColor: "#1e1f25",
              backgroundColor: colorArray,
            },
          ],
          labels: chartData.labels,
        }}
        options={{
          plugins: {
            legend: { position: "left" },
            title: {
              text: "???????? ?????????? ???? ?????????? ?????????? ?????? ???????? ??????",
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
