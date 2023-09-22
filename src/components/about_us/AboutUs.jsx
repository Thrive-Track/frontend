import React from "react";
import "./AboutUs.css";
import colleagues from "../../assets/about_us_images/colleagues.png";
import TeamAlbum from "./TeamAlbum";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function AboutUs() {
  return (
    <div className="about_us_wrapper">
      <Header />
      <div className="about_us">
        <div className="about_us_text">
          <h2>
            We're reinventing the system of
            <br />
            task management
          </h2>
        </div>
        <div className="about_us_image">
          <img src={colleagues} alt="colleagues" />
        </div>
      </div>
      <div className="about_us_comment">
        <p>
          ThriveTrack is your ultimate task management tool designed to
          <br /> streamline your tasks and boost your productivity. We
          understand
          <br /> the challenges of managing multiple tasks and deadlines, which
          is
          <br /> why we created ThriveTrack to simplify your life and help you
          stay
          <br /> organized. We believe that effective task management is the
          <br /> cornerstone of success. Our app empowers individuals and teams
          <br /> to prioritize, plan, and execute their tasks efficiently,
          enabling
          <br /> them to achieve their goals with ease. With ThriveTrack, you
          can
          <br /> take control of your schedule and optimize your productivity
          like
          <br /> never before.
        </p>
      </div>
      <div className="our_vision">
        <div className="vision">
          <h3>Our Vision</h3>
        </div>
      </div>
      <div className="vision_text">
        <p>
          At ThriveTrack, we are passionate about helping individuals and
          <br /> teams reach their full potential by providing them with the
          tools
          <br /> they need to manage their tasks effectively. Our vision is to
          <br /> revolutionize task management and simplify your life, one task
          at
          <br /> a time.
        </p>
      </div>
      <div className="why_choose_us_wrapper">
        <div className="why_choose_us">
          <h3>
            Why Choose
            <br /> Us
          </h3>
        </div>
      </div>
      <div className="integration_container">
        <div className="integration_header">
          <p>
            ThriveTrack enables you work effectively with these integrations:
          </p>
        </div>
        <div className="integration_list_wrapper">
          <div className="integration_list">
            <ul>
              <li>Intuitive user interface</li>
              <li>Smart Task Organization</li>
              <li>Collaborative Workspaces</li>
              <li>Reminders and notifications</li>
            </ul>
          </div>
          <div className="integration_list">
            <ul>
              <li>Insights and Analytics</li>
              <li>Personalization</li>
              <li>Mobile compatibility</li>
              <li>Data security</li>
            </ul>
          </div>
        </div>
      </div>
      <TeamAlbum />
      <Footer />
    </div>
  );
}

export default AboutUs;
