import React, { useEffect } from "react";
import moment from "moment/moment";
import "../styles/activity.css";
import ActivityTable from "./ActivityTable";
import { mockEvents } from "../database/mockData";

const Activity = () => {
  return (
    <div className="activity">
      <div className="activity__container">
        <ActivityTable />
      </div>
    </div>
  );
};

export default Activity;
