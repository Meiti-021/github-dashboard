import React from "react";

const SingleEvent = ({ num, color }) => {
  return (
    <div className="sigle-event" style={{ border: `1px solid ${color}` }}>
      {num}
    </div>
  );
};

export default SingleEvent;
