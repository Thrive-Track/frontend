import React from "react";
import "./MainDashBoard.css";
import Projects from "./Projects";
import "react-circular-progressbar/dist/styles.css";
import CircleProgress from "./circleprogressbar/CircleProgress";
import ThriveCalendar from "./ThriveCalendar";
import search from "../../assets/dashboard_images/search_icon.png";
import notification from "../../assets/dashboard_images/notification_icon.png";
import dummy from "../../assets/dashboard_images/dummy_profile_image.png";
import expand from "../../assets/dashboard_images/expand_more.png";
import thrive from "../../assets/dashboard_images/thriveframe.png";
import framea from "../../assets/dashboard_images/framea.png";
import frameb from "../../assets/dashboard_images/frameb.png";
import framec from "../../assets/dashboard_images/framec.png";
// import inactiveIcons from "../../assets/dashboard_images/inactive_Icons.png";
import inactiveIcon from "../../assets/dashboard_images/the-icon.png";
import reminder from "../../assets/dashboard_images/reminder.png";
import groups from "../../assets/dashboard_images/groups.png";

export default function MainDashBoard() {
  return (
    <>
      <div className="dashboard_container">
        <div className="user_profile">
          <div className="__profile">
            <h5>Hello Beston!!!</h5>
            <p>Welcome Back!</p>
          </div>

          <div className="search_icon">
            <img src={search} alt="search icon" />
            <img src={notification} alt="notification icon" />
            <img src={dummy} alt="dummy icon" className="dummy_image" />

            <div className="user_name_mail">
              <h5>Beston Keghtor</h5>
              <p>bestonkeghtor@gmail.com</p>
            </div>
            <img src={expand} alt="expand more icon" className="arrow_btn" />
          </div>
        </div>
        <div className="center__right_aside_board">
          <div className="task_board">
            <div className="task_board_item1">
              <div className="all_tasks">
                <img src={thrive} alt="icon" />
                <div className="all_task_text">
                  <h5>All Tasks</h5>
                  <p>In Progress</p>
                </div>
              </div>
              <div className="In_progress all_tasks">
                <img src={framea} alt="icon" />
                <div className=" all_task_text in_progress_text">
                  <h5>In Progress</h5>
                  <p>10 Projects</p>
                </div>
              </div>
              <div className="In_progress all_tasks">
                <img src={frameb} alt="icon" />
                <div className=" all_task_text in_progress_text">
                  <h5>Completed</h5>
                  <p>28 Projects</p>
                </div>
              </div>
              <div className="In_progress all_tasks">
                <img src={framec} alt="icon" />
                <div className=" all_task_text in_progress_text">
                  <h5>Overdue</h5>
                  <p>12 Projects</p>
                </div>
              </div>
            </div>

            <Projects />
            <div className="task_board_item3">
              <div className="tasks_today">
                <h4>Tasks Today</h4>
                <div className="todays_task">
                  <div className="todays_task1">
                    <div>
                      <img src="calendar_icon.png" alt="icon" />
                    </div>
                    <div className="time_task_schedule">
                      <div className="time_task">
                        <div className="time">
                          <h5>Time</h5>
                          <p>03:00 pm</p>
                        </div>
                        <div className="task_schedule">
                          <h5>Hold training with TAP programmers</h5>
                          <p>https//zoom.link.us/ng</p>
                        </div>
                      </div>
                      <div className="reminder">
                        <img src={reminder} alt=" reminder icon" />
                        <p>Reminder</p>
                      </div>
                    </div>
                  </div>

                  <div className="todays_task1">
                    <div>
                      <img src={inactiveIcon} />
                    </div>
                    <div className="time_task_schedule">
                      <div className="time_task">
                        <div className="time">
                          <h5>Time</h5>
                          <p>12:00 am</p>
                        </div>
                        <div className="task_schedule">
                          <h5>Read a book on a public speaking</h5>
                          <p>Complete 500 pages before noon</p>
                        </div>
                      </div>
                      <div className="reminder">
                        <img src={reminder} alt="reminder icon" />
                        <p>Reminder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right_aside_board">
            <div className="overall_progress">
              <h5>Overall progress</h5>

              <div className="circle_progress">
                <CircleProgress />
              </div>
              <div className="progress_percent">
                <p>Task finished</p>
              </div>
            </div>
            <div className="calendar">
              <ThriveCalendar />
            </div>
            <div className="task_schedules_container">
              <div className="task_schedule_wrapper">
                <div className="task_schedules_icon">
                  <img src={groups} alt="Teams" />
                </div>
                <div className="task_schedule_title">
                  <h4>Meet with Devs</h4>
                  <p>Online 03:00 pm</p>
                </div>
              </div>
              <div className="task_schedule_wrapper">
                <div className="task_schedules_icon">
                  <img src={groups} alt="Teams" />
                </div>
                <div className="task_schedule_title">
                  <h4>Meet with Devs</h4>
                  <p>Online 03:00 pm</p>
                </div>
              </div>
              <div className="task_schedule_wrapper">
                <div className="task_schedules_icon">
                  <img src={groups} alt="Teams" />
                </div>
                <div className="task_schedule_title">
                  <h4>Meet with Devs</h4>
                  <p>Online 03:00 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
