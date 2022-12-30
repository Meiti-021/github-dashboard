import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { DiGithubAlt } from "react-icons/di";
import gitninja from "../assets/gitninja.png";
import octocat from "../assets/octocat.png";
const Home = () => {
  return (
    <div className="home">
      <figure className="home__figure">
        <img src={gitninja} alt="" className="home__foco-pic" />
      </figure>
      <div className="home__main">
        <nav className="home__nav">
          <ul className="home__nav-list">
            <li className="home__nav-item">سرویس ها</li>
            <li className="home__nav-item">درباره من</li>
            <li className="home__nav-item">راهنمای سایت</li>
          </ul>
        </nav>
        <div className="home__hero">
          <div className="home__logo">
            <img src={octocat} alt="" className="home__logo-icon" />
            <p className="home__logo-text">داشبورد گیتهاب</p>
          </div>
          <h1 className="home__title">فعالیتهای گیتهابتو حرفه ای دنبال کن</h1>
          <button className="home__login-btn">ورود</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
