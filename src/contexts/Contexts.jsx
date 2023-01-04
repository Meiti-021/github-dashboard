import React, { useContext, useState } from "react";
import { mockdata, followersMock } from "../database/mockData";

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
