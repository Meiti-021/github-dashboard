import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import User from "./User";
import "../styles/Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="dashboard__container">
        <Header />
        <User />
      </div>
    </div>
  );
};

export default Dashboard;
