import React from "react";
import { useGlobalContext } from "../contexts/Contexts";

const SingleEvent = ({ num, color }) => {
  const { setEventIndex } = useGlobalContext();
  const eventChooser = () => {
    setEventIndex(num - 1);
  };
  return (
    <div
      className="sigle-event"
      style={{ border: `1px solid ${color}` }}
      onClick={eventChooser}
    >
      {num}
    </div>
  );
};

export default SingleEvent;
