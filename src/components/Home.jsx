import React from "react";
import "../styles/Home.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { DiGithubAlt } from "react-icons/di";
import gitninja from "../assets/gitninja.png";
import octocat from "../assets/octocat.png";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <figure className="home__figure">
        <img src={gitninja} alt="" className="home__foco-pic" />
      </figure>
      <div className="home__main">
        <div className="home__hero">
          <div className="home__logo">
            <img src={octocat} alt="" className="home__logo-icon" />
            <p className="home__logo-text">داشبورد گیتهاب</p>
          </div>
          <h1 className="home__title">فعالیتهای گیتهابتو حرفه ای دنبال کن</h1>
          <button className="home__login-btn" onClick={() => navigate("/form")}>
            ورود
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
