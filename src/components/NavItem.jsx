import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ path, content, icon }) => {
  return (
    <div className="nav-item">
      <li>
        <img src={`./icons/${icon}`} className="nav-item__icon" />
        <NavLink to={path}>{content}</NavLink>
      </li>
    </div>
  );
};

export default NavItem;
