import React, { useEffect, useRef, useState } from "react";
import "../styles/Form.css";
import formPic from "../assets/form.png";
import { GoMarkGithub } from "react-icons/go";
import axios from "axios";
import { useGlobalContext } from "../contexts/Contexts";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const { setUserData, setIsLogin, setName } = useGlobalContext();
  const [notFound, setNotFound] = useState(false);
  const [formData, setFormData] = useState({ name: "", githubId: "" });
  const cookieRef = useRef(null);
  const navigate = useNavigate();
  const formChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const formSubmit = (event) => {
    event.preventDefault();
    axios(`https://api.github.com/users/${formData.githubId}`)
      .then((res) => {
        if (res.status == 200) {
          setUserData(res.data);
          setIsLogin(true);
          setName(formData.name);
          if (cookieRef.current.checked) {
            localStorage.setItem("login", `${formData.githubId}`);
            localStorage.setItem("name", `${formData.name}`);
          }
          navigate("/");
        }
      })
      .catch((err) => {
        // if (err.response.status == 404) {
        //   setFormData({ ...formData, githubId: "" });
        //   setNotFound(true);
        // }
      });
  };
  useEffect(() => {
    if (notFound) {
      setTimeout(() => {
        setNotFound(false);
      }, 4000);
    }
  }, [notFound]);
  return (
    <div className="form-page">
      <figure className="form-figure">
        <img src={formPic} alt="" className="form-image" />
      </figure>
      <div className="form-container">
        <form className="form" onSubmit={() => formSubmit(event)}>
          <GoMarkGithub className="form-logo" />
          <h1>به حساب کاربری خود وارد شوید</h1>
          <p className="form-subtitle">
            این فرم برای شخصی سازی داشبورد کاربران طراحی شده و هیچگونه دسترسی به
            حساب کاربری گیتهاب شما نخواهد داشت.
          </p>
          <input
            type="text"
            name="name"
            placeholder="نام"
            required
            value={formData.name}
            onChange={() => formChange(event)}
          />
          <input
            type="text"
            name="githubId"
            placeholder="آیدی حساب گیتهاب"
            required
            value={formData.githubId}
            onChange={() => formChange(event)}
          />
          {notFound && (
            <p className="error-text">
              آیدی وارد شده با هیچ حسابی مطابقت ندارد!
            </p>
          )}
          <div className="input-group">
            <label htmlFor="agreement">
              من قوانین وبسایت را مطالعه کردم و با آن موافقم.
            </label>
            <input type="checkbox" name="agreement" id="agreement" required />
          </div>
          <div className="input-group">
            <label htmlFor="cookie">مرا به خاطر بسپار.</label>
            <input type="checkbox" name="cookie" id="cookie" ref={cookieRef} />
          </div>
          <button type="submit" className="form-btn">
            ثبت اطلاعات و ورود به داشبورد
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
