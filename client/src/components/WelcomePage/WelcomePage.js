import React from "react";
import "./WelcomePage.css"

const WelcomePage = props => (
<div className="container welcome-page">
  <h1>{props.bride} and {props.partner}</h1>
  <img className="heart-icon" src="images/icons/champagne-glasses.png" alt="heart icon"/>
  <h2>{props.weddingDate}</h2>
  <h2>{props.venue}</h2>
</div>
)

export default WelcomePage;
