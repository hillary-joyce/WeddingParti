import React from "react";
import "./Homepage.css"
import WeddingLogo from "../../images/wedding_parti_logo1.png";
import BridesmaidsBg from "../../images/bridesmaids_background.jpg";
import CalendarIcon from "../../images/icons/calendar.png";
import PhotoIcon from "../../images/icons/photo.png";
import ChecklistIcon from "../../images/icons/checklist.png";

var aboutBackground = {
  fontSize: '2.5rem',
  padding: '5% 15%',
  color: 'white',
  height: '40vh',
  backgroundImage: `linear-gradient(
     rgba(105, 143, 126, 0.70),
     rgba(105, 143, 126, 0.70)
   ),url(${BridesmaidsBg})`,
  backgroundSize: 'cover'
}
const Homepage = props => (
<div>
  <div className="homepage-header">
    <img className="homepage-header-img" src={WeddingLogo} alt="wedding parti logo"/>
    <h1 className="homepage-header-heading">Wedding Parti</h1>
  </div>
  <div className="homepage-about" style={aboutBackground}>
    <h2 className="homepage-about-heading">About Wedding Parti </h2>
    <p>Wedding Parti is the easiest way to connect and share information with your bridesmaids
    or groomsmen. No more scrolling through texts or emails, in one spot your parti can find
    upcoming event dates, share photos for inspiration, and manage to-dos.</p>
  </div>
  <div className="homepage-features">
    <h2 className = "homepage-features-heading">Features</h2>
    <div className="calendar">
      <img src={CalendarIcon} alt="calendar icon"/>
      <h3>Calendar</h3>
      <p> Our calendar feature allows parti-ers to see upcoming events at a glance, and add new events as they come up</p>
    </div>
    <div className="photo-gallery">
      <img src={PhotoIcon} alt="imagegallery icon"/>
      <h3>Photo Gallery</h3>
      <p> Save inspiration bouquets, dreses and more in one place with our photo gallery</p>
    </div>
    <div className="task-board">
      <img src={ChecklistIcon} alt="checklist icon"/>
      <h3>Task Board</h3>
      <p> With project boards and an easy-to-use interface, your parti can organize
       of any outing, shower, or event</p>
    </div>
  </div>
  <div className="homepage-signup-form">
    <h2 className="homepage-signup-form-heading"> Sign Up For Wedding Parti</h2>
    {props.children}
  </div>
</div>
)

export default Homepage;
