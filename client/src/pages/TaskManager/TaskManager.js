import React, {Component} from "react";
import WeddingProjects from "../../components/TaskManagerProjects";
import WeddingTasks from "../../components/TaskManagerTasks";
import TaskForm from "../../components/AddTaskForm";
import ProjectForm from "../../components/AddProjectForm";
import SingleTask from "../../components/SingleTask";
import SingleProject from "../../components/SingleProject";
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
      .then(res => this.setState(
        {
          projectName: ""
        }, this.getProjects()))
      .catch(err => console.log(err))
  }

  setProjectId = event => {
    const projectId = event.target.getAttribute("value")
    this.setState({projectId: projectId})
  }

  findProjectId = event => {
    event.preventDefault();
    const projectId = event.target.getAttribute("value")
    const projectArrayId = event.target.getAttribute("index")
    console.log(projectId);
    this.setState({projectId: projectId, projectArrayId: projectArrayId},
      () => this.findTasks()
    )
  }

  findTasks = () => {
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
      .then(res => this.setState(
        {
          itemName: ""
        }, this.findTasks()))
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
      <div className="container task-manager-container">
      <h1 className="task-manager-header">Task Manager</h1>

      <WeddingProjects>
        {this.state.projects.map(project =>
        <SingleProject
          _id={project._id}
          findProjectId={this.findProjectId}
          projIndex={this.state.projects.indexOf(project)}
          projectName={project.projectName}
        />
        )
      }
      <ProjectForm
        projectName={this.state.projectName}
        handleInputChange={this.handleInputChange}
        addProject={this.addProject}
      />
      </WeddingProjects>
      <WeddingTasks>
        {this.state.tasks.map(taskItem =>
          <SingleTask
            _id={taskItem._id}
            itemName = {taskItem.itemName}
            removeTask = {this.removeTask}
          />
        )}
        <TaskForm
          taskItem={this.state.taskItem}
          handleInputChange={this.handleInputChange}
          addTask={this.addTask}
          projectId={this.state.projectId}
        />
      </WeddingTasks>
    </div>
    </div>

    )
  }
}

export default TaskManagerPage;
