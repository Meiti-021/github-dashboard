import { useState } from "react";
import Form from "./components/Form";

import "./App.css";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useGlobalContext } from "./contexts/Contexts";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import { Navigate } from "react-router-dom";

function App() {
  const { isLogin } = useGlobalContext();
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="*"
            element={isLogin ? <MainPage /> : <Navigate to="/home" />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
