import React from "react";
import "./Projects.css";
import { motion, animate } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import framed from "../../assets/project_images/framed.png";
import frameE from "../../assets/project_images/frameE.png";

function ProgressBar(value) {
  // const [progress, setProgress] = useState(0);

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     setProgress(Math.random() * 100);
  //   }, 3000);
  //   return () => {
  //     clearInterval(id);
  //   };
  // }, []);
  // const progessTextRef = useRef(null);
  // useEffect(() => {
  //   const progressText = progessTextRef.current?.textContent;
  //   if (progressText != null) {
  //     animate(parseInt(progressText), value, {
  //       duration: 2,
  //       onUpdate: (cv) => {
  //         progessTextRef.current.textContent = cv.toFixed(0);
  //       },
  //     });
  //   }
  // }, [value]);
  return (
    <div className="progressbar_container">
      <div className="progressbar">
        <motion.div
          className="bar"
          animate={{
            width: `${value}%`,
          }}
          transition={{ duration: 2 }}
        />
      </div>
      <div className="progressbar_text">
        <p>0</p>
        <p>%</p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="task_board_item2">
      <div className="projects_heading">
        <h4>Projects</h4>
      </div>
      <div className="clients_wrapper">
        <div className="meet_with_clients">
          <div className="clients_and_icon">
            <div>
              <img src={framed} />
            </div>
            <div className="meet_with_clients_text project_heading">
              <h5>Meet with Clients</h5>
              <p>
                Prepare a progress
                <br /> report and send the <br />
                meeting link
              </p>
            </div>
          </div>
          <div className="task_percentage">
            {/* <progress
                className="meet_with_clients_progress"
                value="70"
                max="100"
  ></progress>*/}
            <ProgressBar value={50} />
            <p className="task_percentage_value">70%</p>
          </div>

          <div className="__teams">
            <img src={frameE} alt="icon" />
            <p>3 days left</p>
          </div>
        </div>
        <div className="meet_with_clients">
          <div className="clients_and_icon">
            <div>
              <img src={framed} alt="icon" />
            </div>
            <div className="meet_with_clients_text project_heading">
              <h5>Write an article</h5>
              <p>
                Article and blog write-
                <br />
                ups for websites
              </p>
            </div>
          </div>
          <div className="task_percentage2 ">
            <ProgressBar
              style={{
                height: "100%",
                // width: `${filled}%`,
                backgroundColor: "red",
                transition: "width 0.5s",
              }}
            />
            <p>50%</p>
          </div>
          <div className="__teams">
            <img src={frameE} alt="icon" />
            <p>1 hour left</p>
          </div>
        </div>
        <div className="meet_with_clients">
          <div className="clients_and_icon">
            <div>
              <img src={framed} alt="icon" />
            </div>
            <div className="meet_with_clients_text project_heading">
              <h5>Product design</h5>
              <p>
                Design a mobile app
                <br />
                for
                <br /> a fintech company
              </p>
            </div>
          </div>
          <div className="task_percentage3 ">
            {/* <progress
              className="product_design_progress"
              value="6o"
              max="100"
            ></progress> */}
            <ProgressBar />
          </div>
          <div className="__teams">
            <img src={frameE} alt="icon" />
            <p>3 weeks left</p>
          </div>
        </div>
      </div>
    </div>
  );
}
