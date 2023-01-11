import Form from "./components/Form";
import "./App.css";
import "./styles/ihover.css";
import Home from "./components/Home";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./contexts/Contexts";
import MainPage from "./components/MainPage";
import { Navigate } from "react-router-dom";
import Loading from "./components/Loading";

function App() {
  const { isLogin } = useGlobalContext();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="*"
            element={isLogin ? <MainPage /> : <Navigate to="/loading" />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
