import React from "react";
import Account from "./Account";
import Profile from "./Profile";
import Followers from "./Followers";
const User = () => {
  return (
    <div className="user">
      <Account />
      <div className="user__main">
        <Profile />
        <Followers />
      </div>
    </div>
  );
};

export default User;
