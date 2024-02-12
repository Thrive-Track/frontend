import ThriveSideBar from "../sidebar/ThriveSideBar";
import TopBar from "../topbar/TopBar";
import Taskboard from "../taskboard/Taskboard";
import "./Dashboard.css";
// import Project from "./project/Project";
import CircleProgress from "../circleprogressbar/CircleProgress";
import { taskScheduleData } from "../../../assets/data/data";
// import ProgressBar from "./progressbar/progressbar";
const Dashboard = () => {
  return (
    <>
      <div className="dashboard_container">
        <div className="menu_bar">
          <ThriveSideBar />
        </div>

        <div className="task__board">
          <div className="top_bar">
            <TopBar />
          </div>
          <div className="tasksq">
            <Taskboard />
          </div>
        </div>
        <div className="right_aside_bar">
          <div className="overall_progress">
            <h5>Overall progress</h5>

            <div className="circle_progress">
              <CircleProgress />
            </div>
            <div className="progress_percent">
              <p>Task finished</p>
            </div>
            <TaskSchedule />
          </div>
        </div>
      </div>
    </>
  );
};
export default Dashboard;

const TaskSchedule = () => {
  return (
    <div className="schedule_container">
      {taskScheduleData.map((item) => {
        return (
          <div className="task_schedule_wrapper" key={item.id}>
            <div className="task_schedules_icon">
              <img src={item.image} alt="Teams" />
            </div>
            <div className="task_schedule_title">
              <h4>{item.header}</h4>
              <p>{item.location}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
