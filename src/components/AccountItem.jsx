import React from "react";

const AccountItem = ({ icon, title, content }) => {
  return (
    <div className="account-item">
      <img src={icon} alt="" className="account-item__icon" />
      <div className="account-item__text">
        <p className="account-item__text-title">{title}</p>
        <p className="account-item__text-content">{content}</p>
      </div>
    </div>
  );
};

export default AccountItem;
