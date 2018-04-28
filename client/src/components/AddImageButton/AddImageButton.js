import React from "react";

const AddImageButton = props => (
  <form>
    <label>Picture URL </label>
    <input onChange={props.handleInputChange}
    value={props.imgURL} name="imgURL"/>
    <label> Description </label>
    <input name="imgDescription" value={props.imgDescription} onChange={props.handleInputChange}/>

    <button className="AddImg" onClick={props.addImage}>Add Image</button>
  </form>
);

export default AddImageButton;
