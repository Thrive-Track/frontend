import React from "react";
import "./homepage/HomePage.css";

export default function DownloadSection() {
  return (
    <div className="download_section">
      <div className="download_section_image">
        <img src="Frame 238.png" />
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
            <img src="adb.png" />
          </button>
          <button className="download_btn1">
            Download
            <img src="Active Icons.png" />
          </button>
        </div>
      </div>
    </div>
  );
}
