import React from "react";
import Follower from "./follower";
import { useGlobalContext } from "../contexts/Contexts";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
const Followers = () => {
  const { followersData, followingsData } = useGlobalContext();
  return (
    <div className="followers">
      <div className="followers__list">
        <p className="follower__title">دنبال کنندگان</p>
        {followersData.map((item) => {
          return <Follower {...item} key={Math.random() * 1500000000000} />;
        })}
      </div>
      <div className="followers__list">
        <p className="follower__title">دنبال شوندگان</p>
        {followingsData.map((item) => {
          return <Follower {...item} key={Math.random() * 1500000000000} />;
        })}
      </div>
    </div>
  );
};

export default Followers;
