import React from "react";

const SignIn = props => (
  <form>
    <label>Wedding Name: </label>
    <input className="sign-in" value={props.weddingName} onChange={props.handleInputChange} name="weddingName" />
    <button className="button-primary" onClick={props.handleFormSubmit}>
      Sign In
    </button>
  </form>
)

export default SignIn;
