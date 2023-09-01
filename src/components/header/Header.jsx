import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/footer_images/Logo.png";

function Header() {
  return (
    <>
      <div className="header">
        <img src={logo} alt="Thrivetrack logo" className="logo" />

        <div className="nav">
          <nav className="nav-items">
            <ul className="nav_list">
              <li>
                <Link to="/home" className="links home">
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
                  <option value="resources" selected>
                    <Link to="/resources" className="links">
                      Resources
                    </Link>
                  </option>
                  <option value="download apps">
                    <Link to="/download apps" className="links">
                      Download Apps
                    </Link>
                  </option>
                  <option value="help center">
                    <Link to="/help center" className="links">
                      Help Center
                    </Link>
                  </option>
                  <option value="faqs">
                    <Link to="/faqs" className="links">
                      FAQs
                    </Link>
                  </option>
                </select>
              </li>
            </ul>
            <div className="login_signup_btn">
              <Link to={"/login"}>
                <button className="login">Log In</button>
              </Link>

              <Link to={"/signup"}>
                <button className="signup">Sign Up</button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Header;
