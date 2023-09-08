import React from "react";
import "./LeftSideBar.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/dashboard_images/Logo.png";
import add from "../../../assets/dashboard_images/add.png";
import myicon from "../../../assets/dashboard_images/component.png";
import linevector from "../../../assets/dashboard_images/vectora.png";
import business from "../../../assets/dashboard_images/business_center.png";
import inactive from "../../../assets/dashboard_images/Inactive_Icons.png";
import diversity from "../../../assets/dashboard_images/diversity.png";
import settings from "../../../assets/dashboard_images/settings.png";
import support from "../../../assets/dashboard_images/support_agent.png";
import logout from "../../../assets/dashboard_images/logout.png";

export default function LeftSideBar() {
  return (
    <>
      <div className="left_side_bar_container">
        <div className="logo_wrapper">
          <img src={logo} alt="ThriveTrack logo" className="dash_board_logo" />
        </div>

        <div className="create_task">
          <img src={add} alt="icon" className="dashboard_icons" />

          <Link className="create_task_link">Create New Task</Link>
        </div>

        <div className="dashboard_container">
          <div className="dashboard">
            <img src={myicon} alt="icon" className="dashboard_icons" />

            <button className="dashboard_btn">Dashboard</button>

            <img src={linevector} alt="icon" className="vector_image" />
          </div>
          <div className="projects dashboard_menu_styles">
            <img src={business} alt="icon" className="dashboard_icons" />

            <Link className="dashboard_menu_link">Projects</Link>
          </div>
          <div className="calendar dashboard_menu_styles ">
            <img src={inactive} alt="icon" className="dashboard_icons" />

            <Link className="dashboard_menu_link">Calendar</Link>
          </div>
          <div className="teams dashboard_menu_styles">
            <img src={diversity} alt="icon" className="dashboard_icons" />

            <Link className="dashboard_menu_link">Teams</Link>
          </div>
          <div className="settings dashboard_menu_styles">
            <img
              src={settings}
              alt="settings icon"
              className="dashboard_icons"
            />

            <Link className="dashboard_menu_link">Settings</Link>
          </div>
        </div>
        <div className="support_wrapper ">
          <div className="support dashboard_menu_styles ">
            <img src={support} alt="support icon" className="dashboard_icons" />
            <p>
              <Link className="dashboard_menu_link">Support</Link>
            </p>
          </div>
          <div className="log_out dashboard_menu_styles">
            <img src={logout} alt="logout icon" className="dashboard_icons" />
            <p>
              <Link className="dashboard_menu_link">Log Out</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
