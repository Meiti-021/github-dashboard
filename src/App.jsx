import { useState } from "react";
import Form from "./components/Form";

import "./App.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes path="/">
          <Route path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
