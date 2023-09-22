import React from "react";
import "./CircularprogressBar.css";

const CircularProgressBar = ({ percentage, circleWidth }) => {
  const radius = 64;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;
  return (
    <div className="circle">
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle_bacground"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle_progress"
          style={{ strokeDasharray: dashArray, strokeDashoffset: dashOffset }}
          transform={`rotate(-90) ${circleWidth / 2} ${circleWidth / 2}`}
        />
        <text
          x="50%"
          y="50%"
          dy="0.3em"
          textAnchor="middle"
          className="circle_text"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
