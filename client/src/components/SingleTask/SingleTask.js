import React from "react";
import "./SingleTask.css";

const SingleTask = props => (
  <div key={props._id} value={props._id} className="newtask">
    <p value={props._id}>{props.itemName}</p>
    <button onClick={props.removeTask} value={props._id}>Task Completed</button>
  </div>
)

export default SingleTask;
