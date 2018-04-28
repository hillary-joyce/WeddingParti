import React from "react";

const AddCalendarEvent = props => (
<div className="addDate">
  <p>start date: </p>
  <input onChange={props.handleInputChange}
  value={props.startdate} name="startdate"/>
  <p>end date: </p>
  <input onChange={props.handleInputChange}
  value={props.enddate} name="enddate"/>
  <p>description: </p>
  <input onChange={props.handleInputChange}
  value={props.title} name="title"/>
  <button className="AddCal" onClick={props.addDate}>Add Event</button>
</div>
);

export default AddCalendarEvent;
