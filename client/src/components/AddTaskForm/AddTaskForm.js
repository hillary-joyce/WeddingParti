import React from "react";
import "./AddTaskForm.css"

const TaskForm = props => (
  <div className={props.projectId === "" ? "hidden" : "selected"}>
    <form className="add-task-form">
      <div className="row">
        <div className="eight columns">
          <label>Task Name</label>
          <input className="u-full-width" value={props.taskItem} name="taskItem"
          onChange={props.handleInputChange}/>
        </div>
        <div className="four columns">
          <button className="add-task-btn" onClick={props.addTask}>Add</button>
        </div>
      </div>
    </form>
  </div>
)

export default TaskForm;
