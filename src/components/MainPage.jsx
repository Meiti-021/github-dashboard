import React from "react";
import Navbar from "./Navbar";
import "../styles/Dashboard.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Activity from "./Activity";
import About from "./About";
import Contact from "./Contact";
const MainPage = () => {
  return (
    <div className="main-page">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} end />
        <Route path="/activity" element={<Activity />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainPage;
