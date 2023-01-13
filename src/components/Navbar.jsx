import React from "react";
import navicon from "../assets/navicon.png";
import navData from "../database/NavData";
import NavItem from "./NavItem";
import { useGlobalContext } from "../contexts/Contexts";

const Navbar = () => {
  const {
    setIsLogin,
    setUserData,
    setName,
    setFollowersData,
    setFollowingsData,
    setRepos,
    setStarList,
    setEvent,
    rateLimit,
  } = useGlobalContext();
  const logOut = () => {
    setIsLogin(false);
    setUserData(null);
    setName(null);
    setFollowersData(null);
    setFollowingsData(null);
    setRepos(null);
    setStarList(null);
    setEvent(null);
    localStorage.removeItem("login");
  };
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
        <p className="rate-limit">
          محدودیت درخواست : <br /> 60 / {rateLimit}
        </p>
        <button className="navbar__logout-btn" onClick={logOut}>
          خروج
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
