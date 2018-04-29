import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "../../components/SignIn";
import HomePage from "../Homepage";
import WelcomePage from "../WelcomePage";
import CalendarPage from "../Calendar";
import PhotoGalleryPage from "../PhotoGallery";
import TaskManagerPage from "../TaskManager";
import Nav from "../../components/Nav"
import API from "../../utils/API";


class SignInPage extends Component {
state = {
  weddingName: "",
  weddingId: ""
}

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

getWeddingData = event => {
  event.preventDefault()
  console.log("clicked");
  API.getWedding(this.state.weddingName)
    .then(res => this.setState(
      {
        weddingId: res.data._id
      }
    ))
    .catch(err => console.log(err))
}


render() {
  return(
<Router>
  <div>
    <Nav />
    <input name="weddingName" value={this.state.weddingName} onChange={this.handleInputChange}/>
    <button onClick={this.getWeddingData}>click</button>
    <p>{this.state.weddingName}</p>

    <Route exact path="/" component={HomePage} />
    <Route exact path="/wedding" component={() => <WelcomePage weddingName={this.state.weddingName}/>}/>
    <Route exact path="/wedding/calendar" component={() => <CalendarPage weddingId={this.state.weddingId}/>} />
    <Route path="/wedding/photogallery" component={() => <PhotoGalleryPage weddingId={this.state.weddingId}/>} />
    <Route path="/wedding/taskmanager" component={() => <TaskManagerPage weddingId={this.state.weddingId}/>} />
  </div>
</Router>
)
}
}

export default SignInPage;
