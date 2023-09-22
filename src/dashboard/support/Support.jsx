import React from "react";
import notification from "../../assets/dashboard_images/notification_icon.png";
import dummy from "../../assets/dashboard_images/dummy_profile_image.png";
import expand from "../../assets/dashboard_images/expand_more.png";
import "./Support.css";
import search from "../../assets/dashboard_images/search_icon.png";
import admin from "../../assets/dashboard_images/admin-bro.png";
import SupportItems from "./SupportItems";

function Support() {
  return (
    <div className="support_container">
      <div className="user__profile">
        <div className="user_profile_notification">
          <div className="notification_icon">
            <img
              src={notification}
              className="notification"
              alt="notification icon"
            />
          </div>
          <div className="dummy_image_wrapper">
            <img src={dummy} alt="dummy icon" className="dummy_image" />
          </div>
          <div className="user_name_mail">
            <h5>Beston Keghtor</h5>
            <p>bestonkeghtor@gmail.com</p>
          </div>
          <div className="expand_icon">
            <img src={expand} alt="expand more icon" className="arrow_btn" />
          </div>
        </div>
      </div>
      <div className="thrive_track_admin">
        <div className="thrive_track_support_center">
          <div className="thrive_track_support">
            <h3>ThriveTrack Support Center</h3>
          </div>
          <div className="thrive_input_search">
            <div className="thrive_track">
              <input
                className="thrive_track_input"
                placeholder="How can we help you?"
                style={{ fontSize: "20px", paddingLeft: "20px" }}
              />
            </div>
            <div className="search_image">
              <img src={search} alt="search icon" className="search_image" />
            </div>
          </div>
        </div>
        <div className="admin">
          <img src={admin} />
        </div>
      </div>
      <div className="help_center">
        <div className="help_header">
          <h5>Need help? We've got you covered</h5>
          <p>Find your answers here!</p>
        </div>
      </div>
      <div className="support_items_container">
        <SupportItems />
      </div>
    </div>
  );
}

export default Support;
