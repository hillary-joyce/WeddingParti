import React from "react";
import "./Homepage.css"

const Homepage = props => (
<div>
  <div className="homepage-header">
    <img className="homepage-header-img" src="./images/wedding_parti_logo1.png"/>
    <h1 className="homepage-header-heading">Wedding Parti</h1>
  </div>
  <div className="homepage-about">
    <h2 className="homepage-about-heading">About Wedding Parti </h2>
    <p>Wedding Parti is the perfect platform for your bridesmaids or groomsmen to get all the
    infomation they need for you wedding. In one place they can find an events calendar, photo gallery
    with inspiration, and a task manager so they can keep track of things that need to be done.
    You love your friends, and theyll love you for making thier experience so easy with Wedding Parti</p>
  </div>
  <div className="homepage-features">
    <h2 className = "homepage-features-heading">Features</h2>
    <div className="calendar">
      <h3>Calendar</h3>
      <p> Our calendar feature allows parti-ers to see upcoming events at a glance, and add new events as they come up</p>
    </div>
    <div className="photo-gallery">
      <h3>Photo Gallery</h3>
      <p> Save inspiration bouquets, dreses and more in one place with our photo gallery</p>
    </div>
    <div className="task-manager">
      <h3>Task Manager</h3>
      <p> With project boards and an easy-to-use interface, our task manager will help your parti stay organized and on top
       of any party, shower, or planning event</p>
    </div>
  </div>
  <div className="homepage-signup-form">
    {props.children}
  </div>
</div>
)

export default Homepage;
