import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = props => (
<div className="navBar">
  {props.children}
  <Link to="/"><img className="navabar-logo" src="/images/wedding_parti_logo1.png"/></Link>
</div>
)

export default Nav;
