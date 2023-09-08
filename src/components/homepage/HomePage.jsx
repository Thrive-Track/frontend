import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Review from "../carouselReviews/Reviews";
import dashboard from "../../assets/homepage_images/dashboard.png";
import electric from "../../assets/homepage_images/electric_bolt.png";
import account from "../../assets/homepage_images/account_tree.png";
import connect from "../../assets/homepage_images/connect.png";
import tasks from "../../assets/homepage_images/Frame 231.png";
import tasqs from "../../assets/homepage_images/tasks_today.png";

function HomePage() {
  return (
    <>
      <div className="container">
        <div className="landing_page">
          <div className="landing_page_text">
            <div className="heading">
              <h2>
                Empowering your
                <br />
                Productivity Journey
              </h2>
            </div>
            <div className="landing_page_intro">
              <p>
                Welcome to the all-in-one task
                <br /> management tool designed to help
                <br /> you unlock your full potential and
                <br /> achieve your goals with ease.
              </p>
            </div>

            <Link to={"/get started"}>
              <button type="button" className="get_started_button">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="hero_section_text_wrapper">
          <div className="hero_section_text">
            <h2>The All In One Tool To Simplify Your Work Life</h2>
            <p>
              Providing effective solutions to keep your tasks organized
              <br />
              in just one application
            </p>
          </div>
        </div>
        <div className="sample_container">
          <div className="sample">
            <img
              src={dashboard}
              alt="dashboard image"
              className="sample_image"
            />
          </div>
          <div className="information">
            <div className="elevate info">
              <div className="elevate_image image">
                <img src={electric} alt="icon" className="accessible_img" />
              </div>
              <div className="elevate_text text">
                <h4>Elevate your productivity</h4>
                <p>
                  Supercharge your efficiency
                  <br /> and stay focused with
                  <br /> powerful features.
                </p>
              </div>
            </div>
            <div className="accessible info">
              <div className="accessible_image image">
                <img src={account} alt="icon" className="accessible_img" />
              </div>
              <div className="accessible_text text">
                <h4>Accessible anywhere</h4>
                <p>
                  Access your tasks from any
                  <br /> device, whether at your
                  <br /> desk or on the go.
                </p>
              </div>
            </div>
            <div className="seamless info">
              <div className="seamless_image image">
                <img src={connect} alt="icon" className="accessible_img" />
              </div>
              <div className="seamless_text text">
                <h4>Seamless collaboration</h4>
                <p>
                  Work with team members,
                  <br /> delegate tasks and share
                  <br /> progress reports.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="visualize_container">
          <div className="visualize">
            <h3>Visualize your success</h3>
            <p>
              Watch your accomplishments come to life
              <br /> with dynamic visualizations and progress
              <br /> trackers, giving you a clear view of your
              <br /> achievements.
            </p>
          </div>
          <div className="article">
            <img src={tasks} className="article_image" />
          </div>
        </div>
        <div className="task_sample_container">
          <div className="task_sample">
            <img src={tasqs} alt="meet with clients" className="task_image" />
          </div>
          <div className="customize">
            <h3>Customize your workflow</h3>
            <p>
              Customize categories, labels, and filters to
              <br /> align with your preferences. With our
              <br /> flexibility, you can mold it to fit your working
              <br /> style and unlock your true potential.
            </p>
            <button className="learn_more_btn">Learn more</button>
          </div>
        </div>

        <Review />
      </div>
    </>
  );
}
export default HomePage;
