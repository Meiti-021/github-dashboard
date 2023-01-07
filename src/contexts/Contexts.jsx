import React, { useContext, useState } from "react";
import {
  mockdata,
  followersMock,
  followingMock,
  MockRepo,
  mockGist,
  mockStarred,
} from "../database/mockData";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState(mockdata);
  const [followersData, setFollowersData] = useState(followersMock);
  const [followingsData, setFollowingsData] = useState(followingMock);
  const [name, setName] = useState("");
  const [repos, setRepos] = useState(MockRepo);
  const [gists, setGists] = useState(mockGist);
  const [starList, setStarList] = useState(mockStarred);
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
