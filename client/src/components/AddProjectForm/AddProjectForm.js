import React from "react";
import "./AddProjectForm.css";

const ProjectForm = props => (
  <div className="add-project">
    <form className="add-project-form">
    <div className="row">
      <div className="eight columns">
        <label>Project Name</label>
        <input className="u-full-width" value={props.projectName} name="projectName"
        onChange={props.handleInputChange}/>
      </div>
      <div className="four columns">
        <button className="add-project-btn" onClick={props.addProject}>Add</button>
      </div>
    </div>
    </form>
  </div>
)

export default ProjectForm;
