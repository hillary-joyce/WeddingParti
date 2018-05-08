import React from "react";
import "./AddCalendarEvent.css";

const AddCalendarEvent = props => (
<div className="add-date">
  <h4> Add a New Event </h4>
  <div className="row">
    <div className="two columns">
      <label>start date: </label>
      <input className="u-full-width" onChange={props.handleInputChange}
      value={props.startdate} name="startdate" placeholder="1/1/18"/>
    </div>
    <div className="two columns">
      <label>end date: </label>
      <input className="u-full-width" onChange={props.handleInputChange}
      value={props.enddate} name="enddate" placeholder="3/9/17"/>
    </div>
    <div className="six columns">
      <label>description: </label>
      <input className="u-full-width" onChange={props.handleInputChange}
      value={props.title} name="title"/>
    </div>
    <div className="two columns">
      <label></label>
      <button className="add-cal" onClick={props.addDate}>Add Event</button>
    </div>
  </div>
</div>
);

export default AddCalendarEvent;
