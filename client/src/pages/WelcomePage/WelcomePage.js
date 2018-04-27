import React, { Component } from "react";
import SignIn from "../../components/SignIn";
import SignInBtn from "../../components/SignInBtn";
import EventList from "../../components/EventList";
import AddCalendarEvent from "../../components/AddCalendarEvent";
import API from "../../utils/API";

class Welcome extends Component {
  state = {
    weddingName: "",
    weddingId: "",
    calendarDates: [],
    date: "",
    description: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getWedding(this.state.weddingName)
      .then(res => this.setState({weddingId: res.data._id}))
      .catch(err => console.log(err))
  };

  showCalendarDates = () => {
    API.getCalendarDates(this.state.weddingId)
      .then(res => this.setState({calendarDates: res.data.calendarDates}))
      .catch(err => console.log(err))
  };

  addCalendarDate = () => {
    console.log(this.state.date);
    console.log(this.state.description);
    API.addCalendarDates(this.state.weddingId,
      {
        date: this.state.date,
        description: this.state.description
      }
    )
    .then(res => this.showCalendarDates())
    .catch(err => console.log(err));
  }


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
      <p>Wedding Id: {this.state.weddingId}</p>
      <AddCalendarEvent
        handleInputChange = {this.handleInputChange}
        date = {this.state.date}
        description = {this.state.description}
        addDate = {this.addCalendarDate}
      />
      <button onClick={this.showCalendarDates}>calndar</button>
      <div>

          <EventList>
          {this.state.calendarDates.map(date =>
          <p key={date.date}>{date.date} {date.description}</p>
          )}
          < /EventList>

      </div>
    </div>
    );
  }
}

export default Welcome;
