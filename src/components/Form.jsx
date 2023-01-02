import React from "react";
import "../styles/Form.css";
import octocat from "../assets/octocat.png";
import formPic from "../assets/form.png";
import { GoMarkGithub } from "react-icons/go";
const Form = () => {
  return (
    <div className="form-page">
      <figure className="form-figure">
        <img src={formPic} alt="" className="form-image" />
      </figure>
      <div className="form-container">
        <form className="form">
          <GoMarkGithub className="form-logo" />
          <h1>به حساب کاربری خود وارد شوید</h1>
          <p className="form-subtitle">
            این فرم برای شخصی سازی داشبورد کاربران طراحی شده و هیچگونه دسترسی به
            حساب کاربری گیتهاب شما نخواهد داشت.
          </p>
          <input type="text" name="name" placeholder="نام" />
          <input type="text" name="name" placeholder="آیدی حساب گیتهاب" />
          <div className="input-group">
            <label htmlFor="agreement">
              من قوانین سایت را مطالعه کردم و با آن موافق.
            </label>
            <input type="checkbox" name="agreement" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="cookie">مرا به خاطر بسپار.</label>
            <input type="checkbox" name="cookie" id="" />
          </div>
          <button className="form-btn">ثبت اطلاعات و ورود به داشبور</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
