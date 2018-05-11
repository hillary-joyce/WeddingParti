import React from "react";
import "./SingleProject.css";

const SingleProject = props => (
  <div key={props._id} value={props._id} index={props.projIndex} className="newproject" onClick={props.findProjectId}>
    <p value={props._id} index={props.projIndex}>{props.projectName} </p>
  </div>
)

export default SingleProject;
