import React from "react";
import "./SingleTask.css";
import Checkmark from "../../images/icons/checkmark.png";

const SingleTask = props => (
  <div key={props._id} value={props._id} className="newtask">
    <p value={props._id}>{props.itemName}</p>
    <img src={Checkmark} alt="checkmark" className="checkmark" onClick={props.removeTask} value={props._id}/>
  </div>
)

export default SingleTask;
