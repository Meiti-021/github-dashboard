import React from "react";

const Info = ({ icon, text }) => {
  return (
    <div className="info">
      <div className="info__icon">{icon}</div>
      <div className="info__text">{text}</div>
    </div>
  );
};

export default Info;
