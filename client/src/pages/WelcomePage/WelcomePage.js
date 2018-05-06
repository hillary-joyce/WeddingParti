import React, { Component } from "react";
import API from "../../utils/API";
import moment from "moment";
import Nav from "../../components/Nav";
import WelcomePage from "../../components/WelcomePage";
import { Link } from "react-router-dom";


class Welcome extends Component {
  state = {
    userEmail: "",
    weddingId: "",
    bride: "",
    partner: "",
    venue: "",
    weddingDate: ""
  }


  componentDidMount() {
    this.setState({userEmail: this.props.userEmail},
      () => this.getWeddingData())
  };

  getWeddingData = () => {
    API.getWedding(this.state.userEmail)
      .then(res => this.setState(
        {
          weddingId: res.data.weddingId,
          bride: res.data.bride,
          partner: res.data.partner,
          venue: res.data.venue,
          weddingDate: moment(res.data.weddingDate).format("DD / MM / YYYY")
        }
      ))
      .catch(err => console.log(err))
  }



  render() {
    return (
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
          <Link to="/wedding/photogallery">Photo Gallery</Link>
        </li>  
        <li className={window.location.pathname === "/wedding/taskmanager" ? "active" : ""}>
          <Link to="/wedding/taskmanager">Task Manager</Link>
        </li>
      </ul>
      </Nav>
      <WelcomePage
        bride={this.state.bride}
        partner={this.state.partner}
        weddingDate={this.state.weddingDate}
        venue={this.state.venue}
      />
    </div>
    );
  }
}

export default Welcome;
