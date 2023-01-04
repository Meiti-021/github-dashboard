import React from "react";
import AccountItem from "./AccountItem";
import AccountData from "../database/AccountData";
import { useGlobalContext } from "../contexts/Contexts";

const Account = () => {
  const { userData } = useGlobalContext();
  return (
    <div className="account">
      {AccountData.map((item, index) => {
        return (
          <AccountItem
            {...item}
            content={userData[item.content]}
            key={index + 100000}
          />
        );
      })}
    </div>
  );
};

export default Account;
