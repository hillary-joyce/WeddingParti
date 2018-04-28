import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = props => (
<div className="navBar">
  <ul className="navbar-links">
    <li>Task Manager</li>
    <li>PhotoGallery</li>
    <li>Calendar</li>
    <li className={window.location.pathname === "/wedding" ? "active" : ""}>
      <Link to="/wedding">Home</Link>
    </li>
  </ul>
  <img className="navabar-logo" src="/images/wedding_parti_logo1.png"/>
</div>
)

export default Nav;
