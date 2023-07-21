import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <img src="Logo.png" alt="Thrivetrack" className="logo" />

        <div className="nav">
          <nav className="nav-items">
            <ul className="nav_list">
              <li>
                <Link to="/home" className="links">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/features" className="links">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/products" className="links">
                  Products
                </Link>
              </li>
              <li>
                <select className="resources">
                  <option>
                    <Link to="/resources" className="links">
                      Resources
                    </Link>
                  </option>
                </select>
              </li>
            </ul>
            <button className="login">Log In</button>
            <button className="signup">Get Started</button>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Header;
