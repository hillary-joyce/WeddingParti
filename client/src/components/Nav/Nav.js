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
      <Link to="/wedding/photogallery">Photo Gallery</Link>
    </li>
    <li className={window.location.pathname === "/wedding/calendar" ? "active" : ""}>
      <Link to="/wedding/calendar">Calendar</Link>
    </li>
    <li className={window.location.pathname === "/wedding" ? "active" : ""}>
      <Link to="/wedding">Home</Link>
    </li>
  </ul>
  <Link to="/"><img className="navabar-logo" src="/images/wedding_parti_logo1.png"/></Link>
</div>
)

export default Nav;
