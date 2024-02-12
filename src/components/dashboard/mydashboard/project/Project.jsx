// import { projectData, tasksData } from "../../../../assets/data/data";
// import "./Project.css";

// const Project = () => {
//   return (
//     <>
//       <div className="task_board_item2">
//         <div className="projects_heading">
//           <h4>Projects</h4>
//         </div>
//         <div className="project_items">
//           {projectData.map((el) => {
//             return (
//               <div className="project_details" key={el.id}>
//                 <div className="task_desc">
//                   <img src={el.icon} alt="icon" className="logo_icon" />
//                   <div className="">
//                     <h4>{el.header}</h4>
//                     <p>{el.text}</p>
//                   </div>
//                 </div>

//                 <div className="my_progress">{el.component}</div>
//                 <div className="progress_time">
//                   <img src={el.team} alt="" />
//                   <p>{el.time}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//       <TaskToday />
//     </>
//   );
// };
// export default Project;

// const TaskToday = () => {
//   return (
//     <>
//       <div className="task_board_item3">
//         <div className="tasks_today">
//           <h4>Tasks Today</h4>
//           <div className="today_task">
//             {tasksData.map((task) => {
//               return (
//                 <div className="todays_task1" key={task.id}>
//                   <div className="time_task_schedule">
//                     <div>
//                       <img src={task.icon} alt={task.altUrl} />
//                     </div>
//                     <div className="time_task">
//                       <div className="time">
//                         <h5>{task.header}</h5>
//                         <p>{task.time}</p>
//                       </div>
//                       <div className="task_schedule">
//                         <h5>{task.header2}</h5>
//                         <p>{task.text}</p>
//                       </div>
//                     </div>
//                     <div className="reminder">
//                       <img
//                         src={task.image}
//                         alt={task.altUrl}
//                         className="rem_image"
//                       />
//                       <p>{task.rem}</p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
