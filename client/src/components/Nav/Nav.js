import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "../../images/nav-logo.png";
import "./Nav.css";

const Nav = props => (
<div className="navBar">
  <Link to="/"><img className="navabar-logo" src={NavLogo} alt="wedding parti logo"/></Link>
  {props.children}
</div>
)

export default Nav;
