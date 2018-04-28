import React, { Component } from "react";
import SignUpForm from "../../components/SignUpForm"
import API from "../../utils/API"

class HomePage extends Component {
  state = {
    weddingName: "",
    password: "",
    bride: "",
    users: ""
  };

  addWedding = () => {
    API.createWedding(
      {
        weddingName: this.state.weddingName,
        password: this.state.password,
        bride: this.state.bride,
        users: this.state.users
      }
      )
      .then(console.log("wedding created!"))
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
      <SignUpForm
        bride={this.state.bride}
        password={this.state.password}
        weddingName={this.state.weddingName}
        users={this.state.users}
        handleInputChange={this.handleInputChange}
        addWedding={this.addWedding}
      />
    )
  }
}

export default HomePage;
