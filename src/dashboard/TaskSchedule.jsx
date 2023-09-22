import React from "react";
import "./MainDashBoard.css";
import groups from "../assets/dashboard_images/groups.png";

function TaskSchedule() {
  return (
    <div className="task_schedule_wrapper">
      <div className="task_schedules_icon">
        <img src={groups} alt="Teams" />
      </div>
      <div className="task_schedule_title">
        <h4>Meet with Devs</h4>
        <p>Online 03:00 pm</p>
      </div>
    </div>
  );
}

export default TaskSchedule;
