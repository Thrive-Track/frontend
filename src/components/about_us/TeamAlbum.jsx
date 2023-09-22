import React from "react";
import beston from "../../assets/about_us_images/fineman.png";
import annabel from "../../assets/about_us_images/Ellipse.png";
import sylvester from "../../assets/about_us_images/handsome.png";
// import sandra from "../../assets/about_us_images/prettylady.png";
// import owokorede from "../../assets/about_us_images/calvinunsplash.png";
import "./AboutUs.css";

function TeamAlbum() {
  return (
    <div className="meet_the_team_wrapper">
      <div className="team_header">
        <h3>Meet the Team</h3>
      </div>

      <div className="team_album">
        <div className="team_album1">
          <div className="picture_and_text">
            <div className="picture">
              <img src={beston} alt="image" />
            </div>
            <div className="text">
              <h4>Beston Keghtor</h4>
              <p>Product Designer</p>
            </div>
          </div>
          <div className="picture_and_text">
            <div className="picture">
              <img src={annabel} alt="image" />
            </div>
            <div className="text">
              <h4>Annabel Nnawuihe</h4>
              <p>Backend Developer</p>
            </div>
          </div>
          <div className="picture_and_text">
            <div className="picture">
              <img src={sylvester} alt="image" />
            </div>
            <div className="text">
              <h4>Sylvester Bamidele</h4>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
        <div className="team_album2">
          <div className="picture_and_text2">
            <div className="picture">
              <img src={annabel} alt="image" className="team_picture" />
            </div>
            <div className="text">
              <h4>Sandra Kanu</h4>
              <p>Product Designer</p>
            </div>
          </div>

          <div className="picture_and_text2">
            <div className="picture2">
              <img src={beston} alt="image" className="team_picture" />
            </div>
            <div className="text">
              <h4>Owokorede</h4>
              <p>Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamAlbum;
