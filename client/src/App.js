import React, {Component} from "react";
import { BrowserRouter as  Router, Route, Redirect, withRouter } from "react-router-dom";
import HomePage from "./pages/Homepage";
import WelcomePage from "./pages/WelcomePage";
import CalendarPage from "./pages/Calendar";
import PhotoGalleryPage from "./pages/PhotoGallery";
import TaskManagerPage from "./pages/TaskManager";
import Nav from "./components/Nav"
import API from "./utils/API";
import GoogleLogin, { GoogleLogout } from 'react-google-login';


class App extends Component {
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

logout = () => {
  this.setState({userEmail: ""});
}

getWeddingData = event => {
  try {
  API.getWedding(this.state.userEmail)
    .then(res => this.setState(
      {
        weddingId: res.data._id,
        weddingName: res.data.weddingName
      }
    ))
    .catch(err => console.log(err))
  }
  catch (err) {
    console.log("unable to find wedding with username" + this.state.userEmail);
  }
}

render() {
  return(
<Router>
<div>
  {this.state.userEmail != ""
    ?
    <div>
    <Redirect to="/wedding"/>
    <GoogleLogout
      buttonText="Sign Out"
      style={{ color: '#aec8bb', background:'white', fontSize: '1em', position: 'absolute', right: '0' }}
      onLogoutSuccess={this.logout}>
    </GoogleLogout>
    </div>
    :
    <div>
    <Redirect to="/"/>
    <GoogleLogin
      clientId="35898574910-a499cdol1ke5dkrsu8qhsm0d04qsjq2b.apps.googleusercontent.com"
      buttonText="Sign In With Google"
      style={{ color: '#aec8bb', background: 'white', fontSize: '1em', position: 'absolute', right: '0' }}
      onSuccess={this.responseGoogle}
      onFailure={this.responseGoogle}
    />
    </div>
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

export default App;
