import { sideBarData, sideBarData2 } from "../../../assets/data/data.jsx";
import { Link } from "react-router-dom";
import logo from "../../../assets/dashboard_images/Logo.png";
import add from "../../../assets/dashboard_images/add.png";
import upgrade from "../../../assets/dashboard_images/grass.png";
import "./ThriveSidebar.css";
const ThriveSideBar = () => {
  return (
    <>
      <div className="side_bar_container">
        <div className="logo_wrapper">
          <img src={logo} alt="ThriveTrack logo" className="dash_board_logo" />
        </div>
        <div className="create_task">
          <img src={add} alt="icon" className="dashboard_icons" />

          <Link className="create_task_link">Create New Task</Link>
        </div>
        <div className="side_bar_data">
          {sideBarData.map((data) => {
            return (
              <div className="bar_icon" key={data.id}>
                <img src={data.image} alt={data.altUrl} />
                <p>{data.text}</p>
              </div>
            );
          })}
          <Link>
            <button className="upgraade_btn">
              <img src={upgrade} alt="upgrade icon" /> Upgrade
            </button>
          </Link>
          {sideBarData2.map((item) => {
            return (
              <div className="bar_icon" key={item.id}>
                <img src={item.image} alt={item.altUrl} />
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ThriveSideBar;
