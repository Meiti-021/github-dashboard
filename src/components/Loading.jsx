import React from "react";
import load from "../assets/load.png";

const Loading = ({ condition }) => {
  return (
    <div
      className="loading"
      style={{ display: `${condition ? "block" : "none"}` }}
    >
      <img src={load} alt="" className="loading__image" />
    </div>
  );
};

export default Loading;
