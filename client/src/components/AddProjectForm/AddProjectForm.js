import React from "react";
import "./AddProjectForm.css";

const ProjectForm = props => (
  <div className="add-project">
    <h4>Add A New Project </h4>
    <form className="add-project-form">
      <label>Project Name</label>
      <input value={props.projectName} name="projectName"
      onChange={props.handleInputChange}/>
      <button onClick={props.addProject}>Add New Project</button>
    </form>
  </div>
)

export default ProjectForm;
