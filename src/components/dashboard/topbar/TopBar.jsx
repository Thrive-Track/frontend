import search from "../../../assets/dashboard_images/search_icon.png";
import plussign from "../../../assets/dashboard_images/add.png";
import notification from "../../../assets/dashboard_images/notification_icon.png";
import userpic from "../../../assets/dashboard_images/googleWoman.png";
import expand from "../../../assets/dashboard_images/expand_more.png";
import "./TopBar.css";
import { Link } from "react-router-dom";
const TopBar = () => {
  return (
    <>
      <div className="top_bar_container">
        <div className="welcome">
          <h4>Hello Sylvester!!!</h4>
          <p>Welcome Back!</p>
        </div>
        <img src={search} alt="search button" className="search_btn" />
        <input
          type="text"
          placeholder="Search for people, teams and folders"
          className="search_bar"
        ></input>
        <div className="invite_btn">
          <img src={plussign} alt="add icon" />
          <Link>Invite Teammate</Link>
        </div>
        <img src={notification} alt="bell icon" className="bell_icon" />
        <img src={userpic} alt="user profile pic" className="image" />
        <img src={expand} alt="arrow icon" className="arrow_btn" />
      </div>
    </>
  );
};
export default TopBar;
