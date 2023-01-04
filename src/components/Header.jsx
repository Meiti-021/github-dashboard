import React from "react";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <div className="header">
      <div className="header__input-group">
        <FaSearch className="header__icon" />
        <input
          type="search"
          name="search"
          id="search"
          placeholder="جستجوی دیگر کاربران گیتهاب برحسب نام کاربری"
        />
        <button className="header__search-btn">
          <FaArrowLeft className="header__icon" />
        </button>
      </div>
    </div>
  );
};

export default Header;
