import React, { useContext, useState } from "react";
const mockdata = {
  login: "Meiti-021",
  id: 89641841,
  node_id: "MDQ6VXNlcjg5NjQxODQx",
  avatar_url: "https://avatars.githubusercontent.com/u/89641841?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Meiti-021",
  html_url: "https://github.com/Meiti-021",
  followers_url: "https://api.github.com/users/Meiti-021/followers",
  following_url:
    "https://api.github.com/users/Meiti-021/following{/other_user}",
  gists_url: "https://api.github.com/users/Meiti-021/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Meiti-021/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Meiti-021/subscriptions",
  organizations_url: "https://api.github.com/users/Meiti-021/orgs",
  repos_url: "https://api.github.com/users/Meiti-021/repos",
  events_url: "https://api.github.com/users/Meiti-021/events{/privacy}",
  received_events_url: "https://api.github.com/users/Meiti-021/received_events",
  type: "User",
  site_admin: false,
  name: "Mahdi dehgani",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: true,
  bio: "Front-End web developer",
  twitter_username: null,
  public_repos: 16,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2021-08-27T11:44:17Z",
  updated_at: "2023-01-02T12:30:13Z",
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [userData, setUserData] = useState(mockdata);
  const [name, setName] = useState("");
  return (
    <AppContext.Provider
      value={{ isLogin, setIsLogin, userData, setUserData, name, setName }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppProvider };
