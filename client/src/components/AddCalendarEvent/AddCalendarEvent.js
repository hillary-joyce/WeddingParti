import React from "react";
import "./AddCalendarEvent.css";

const AddCalendarEvent = props => (
<div className="add-date">
  <h4> Add a New Event </h4>
  <form className="add-new-event-form">
  <div className="row">
    <div className="four columns">
      <label>Start Date: </label>
      <input className="u-full-width" onChange={props.handleInputChange}
      value={props.startdate} name="startdate" placeholder="1/1/18"/>
    </div>
    <div className="four columns">
      <label>End Date: </label>
      <input className="u-full-width" onChange={props.handleInputChange}
      value={props.enddate} name="enddate" placeholder="3/9/17"/>
    </div>
    <div className="four columns">
      <label>Time</label>
      <input className="u-full-width" onChange={props.handleInputChange}
      value={props.time} name="time" placeholder="7:00PM, 10:30AM"/>
    </div>
  </div>
  <div className="row">
    <div className="four columns">
      <label>Location</label>
      <input className="u-full-width" onChange={props.handleInputChange}
      value={props.location} name="location"/>
    </div>
    <div className="five columns">
      <label>Description: </label>
      <input className="u-full-width" onChange={props.handleInputChange}
      value={props.title} name="title"/>
    </div>
    <div className="three columns">
      <button className="add-cal u-full-width" onClick={props.addDate}>Add Event</button>
    </div>
  </div>
  </form>
</div>
);

export default AddCalendarEvent;
