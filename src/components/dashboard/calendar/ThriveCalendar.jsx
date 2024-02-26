import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";

const ThriveCalendar = () => {
  const [date, SetDate] = useState(new Date());

  const onChange = (date) => {
    SetDate(date);
  };
  return (
    <div className="calndar_container">
      <Calendar onChange={onChange} value={date} />
    </div>
  );
};
export default ThriveCalendar;
