import React from "react";
import Account from "./Account";
import Profile from "./Profile";
import Followers from "./Followers";
import Favorites from "./Favorites";
import Languages from "./Languages";
import Stars from "./Stars";
import { useGlobalContext } from "../contexts/Contexts";
const User = () => {
  return (
    <>
      <div className="user">
        <Account />
        <div className="user__main">
          <Profile />
          <Favorites />
        </div>
        <div className="user__main">
          <Languages />
          <Stars />
        </div>
        <Followers />
      </div>
    </>
  );
};

export default User;
