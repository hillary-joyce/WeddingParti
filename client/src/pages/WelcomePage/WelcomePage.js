import React, { Component } from "react";
import SignIn from "../../components/SignIn";
import SignInBtn from "../../components/SignInBtn"
import API from "../../utils/API";

class Welcome extends Component {
  state = {
    weddingName: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.weddingName);
  };

  render() {
    return (
    <div>
      <SignIn
        value={this.state.weddingName}
        onChange={this.handleInputChange}
        name="weddingName"
      />
      <SignInBtn
        onClick={this.handleFormSubmit}
      />
    </div>
    );
  }
}

export default Welcome;
