import React, {Component} from "react";
import WeddingProjects from "../../components/TaskManagerMain";
import WeddingTasks from "../../components/TaskManagerSingle";
import API from "../../utils/API";

class TaskManagerPage extends Component {
  state = {
    weddingId: "",
    projectName: "",
    projectId: "",
    taskItem: "",
    projects: [],
    taskItems: []
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
    console.log(this.state.weddingId);
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

  findTasks = event => {
    event.preventDefault();
    const projectId = event.target.getAttribute("value")
    this.setState({projectId: projectId},
      () => API.findTasks(this.state.weddingId, this.state.projectId)
      .then(res => this.setState({taskItems: res.data.taskItems}))
      .catch(err => console.log(err))
    )
  }

  addTask = event => {
    event.preventDefault();
    console.log(this.state.taskItem);
    API.addTask(this.state.weddingId, this.state.projectId,
      {itemName: this.state.taskItem}
    )
      .then(res => console.log("taskadded"))
      .catch(err => console.log(err))
  }

  removeTask = event => {
    event.preventDefault();
    API.removeTask(this.state.weddingId, this.state.projectId, "5ae7c0d28843ed05cc57072b")
      .then(res => console.log('task deleted'))
      .catch(err => console.log(err))
  }

  render() {
    return(
    <div>
      <label>Project Name</label>
      <input value={this.state.projectName} name="projectName" onChange={this.handleInputChange}/>
      <button onClick={this.addProject}>Add New Project</button>
      <label>Task Name</label>
      <input value={this.state.taskItem} name="taskItem" onChange={this.handleInputChange}/>
      <button onClick={this.addTask}>Add New Task</button>
      <p>state projectId: {this.state.projectId}</p>
      <button onClick={this.removeTask}>Delete 1 task</button>
      <WeddingProjects>
        {this.state.projects.map(project =>
        <div key={project._id} value={project._id} className="newproject" onClick={this.findTasks}>
          <p value={project._id}>Project Name: {project.projectName}</p>
        </div>
        )
      }
      </WeddingProjects>
    </div>

    )
  }
}

export default TaskManagerPage;
