import React from "react";
import { useGlobalContext } from "../contexts/Contexts";
import EventInfo from "./EventInfo";
import SingleEvent from "./SingleEvent";

const LatestEvents = ({ color }) => {
  const { event } = useGlobalContext();
  return (
    <div className="latest-events">
      <div
        className="events-container"
        style={{ border: `1px solid ${color}`, color: color }}
      >
        <h2 className="latest-events__title">لیست فعالیت های اخیر</h2>
        {event.map((item, index) => {
          return <SingleEvent num={index + 1} color={color} />;
        })}
      </div>
      <EventInfo color={color} />
    </div>
  );
};

export default LatestEvents;
