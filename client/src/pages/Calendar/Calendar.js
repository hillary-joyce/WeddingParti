import React, { Component } from "react";
import EventList from "../../components/EventList";
import AddCalendarEvent from "../../components/AddCalendarEvent";
import API from "../../utils/API";
import Nav from "../../components/Nav"
import { Link } from "react-router-dom";

//React Big Calendar imports and setup
import Calendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
Calendar.setLocalizer(Calendar.momentLocalizer(moment));

class CalendarPage extends Component {
  state = {
    startdate: "",
    enddate: "",
    title: "",
    events: [],
    weddingId: ""
  }

  componentDidMount() {
    console.log(this.props.weddingId);
    this.setState({weddingId: this.props.weddingId},
      () => this.showCalendarDates())
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  //Calendar routes
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
      <Nav>
        <ul className="navbar-links">
          <li className={window.location.pathname === "/wedding/taskmanager" ? "active" : ""}>
            <Link to="/wedding/taskmanager">Task Manager</Link>
          </li>
          <li className={window.location.pathname === "/wedding/photogallery" ? "active" : ""}>
            <Link to="/wedding/photogallery">Photo Gallery</Link>
          </li>
          <li className={window.location.pathname === "/wedding/calendar" ? "active" : ""}>
            <Link to="/wedding/calendar">Calendar</Link>
          </li>
          <li className={window.location.pathname === "/wedding" ? "active" : ""}>
            <Link to="/wedding">Home</Link>
          </li>
        </ul>
      </Nav>
      <h1>Upcoming Events</h1>
      <Calendar
        defaultDate={new Date()}
        defaultView="month"
        events={this.state.events}
        style={{ height: "50vh" }}
      />
        <EventList>
        {this.state.events.map(date =>
        <p key={date.start}>{date.start} {date.title}</p>
        )}
        < /EventList>
        <AddCalendarEvent
          handleInputChange = {this.handleInputChange}
          startdate = {this.state.startdate}
          enddate = {this.state.enddate}
          title = {this.state.title}
          addDate = {this.addCalendarDate}
        />
    </div>
  )
}
}

export default CalendarPage;
