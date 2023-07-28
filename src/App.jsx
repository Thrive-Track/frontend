import React from "react";
import Signup from "./Pages/SignUp";
import { BrowserRouter as Router, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <div>
        <Router>
          <Signup />
          <Routes path="/" exact />
        </Router>
      </div>
    </>
  )
}

export default App