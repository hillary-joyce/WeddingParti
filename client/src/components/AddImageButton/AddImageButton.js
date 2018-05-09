import React from "react";
import "./AddImageButton.css";

const AddImageButton = props => (
  <div className="add-img-wrapper">
    <h3>Add a New Image</h3>
    <form className="add-img-form">
    <div className="row">
      <div className="six columns">
        <label>Image URL </label>
        <input className="u-full-width" onChange={props.handleInputChange}
        value={props.imgurl} name="imgurl"/>
      </div>
      <div className="six columns">
        <label>Website URL </label>
        <input className="u-full-width" onChange={props.handleInputChange}
        value={props.url} name="url"/>
      </div>
    </div>
    <div className="row">
      <div className="ten columns">
        <label> Description </label>
        <input className="u-full-width" name="imgDescription"
        value={props.imgDescription} onChange={props.handleInputChange}/>
      </div>
      <div className="two columns">
        <button className="add-img" onClick={props.addImage}>Add Image</button>
      </div>
    </div>
  </form>
</div>
);

export default AddImageButton;
