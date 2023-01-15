import React, { useRef, useEffect } from "react";
import User from "./User";

const dashboard = () => {
  const mainRef = useRef(null);
  useEffect(() => {
    mainRef.current.style.zoom = "80%";
  }, []);
  return (
    <div className="dashboard" ref={mainRef}>
      <User />
    </div>
  );
};

export default dashboard;
