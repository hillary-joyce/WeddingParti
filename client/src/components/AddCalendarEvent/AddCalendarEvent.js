import React from "react";

const AddCalendarEvent = props => (
<div className="addDate">
  <p>date: </p>
  <input onChange={props.handleInputChange}
  value={props.date} name="date"/>
  <p>description: </p>
  <input onChange={props.handleInputChange}
  value={props.description} name="description"/>
  <button className="AddCal" onClick={props.addDate}>Add Event</button>
</div>
);

export default AddCalendarEvent;
