import React from "react";

const Image = props => (
<div className="image-wrapper">
  <a href={props.url}>
    <img className="galleryImg"
    src={props.imgurl}
    alt="galleryimage"/>
  </a>
  <div className="img-description">{props.description}</div>
</div>
);

export default Image;
