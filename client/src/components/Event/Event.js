import React from "react";
import "./Event.css";

const Event = props => (
  <div className="new-event">
    <div className="event-date">
      <span className="event-day">{props.date}</span>
      <span>{props.month}</span>
    </div>
    <div className="event-details">
      <span>{props.description}</span>
      <span>When: {props.fulldate}</span>
    </div>
  </div>
)

export default Event;
