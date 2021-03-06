import React, { Component } from "react";
import EventList from "../../components/EventList";
import AddCalendarEvent from "../../components/AddCalendarEvent";
import API from "../../utils/API";
import Nav from "../../components/Nav";
import CalendarContainer from "../../components/Calendar";
import Event from "../../components/Event";
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
    time: "",
    location: "",
    events: [],
    weddingId: ""
  }

  componentDidMount() {
    this.setState({weddingId: this.props.weddingId},
      () => this.showCalendarDates())
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  };

  showCalendarDates = () => {
    API.getCalendarDates(this.state.weddingId)
      .then(res => setTimeout(function() {
        this.sortCalendarDates(res.data.calendarDates)
        console.log(res.data.calendarDates);
      }.bind(this), 300)
    )
      .catch(err => console.log(err))
  };

  sortCalendarDates = (tempEvents) => {
    let events = tempEvents.sort(function(a,b){
      var c = new Date(a.start);
      var d = new Date(b.start);
      return c-d;
    })
    this.setState({events: events})
  }

  addCalendarDate = event => {
    event.preventDefault();
    API.addCalendarDates(this.state.weddingId,
      {
        start: this.state.startdate,
        end: this.state.enddate,
        title: this.state.title,
        location: this.state.location,
        time: this.state.time
      }
    )
    .then(res => this.setState(
      {
        startdate: "",
        enddate: "",
        title: "",
        location: "",
        time: ""
      }, this.showCalendarDates()
    ))
    .catch(err => console.log(err));
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
            <Link to="/wedding/photogallery">Image Gallery</Link>
          </li>
          <li className={window.location.pathname === "/wedding/taskmanager" ? "active" : ""}>
            <Link to="/wedding/taskmanager">Task Manager</Link>
          </li>
        </ul>
      </Nav>
      <CalendarContainer>
      <Calendar
        defaultDate={new Date()}
        defaultView="month"
        events={this.state.events}
        style={{ height: "75vh" }}
      />
        <EventList>
        {this.state.events.map(date =>
          <Event
            key={date.start}
            date={moment(date.start).format("DD")}
            month={moment(date.start).format("MMM")}
            fulldate={moment(date.start).format("MM / DD / YYYY")}
            time={date.time}
            location={date.location}
            description={date.title}
          />
        )}
        < /EventList>
        <AddCalendarEvent
          handleInputChange = {this.handleInputChange}
          startdate = {this.state.startdate}
          enddate = {this.state.enddate}
          time = {this.state.time}
          location = {this.state.location}
          title = {this.state.title}
          addDate = {this.addCalendarDate}
        />
      </CalendarContainer>
    </div>
  )
}
}

export default CalendarPage;
