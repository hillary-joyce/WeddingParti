import React from "react";
import "./Event.css";

const Event = props => (
  <div className="new-event">
    <div className="event-date">
      <span className="event-day">{props.date}</span>
      <span>{props.month}</span>
    </div>
    <div className="event-details">
      <span className="event-name">{props.description}</span><br/>
      <span>When: {props.fulldate}, {props.time}</span><br/>
      <span>Where: {props.location}</span>
    </div>
  </div>
)

export default Event;
