import React from "react";
import "./Image.css";

const Image = props => (
<div className="image-wrapper">
  <a className="image-link" href={props.url} target="_blank">
    <img className="galleryImg"
    src={props.imgurl}
    alt="galleryimage"/>
  </a>
  <div className="img-description">{props.description}</div>
</div>
);

export default Image;
