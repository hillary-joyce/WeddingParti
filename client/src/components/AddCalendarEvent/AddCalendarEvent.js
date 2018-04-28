import React from "react";

const AddCalendarEvent = props => (
<div className="addDate">
  <h4> Add a New Event </h4>
  <p>start date: </p>
  <input onChange={props.handleInputChange}
  value={props.startdate} name="startdate" placeholder="1/1/18"/>
  <p>end date: </p>
  <input onChange={props.handleInputChange}
  value={props.enddate} name="enddate" placeholder="3/9/17"/>
  <p>description: </p>
  <input onChange={props.handleInputChange}
  value={props.title} name="title"/>
  <button className="AddCal" onClick={props.addDate}>Add Event</button>
</div>
);

export default AddCalendarEvent;
