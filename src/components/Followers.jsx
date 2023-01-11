import React from "react";
import Follower from "./follower";
import { useGlobalContext } from "../contexts/Contexts";
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import { FaExternalLinkAlt } from "react-icons/fa";
import NotFound from "./NotFound";
const Followers = () => {
  const { followersData, followingsData } = useGlobalContext();

  return (
    <div className="followers">
      {followersData.length ? (
        <div className="followers__list">
          <p className="follower__title">دنبال کنندگان</p>
          {followersData.length &&
            followersData.map((item) => {
              return <Follower {...item} key={Math.random() * 1500000000000} />;
            })}
        </div>
      ) : (
        <NotFound />
      )}
      {followingsData.length ? (
        <div className="followers__list">
          <p className="follower__title">دنبال شوندگان</p>
          {followingsData.map((item) => {
            return <Follower {...item} key={Math.random() * 1500000000000} />;
          })}
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Followers;
