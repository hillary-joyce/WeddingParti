import React, { Component } from "react";
import SignIn from "../../components/SignIn";
import SignInBtn from "../../components/SignInBtn";
import EventList from "../../components/EventList";
import AddCalendarEvent from "../../components/AddCalendarEvent";
import ImageGallery from "../../components/ImageGallery";
import AddImageButton from "../../components/AddImageButton";
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
    events: [],
    imgURL: "",
    imgDescription: "",
    photoGallery: []
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
      .then(res => this.showCalendarDates())
      .then(res => this.showImages())
      .catch(err => console.log(err))
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

  //Image Gallery Routes
  showImages = () => {
    API.getPhotos(this.state.weddingId)
      .then(res => this.setState({photoGallery: res.data.photoGallery}))
      .catch(err => console.log(err))
  };

  addImage = event => {
    event.preventDefault();
    API.addPhotos(this.state.weddingId,
      {
        url: this.state.imgURL,
        description: this.state.imgDescription
      }
    )
    .then(res => this.showImages())
    .catch(err => console.log(err))
  }
  render() {
    return (
    <div className="container">
      <SignIn
        value={this.state.weddingName}
        handleInputChange = {this.handleInputChange}
        handleFormSubmit = {this.handleFormSubmit}
      />
      <p>Wedding Id: {this.state.weddingId}</p>
      <div>
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

        <h1>Image Gallery</h1>
        <AddImageButton
          handleInputChange = {this.handleInputChange}
          imgURL = {this.state.imgURL}
          imgDescription = {this.state.imgDescription}
          addImage = {this.addImage}
        />
        <ImageGallery>
        {this.state.photoGallery.map(image =>
        <div className="img">
          <img src={image.url}></img>
          <p>{image.description}</p>
        </div>
        )}
        < /ImageGallery>
        <button onClick={this.showImages}>Show Images</button>
      </div>
    );
  }
}

export default Welcome;
