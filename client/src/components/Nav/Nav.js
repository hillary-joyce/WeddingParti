import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = props => (
<div className="navBar">
  <Link to="/"><img className="navabar-logo" src="/images/nav-logo.png"/></Link>
  {props.children}
</div>
)

export default Nav;
