import React from "react";
import { useState } from "react";
import CircularProgressBar from "./CircularProgressBar";
import "react-circular-progressbar/dist/styles.css";

function CircleProgress() {
  const [percentage, setPercentage] = useState(70);

  return (
    <div className="circular_progress">
      <CircularProgressBar percentage={percentage} circleWidth="200" />
      {/* <input
        type="range"
        min="1"
        max="100"
        step="1"
        value={percentage}
        className="progress_input"
        onChange={(ev) => {
          ev.target.value;
        }}
      /> */}
    </div>
  );
}
export default CircleProgress;
