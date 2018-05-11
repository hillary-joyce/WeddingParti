import React from "react";
import "./WelcomePage.css"
import ChampangeIcon from "../../images/icons/champagne-glasses.png";

const WelcomePage = props => (
<div className="container welcome-page">
  <h1>{props.bride} and {props.partner}</h1>
  <img className="champagne-icon" src={ChampangeIcon} alt="champagne icon"/>
  <h2>{props.weddingDate}</h2>
  <h2>{props.venue}</h2>
</div>
)

export default WelcomePage;
