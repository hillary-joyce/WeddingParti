import React from "react";

const AddImageButton = props => (
  <form className="add-img-form">
  <div className="row">
    <div className="three columns">
      <label>Image URL </label>
      <input className="u-full-width" onChange={props.handleInputChange}
      value={props.imgurl} name="imgurl"/>
    </div>
    <div className="three columns">
      <label>Website URL </label>
      <input className="u-full-width" onChange={props.handleInputChange}
      value={props.url} name="url"/>
    </div>
    <div className="three columns">
      <label> Description </label>
      <input className="u-full-width" name="imgDescription"
      value={props.imgDescription} onChange={props.handleInputChange}/>
    </div>
    <div className="three columns">
      <button className="add-img" onClick={props.addImage}>Add Image</button>
    </div>
  </div>
  </form>
);

export default AddImageButton;
