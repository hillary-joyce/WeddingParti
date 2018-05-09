import React, {Component} from "react";
import WeddingProjects from "../../components/TaskManagerMain";
import WeddingTasks from "../../components/TaskManagerSingle";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav";

class TaskManagerPage extends Component {
  state = {
    weddingId: "",
    projectName: "",
    projectId: "",
    projectArrayId: "",
    taskItem: "",
    taskId: "",
    projects: [],
    tasks: []
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  componentDidMount() {
    this.setState({weddingId: this.props.weddingId},
      () => this.getProjects())
  };

  getProjects = () => {
    API.findProjects(this.state.weddingId)
      .then(res => this.setState({projects: res.data.taskManager}))
      .catch(err => console.log(err))
  }

  addProject = event => {
    event.preventDefault();
    API.addProject(this.state.weddingId, {
      projectName: this.state.projectName
    })
      .then(res => this.getProjects())
      .catch(err => console.log(err))
  }

  setProjectId = event => {
    const projectId = event.target.getAttribute("value")
    this.setState({projectId: projectId}, () => console.log(this.state.projectId))
  }

  findProjectId = event => {
    event.preventDefault();
    const projectId = event.target.getAttribute("value")
    const projectArrayId = event.target.getAttribute("index")
    this.setState({projectId: projectId, projectArrayId: projectArrayId},
      () => this.findTasks()
    )
  }

  findTasks = () => {
    console.log(this.state.projectId + this.state.projectArrayId);
    API.findTasks(this.state.weddingId, this.state.projectId)
      .then(res => this.setState({tasks: res.data.taskManager[this.state.projectArrayId].taskItems}, () => console.log(this.state.tasks)))
      .catch(err => console.log(err))
  }

  addTask = event => {
    event.preventDefault();
    API.addTask(this.state.weddingId, this.state.projectId,
      {
        itemName: this.state.taskItem
      })
      .then(res => this.findTasks())
      .catch(err => console.log(err))
  }

  removeTask = event => {
    event.preventDefault();
    this.setState({taskId: event.target.getAttribute("value")},
      () => API.removeTask(this.state.weddingId, this.state.projectId, this.state.taskId)
      .then(res => this.findTasks())
      .catch(err => console.log(err))
    )
  }

  render() {
    return(
    <div>
      <Nav>
        <ul className="navbar-links">
          <li className={window.location.pathname === "/wedding" ? "active" : ""}>
            <Link to="/wedding">Home</Link>
          </li>
          <li className={window.location.pathname === "/wedding/calendar" ? "active" : ""}>
            <Link to="/wedding/calendar">Calendar</Link>
          </li>
          <li className={window.location.pathname === "/wedding/photogallery" ? "active" : ""}>
            <Link to="/wedding/photogallery">Image Gallery</Link>
          </li>
          <li className={window.location.pathname === "/wedding/taskmanager" ? "active" : ""}>
            <Link to="/wedding/taskmanager">Task Manager</Link>
          </li>
        </ul>
      </Nav>
      <label>Project Name</label>
      <input value={this.state.projectName} name="projectName" onChange={this.handleInputChange}/>
      <button onClick={this.addProject}>Add New Project</button>
      <label>Task Name</label>
      <input value={this.state.taskItem} name="taskItem" onChange={this.handleInputChange}/>
      <button onClick={this.addTask}>Add New Task</button>
      <p>state projectId: {this.state.projectId}</p>

      <WeddingProjects>
        {this.state.projects.map(project =>
        <div key={project._id} value={project._id} className="newproject" onClick={this.findProjectId}>
          <p value={project._id} index={this.state.projects.indexOf(project)}>Project Name: {project.projectName} </p>
        </div>
        )
      }
      </WeddingProjects>
      <WeddingTasks>
        {this.state.tasks.map(taskItem =>
          <div key={taskItem._id} value={taskItem._id} className="newtask">
            <p value={taskItem._id}>{taskItem.itemName}</p>
            <button onClick={this.removeTask} value={taskItem._id}>Task Completed</button>
          </div>
        )}
      </WeddingTasks>
    </div>

    )
  }
}

export default TaskManagerPage;
