import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Maincontent from "./components/Maincontent";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Maincontent />
          <Footer />
          <Routes path="/" exact />
        </Router>
      </div>
    </>
  );
}

export default App;
