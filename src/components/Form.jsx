import React, { useEffect, useRef, useState } from "react";
import "../styles/Form.css";
import formPic from "../assets/form.png";
import { GoMarkGithub } from "react-icons/go";
import axios from "axios";
import { useGlobalContext } from "../contexts/Contexts";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
const Form = () => {
  const [loading, setLoading] = useState(false);
  const {
    setIsLogin,
    setUserData,
    setName,
    setFollowersData,
    setFollowingsData,
    setRepos,
    setStarList,
    setEvent,
  } = useGlobalContext();
  const [notFound, setNotFound] = useState(true);
  const [networkError, setNetworkError] = useState(false);
  const [formData, setFormData] = useState({ name: "", githubId: "" });
  const cookieRef = useRef(null);
  const navigate = useNavigate();
  const formChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const formSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    axios(`https://api.github.com/users/${formData.githubId}`)
      .then((res) => {
        if (res.status == 200) {
          setUserData(res.data);
          setName(formData.name);
          axios(`https://api.github.com/users/${formData.githubId}/repos`).then(
            (response) => {
              setRepos(response.data);
              axios(
                `https://api.github.com/users/${formData.githubId}/followers`
              ).then((result) => {
                setFollowersData(result.data);
                axios(
                  `https://api.github.com/users/${formData.githubId}/following`
                ).then((followRes) => {
                  setFollowingsData(followRes.data);
                  axios(
                    ` https://api.github.com/users/${formData.githubId}/events/public`
                  ).then((eventRes) => {
                    setEvent(eventRes.data);
                    axios(
                      `https://api.github.com/users/${formData.githubId}/starred`
                    ).then((starRes) => {
                      setStarList(starRes.data);
                      setIsLogin(true);
                      navigate("/");
                      if (err.response.status == 404) {
                        setFormData({ ...formData, githubId: "" });
                        setNotFound(true);
                        setLoading(false);
                      }
                    });
                  });
                });
              });
            }
          );
        }
      })
      .catch((err) => {
        if (err.code === "ERR_NETWORK") {
          setNetworkError(true);
        } else if (err.code === "NOT_FOUND") {
          setNotFound(true);
        }
      })
      .finally(setLoading(false));
  };
  useEffect(() => {
    if (notFound) {
      setTimeout(() => {
        setNotFound(false);
      }, 4000);
    }
    if (networkError) {
      setTimeout(() => {
        setNetworkError(false);
      }, 4000);
    }
  }, [notFound, networkError]);
  return (
    <div className="form-page">
      <Loading condition={loading} />
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
          {networkError && (
            <p className="error-text">اتصال اینترنت را بررسی کنید!</p>
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
