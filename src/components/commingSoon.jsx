import React from "react";

const CommingSoon = ({ color }) => {
  return (
    <div
      className="comming-soon"
      style={{ border: `1px dashed ${color}`, color: color }}
    >
      <h1>COMMING SOON</h1>
    </div>
  );
};

export default CommingSoon;
