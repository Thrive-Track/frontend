import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import facebook from "../../assets/footer_images/facebook.png";
import discord from "../../assets/footer_images/discord_icon.png";
import instagram from "../../assets/footer_images/instagram.png";
import linkedin from "../../assets/footer_images/Linkedin.png";
import logo from "../../assets/footer_images/Logo.png";
import twitter from "../../assets/footer_images/tweetter.png";
import language from "../../assets/footer_images/language.png";
import doubleArrow from "../../assets/footer_images/Icons.png";
import vectorImage from "../../assets/footer_images/Vector 3.png";

function Footer() {
  return (
    <>
      <div className="footer_background">
        <div>
          <img src={logo} alt="ThriveTrack logo" className="footer_image" />
        </div>
        <div className="footer_text">
          <div className="footer_features footer">
            <ul>
              <li>
                <h4>Features</h4>
              </li>
              <li>
                <Link>How it works</Link>
              </li>
              <li>
                <Link>For teams</Link>
              </li>
              <li>
                <Link>Task Management</Link>
              </li>
              <li>
                <Link>Collaboration</Link>
              </li>
            </ul>
          </div>
          <div className="footer_resources footer">
            <ul>
              <li>
                <h4>Resources</h4>
              </li>
              <li>
                <Link>Download Apps</Link>
              </li>
              <li>
                <Link>Help Center</Link>
              </li>
              <li>
                <Link to={"faqs"}>FAQs</Link>
              </li>
              <li>
                <Link>Inspiration Hub</Link>
              </li>
            </ul>
          </div>
          <div className="footer_contact footer">
            <ul>
              <li>
                <h4>Contact</h4>
              </li>
              <li>
                <Link>Get in Touch</Link>
              </li>
              <li>
                <Link>Feedback</Link>
              </li>
              <li>
                <Link>PartnerShip</Link>
              </li>
            </ul>
          </div>
          <div className="footer_company footer">
            <ul>
              <li>
                <h4>Company</h4>
              </li>
              <li>
                <Link to={"about us"}>About Us</Link>
              </li>
            </ul>
          </div>
          <div className="social_media">
            <img src={facebook} alt="Facebook icon" />
            <img src={linkedin} alt="Linkedin icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={instagram} alt="instagram.png" />
            <img src={discord} alt="discord icon" />
          </div>
        </div>
      </div>
      <div className="terms">
        <ul>
          <li>Terms </li>
          <li>
            <img src={vectorImage} alt="Vector icon" />
          </li>
          <li>Privacy </li>
          <li>
            <img src={vectorImage} alt="Vector icon" />
          </li>
          <li>Security </li>
          <li>@ThriveTrack</li>
        </ul>
        <div className="last_terms">
          <ul>
            <li>
              <img src={language} alt="globe icon" />
            </li>
            <li>English</li>
            <li>
              <img
                src={doubleArrow}
                alt="double arrow icon"
                className="last_terms_icon"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Footer;
