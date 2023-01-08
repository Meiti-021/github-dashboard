import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import { Bar, Line } from "react-chartjs-2";
import Chart, { plugins } from "chart.js/auto";
import { mockEvents } from "../database/mockData";

const ActivityTable = () => {
  const [chartData, setChartData] = useState({ data: [], labels: [] });

  useEffect(() => {
    const eventsHistory = {};
    mockEvents.forEach((element) => {
      if (Object.entries(eventsHistory).length < 8) {
        if (eventsHistory.hasOwnProperty(element.created_at.slice(0, 10))) {
          eventsHistory[element.created_at.slice(0, 10)] += 1;
        } else {
          eventsHistory[element.created_at.slice(0, 10)] = 1;
        }
      }
    });
    const current = moment();
    const resultDates = [];
    let n = 8;
    while (n > 0) {
      console.log(n);
      resultDates.push(current.format("YYYY-MM-DD"));
      current.subtract(1, "day");
      n--;
    }
    const finalObject = {};

    resultDates.forEach((day) => {
      if (eventsHistory.hasOwnProperty(day)) {
        finalObject[day] = eventsHistory[day];
      } else {
        finalObject[day] = 0;
      }
    });

    const realativeLabels = [];
    Object.keys(finalObject).forEach((date) => {
      realativeLabels.push(moment(date, "YYYY-MM-DD").fromNow());
    });
    setChartData({ data: Object.values(finalObject), labels: realativeLabels });
  }, []);

  return (
    <div className="ActivityTable">
      <Line
        data={{
          labels: chartData.labels,
          datasets: [
            {
              data: chartData.data,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
              label: " فعالیت در هفت روز گذشته",
              yAxisID: "yAxis",
            },
          ],
        }}
        options={{
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

export default ActivityTable;
