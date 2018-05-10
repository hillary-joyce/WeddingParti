import React from "react";
import "./SingleProject.css";

const SingleProject = props => (
  <div key={props._id} value={props._id} className="newproject" onClick={props.findProjectId}>
    <p value={props._id} index={props.projIndex}>Project Name: {props.projectName} </p>
  </div>
)

export default SingleProject;
