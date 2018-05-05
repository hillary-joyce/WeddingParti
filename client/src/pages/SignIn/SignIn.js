import React, {Component} from "react";
import { BrowserRouter as  Router, Route, Redirect, withRouter } from "react-router-dom";
import HomePage from "../Homepage";
import WelcomePage from "../WelcomePage";
import CalendarPage from "../Calendar";
import PhotoGalleryPage from "../PhotoGallery";
import TaskManagerPage from "../TaskManager";
import Nav from "../../components/Nav"
import API from "../../utils/API";
import GoogleLogin from 'react-google-login';




class SignInPage extends Component {
state = {
  weddingName: "",
  weddingId: "",
  userEmail: ""
}

handleInputChange = event => {
  const { name, value } = event.target;
  this.setState({
    [name]: value
  });
};

responseGoogle = (response) => {
  console.log(response);
  console.log(response.profileObj.email);
  this.setState({userEmail: response.profileObj.email},
  () => this.getWeddingData())
}

getWeddingData = event => {
  API.getWedding(this.state.userEmail)
    .then(res => this.setState(
      {
        weddingId: res.data._id,
        weddingName: res.data.weddingName
      }
    ))
    .catch(err => console.log(err))
}

render() {
  return(
<Router>
<div>
  {this.state.userEmail != ""
    ? <Redirect to="/wedding"/>
    : <GoogleLogin
      clientId="35898574910-a499cdol1ke5dkrsu8qhsm0d04qsjq2b.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}
    />
  }
    <Route exact path="/" component={HomePage} />
    <Route exact path="/wedding" component={() => <WelcomePage userEmail={this.state.userEmail}/>}/>
    <Route exact path="/wedding/calendar" component={() => <CalendarPage weddingId={this.state.weddingId}/>} />
    <Route path="/wedding/photogallery" component={() => <PhotoGalleryPage weddingId={this.state.weddingId}/>} />
    <Route path="/wedding/taskmanager" component={() => <TaskManagerPage weddingId={this.state.weddingId}/>} />
  </div>
</Router>
)
}
}

export default SignInPage;
