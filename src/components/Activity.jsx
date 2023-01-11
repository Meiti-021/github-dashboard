import React, { useEffect, useState } from "react";
import "../styles/activity.css";
import ActivityTable from "./ActivityTable";
import Events from "./Event";
import LatestEvents from "./LatestEvents";
import CommingSoon from "./commingSoon";
const colors = [
  "rgb(222,214,238)",
  "rgb(80,255,254)",
  "rgb(241,78,121)",
  "rgb(236,255,133)",
  "rgb(193,162,255)",
  "rgb(78,255,141)",
];

const Activity = () => {
  const [num, setNum] = useState(0);
  const [colorPallet, setColorPallet] = useState(colors[num]);
  useEffect(() => {
    setTimeout(() => {
      if (num === colors.length - 1) {
        setNum(0);
        setColorPallet(colors[num]);
      } else {
        setNum(num + 1);
        setColorPallet(colors[num]);
      }
    }, 3000);
  }, [num]);
  return (
    <div className="activity">
      <div className="activity__container">
        <ActivityTable color={colorPallet} />
        <Events color={colorPallet} />
        <LatestEvents color={colorPallet} />
        <CommingSoon color={colorPallet} />
        <CommingSoon color={colorPallet} />
      </div>
    </div>
  );
};

export default Activity;
