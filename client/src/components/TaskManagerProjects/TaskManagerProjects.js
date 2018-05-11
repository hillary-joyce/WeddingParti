import React from "react";
import "./TaskManagerProjects.css";

const WeddingProjects = props => (
  <div className="wedding-projects">
    <h3>Projects</h3>
    {props.children}
  </div>
)

export default WeddingProjects;
