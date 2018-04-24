import React from "react";

const Image = props => (
  <img className="galleryImg" src={props.url} value={props.imageId}/>
);

export default Image;
