import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [followersData, setFollowersData] = useState(null);
  const [followingsData, setFollowingsData] = useState(null);
  const [name, setName] = useState("");
  const [repos, setRepos] = useState(null);
  const [gists, setGists] = useState(null);
  const [starList, setStarList] = useState(null);
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [rateLimit, setRateLimit] = useState(false);
  const [eventIndex, setEventIndex] = useState(0);
  return (
    <AppContext.Provider
      value={{
        isLogin,
        setIsLogin,
        userData,
        setUserData,
        name,
        setName,
        followersData,
        setFollowersData,
        followingsData,
        setFollowingsData,
        repos,
        setRepos,
        gists,
        setGists,
        starList,
        setStarList,
        event,
        setEvent,
        loading,
        setLoading,
        rateLimit,
        setRateLimit,
        eventIndex,
        setEventIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
