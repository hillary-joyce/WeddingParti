import React from "react";
import "./SignUpForm.css"

const SignUpForm = props => (
  <div className="sign-up-form">
    <form>
      <div className="row">
        <div className="six columns">
          <label>Name: </label>
          <input type="text" className="u-full-width" value={props.bride} onChange={props.handleInputChange} name="bride"/>
        </div>
        <div className="six columns">
          <label>Password: </label>
          <input className="u-full-width" type="password" value={props.password} onChange={props.handleInputChange} name="password"/>
        </div>
      </div>
      <div className="row">
        <div className="six columns">
          <label>Wedding Nickname: </label>
          <input type="text" className="u-full-width" value={props.weddingName} onChange={props.handleInputChange} name="weddingName"/>
        </div>
        <div className="six columns">
          <label>Users: </label>
          <input type="text" className="u-full-width" value={props.users} onChange={props.handleInputChange} name="users"/>
        </div>
      </div>
      <button className="sign-up-btn" onClick={props.addWedding}>Sign Up</button>
    </form>
  </div>
)
export default SignUpForm;
