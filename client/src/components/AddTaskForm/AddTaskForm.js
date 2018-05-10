import React from "react";
import "./AddTaskForm.css"

const TaskForm = props => (
  <div className="add-task">
    <h3>Add a New Task </h3>
    <form className="add-task-form">
      <label>Task Name</label>
      <input value={props.taskItem} name="taskItem"
      onChange={props.handleInputChange}/>
      <button onClick={props.addTask}>Add New Task</button>
    </form>
  </div>
)

export default TaskForm;
