import React, { Component } from "react";
import SignIn from "../../components/SignIn";
import SignInBtn from "../../components/SignInBtn";
import EventList from "../../components/EventList";
import AddCalendarEvent from "../../components/AddCalendarEvent";
import API from "../../utils/API";

//React Big Calendar imports and setup
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
Calendar.setLocalizer(Calendar.momentLocalizer(moment));


class Welcome extends Component {
  state = {
    weddingName: "",
    weddingId: "",
    startdate: "",
    enddate: "",
    title: "",
    events: []
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
      .then(res => this.setState({events: res.data.calendarDates}))
      .catch(err => console.log(err))
  };

  addCalendarDate = () => {
    API.addCalendarDates(this.state.weddingId,
      {
        start: this.state.startdate,
        end: this.state.enddate,
        title: this.state.title
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
        startdate = {this.state.startdate}
        enddate = {this.state.enddate}
        title = {this.state.title}
        addDate = {this.addCalendarDate}
      />
      <button onClick={this.showCalendarDates}>calndar</button>
      <div>
        <Calendar
          defaultDate={new Date()}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
        />
          <EventList>
          {this.state.events.map(date =>
          <p key={date.start}>{date.start} {date.title}</p>
          )}
          < /EventList>
      </div>
    </div>
    );
  }
}

export default Welcome;
