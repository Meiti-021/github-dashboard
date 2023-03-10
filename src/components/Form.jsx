import React, { useEffect, useRef, useState } from "react";
import "../styles/Form.css";
import formPic from "../assets/form.png";
import { GoMarkGithub } from "react-icons/go";
import axios from "axios";
import { useGlobalContext } from "../contexts/Contexts";
import { Navigate, useNavigate } from "react-router-dom";
const Form = () => {
  const [loadScreen, setLoadScreen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("hree");
  }, []);
  const {
    setIsLogin,
    setUserData,
    setName,
    setFollowersData,
    setFollowingsData,
    setRepos,
    setStarList,
    setEvent,
    setRateLimit,
  } = useGlobalContext();
  const [notFound, setNotFound] = useState(false);
  const [networkError, setNetworkError] = useState(false);
  const [formData, setFormData] = useState({ name: "", githubId: "" });
  const cookieRef = useRef(null);
  const formChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const formSubmit = (event) => {
    event.preventDefault();
    setLoadScreen(true);
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

                      axios("https://api.github.com/rate_limit").then(
                        (rateRes) => {
                          setRateLimit(rateRes.data.resources.core.remaining);
                          setLoadScreen(false);
                          if (cookieRef.current.checked === true) {
                            localStorage.setItem("login", formData.githubId);
                          }
                          navigate("/");
                        }
                      );
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
      .finally(setLoadScreen(false));
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
      {loadScreen && <div className="loading"></div>}
      <figure className="form-figure">
        <img src={formPic} alt="" className="form-image" />
      </figure>
      <div className="form-container">
        <form className="form" onSubmit={() => formSubmit(event)}>
          <GoMarkGithub className="form-logo" />
          <h1>???? ???????? ???????????? ?????? ???????? ????????</h1>
          <p className="form-subtitle">
            ?????? ?????? ???????? ???????? ???????? ?????????????? ?????????????? ?????????? ?????? ?? ?????????????? ???????????? ????
            ???????? ???????????? ???????????? ?????? ???????????? ????????.
          </p>
          <input
            type="text"
            name="name"
            placeholder="??????"
            required
            value={formData.name}
            onChange={() => formChange(event)}
          />
          <input
            type="text"
            name="githubId"
            placeholder="???????? ???????? ????????????"
            required
            value={formData.githubId}
            onChange={() => formChange(event)}
          />
          {notFound && (
            <p className="error-text">
              ???????? ???????? ?????? ???? ?????? ?????????? ???????????? ??????????!
            </p>
          )}
          {networkError && (
            <p className="error-text">?????????? ?????????????? ???? ?????????? ????????!</p>
          )}
          <div className="input-group">
            <label htmlFor="agreement">
              ???? ???????????? ???????????? ???? ???????????? ???????? ?? ???? ???? ????????????.
            </label>
            <input type="checkbox" name="agreement" id="agreement" required />
          </div>
          <div className="input-group">
            <label htmlFor="cookie">?????? ???? ???????? ??????????.</label>
            <input type="checkbox" name="cookie" id="cookie" ref={cookieRef} />
          </div>
          <button type="submit" className="form-btn">
            ?????? ?????????????? ?? ???????? ???? ??????????????
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
