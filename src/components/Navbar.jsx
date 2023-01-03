import React from "react";
import navicon from "../assets/navicon.png";
import navData from "../database/NavData";
import NavItem from "./NavItem";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <p className="navbar__logo-title">کاربر گیتهاب</p>
        <img src={navicon} alt="" className="navbar__logo-image" />
      </div>

      <ul className="navbar__nav-list">
        {navData.map((item, index) => {
          return <NavItem {...item} key={index} />;
        })}
        <button className="navbar__logout-btn">خروج</button>
      </ul>
    </div>
  );
};

export default Navbar;
