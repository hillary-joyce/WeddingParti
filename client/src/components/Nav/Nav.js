import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => (
<div className="navBar">
  <ul className="navbar-links">
    <li className={window.location.pathname === "/wedding/taskmanager" ? "active" : ""}>
      <Link to="/wedding/taskmanager">Task Manager</Link>
    </li>
    <li className={window.location.pathname === "/wedding/photogallery" ? "active" : ""}>
      <Link to="/contact/photogallery">Photo Gallery</Link>
    </li>
    <li className={window.location.pathname === "/wedding/calendar" ? "active" : ""}>
      <Link to="/wedding/calendar">Calendar</Link>
    </li>
    <li className={window.location.pathname === "/contact/learn" ? "active" : ""}>
      <Link to="/wedding">Home</Link>
    </li>
  </ul>
  <img className="navabar-logo" src="/images/wedding_parti_logo1.png"/>
</div>
)

export default Nav;
