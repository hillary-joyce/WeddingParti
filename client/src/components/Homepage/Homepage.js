import React from "react";
import "./Homepage.css"

const Homepage = props => (
  <div className="homepage-header">
  </div>
  <div className="homepage-about">
  </div>
  <div className="homepage-signup-form">
    {props.children}
  </div>
)
