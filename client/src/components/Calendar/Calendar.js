import React from "react";
import "./Calendar.css";

const CalendarContainer = props => (
  <div className="calendar-page">
    <h1 className="calendar-header">Upcoming Events</h1>
    {props.children}
  </div>
)

export default CalendarContainer;
