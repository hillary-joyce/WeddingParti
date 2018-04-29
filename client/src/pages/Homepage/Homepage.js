import React, { Component } from "react";
import SignUpForm from "../../components/SignUpForm";
import API from "../../utils/API";
import Nav from "../../components/Nav";


class HomePage extends Component {
  state = {
    weddingName: "",
    password: "",
    bride: "",
    email: "",
    users: "",
    partner: "",
    venue: "",
    weddingDate: ""
  };

  addWedding = event => {
    event.preventDefault()
    API.createWedding(
      {
        weddingName: this.state.weddingName,
        password: this.state.password,
        bride: this.state.bride,
        email: this.state.email,
        users: this.state.users.replace(/ /g,'').split(','),
        partner: this.state.partner,
        venue: this.state.venue,
        weddingDate: this.state.weddingDate
      }
      )
      .then(console.log("wedding created!"))
      .then(this.setState({weddingName: "", password: "", bride: "", email: "",
        users: "", partner: "", venue: "", weddingDate: ""
      }))
      .catch(err => console.log(err))
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return(
    <div>
      <SignUpForm
        weddingName={this.state.weddingName}
        password={this.state.password}
        bride={this.state.bride}
        email={this.state.email}
        users={this.state.users}
        partner={this.state.partner}
        venue={this.state.venue}
        handleInputChange={this.handleInputChange}
        addWedding={this.addWedding}
      />
    </div>
    )
  }
}

export default HomePage;
