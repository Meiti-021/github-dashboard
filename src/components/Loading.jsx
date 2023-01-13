import React, { useEffect } from "react";
import load from "../assets/load.png";
import "../styles/Home.css";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../contexts/Contexts";
import axios from "axios";

const Loading = () => {
  const navigate = useNavigate();
  const {
    setIsLogin,
    setUserData,
    setFollowersData,
    setFollowingsData,
    setRepos,
    setStarList,
    setEvent,
    setLoading,
    setRateLimit,
  } = useGlobalContext();
  useEffect(() => {
    const localData = localStorage.getItem("login");
    if (localData) {
      setIsLogin(true);
      axios(`https://api.github.com/users/${localData}`)
        .then((res) => {
          if (res.status == 200) {
            setUserData(res.data);
            axios(`https://api.github.com/users/${localData}/repos`).then(
              (response) => {
                setRepos(response.data);
                axios(
                  `https://api.github.com/users/${localData}/followers`
                ).then((result) => {
                  setFollowersData(result.data);
                  axios(
                    `https://api.github.com/users/${localData}/following`
                  ).then((followRes) => {
                    setFollowingsData(followRes.data);
                    axios(
                      ` https://api.github.com/users/${localData}/events/public`
                    ).then((eventRes) => {
                      setEvent(eventRes.data);
                      axios(
                        `https://api.github.com/users/${localData}/starred`
                      ).then((starRes) => {
                        setStarList(starRes.data);

                        axios("https://api.github.com/rate_limit").then(
                          (rateRes) => {
                            setRateLimit(rateRes.data.resources.core.remaining);
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
        .catch((err) => console.log(err))

        .finally(setLoading(false));
    } else {
      navigate("/home");
    }
  }, []);
  useEffect(() => {
    if (window.navigator.onLine === false) {
      alert("لطفا اتصال اینترنت خود را بررسی کنید.سپس مجددا صفحه را لود کنید!");
    }
  }, []);
  return (
    <div className="loading">
      <img src={load} alt="" className="loading__image" />
    </div>
  );
};

export default Loading;
