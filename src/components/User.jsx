import React from "react";
import Account from "./Account";
import Profile from "./Profile";
const User = () => {
  return (
    <div className="user">
      <Account />
      <div className="user__main">
        <Profile />
      </div>
    </div>
  );
};

export default User;
