import React, { useEffect } from "react";
import oops from "../assets/500.jpg";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/loading");
  };
  return (
    <>
      <div className="error">
        <div className="error__container">
          <img src={oops} alt="" />
          <h1>خطایی پیش اومد</h1>
          <p>این موارد ممکنه مشکلتو حل کنه!</p>
          <ul>
            <li>اتصال اینترنتتو بررسی کن</li>
            <li>فیلترشکن یا پراکسیتو غیرفعال یا عوض کن</li>
            <li>صفحه رو ریلود کن</li>
          </ul>
          <button onClick={clickHandler}>امتحان مجدد</button>
        </div>
      </div>
    </>
  );
};

export default Error;
