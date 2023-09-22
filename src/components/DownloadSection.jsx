import React from "react";
import "./homepage/HomePage.css";
import pictureFrame from "../assets/downloadSection_images/Frame 238.png";
import android from "../assets/downloadSection_images/adb.png";
import iOS from "../assets/downloadSection_images/Active Icons.png";

export default function DownloadSection() {
  return (
    <div className="download_section">
      <div className="download_section_image">
        <img src={pictureFrame} alt="Picture Frame" />
      </div>
      <div className="download_section_text">
        <h4>Unleash Your Potential</h4>
        <p>
          Ready to embark on your productivity journey? Join
          <br /> ThriveTrack today and experience the transformative power
          <br /> of efficient task management..
        </p>
        <div className="download_btn">
          <button className="download_btn1">
            Download
            <img src={android} alt="Android Icon" />
          </button>
          <button className="download_btn1">
            Download
            <img src={iOS} alt="Apple Icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
