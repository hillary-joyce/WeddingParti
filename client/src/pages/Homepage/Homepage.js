import React, { Component } from "react";
import SignUpForm from "../../components/SignUpForm";
import Homepage from "../../components/Homepage";
import API from "../../utils/API";


class HomePage extends Component {
  state = {
    bride: "",
    email: "",
    users: "",
    partner: "",
    venue: "",
    weddingDate: ""
  };

  addWedding = event => {
    event.preventDefault()
    var users = (this.state.users.replace(/ /g,'').split(','));
    users.push(this.state.email)
    API.createWedding(
      {
        bride: this.state.bride,
        users: users,
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
      <Homepage>
      <SignUpForm
        bride={this.state.bride}
        email={this.state.email}
        users={this.state.users}
        partner={this.state.partner}
        venue={this.state.venue}
        handleInputChange={this.handleInputChange}
        addWedding={this.addWedding}
      />
      </Homepage>
    </div>
    )
  }
}

export default HomePage;
