import React, { useContext, useState } from "react";
import {
  mockdata,
  followersMock,
  followingMock,
  MockRepo,
} from "../database/mockData";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState(mockdata);
  const [followersData, setFollowersData] = useState(followersMock);
  const [followingsData, setFollowingsData] = useState(followingMock);
  const [name, setName] = useState("");
  const [repos, setRepos] = useState(MockRepo);
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
