import React from "react";
import "./SignUpForm.css"

const SignUpForm = props => (
  <div className="sign-up-form container">
      <div className="row">
        <div className="six columns">
          <label>First Name: </label>
          <input type="text" className="u-full-width" value={props.bride} onChange={props.handleInputChange} name="bride"/>
        </div>
        <div className="six columns">
          <label>Email Address: </label>
          <input className="u-full-width" type="text" value={props.email} onChange={props.handleInputChange} name="email"/>
        </div>
      </div>

      <p> Tell Us More About Your Wedding </p>
      <div className="row">
        <div className="four columns">
          <label>Partners First Name: </label>
          <input type="text" className="u-full-width" value={props.partner} onChange={props.handleInputChange} name="partner"/>
        </div>
        <div className="four columns">
          <label>Wedding Date: </label>
          <input type="text" className="u-full-width" value={props.weddingDate} onChange={props.handleInputChange} name="weddingDate"/>
        </div>
        <div className="four columns">
          <label>Location: </label>
          <input type="text" className="u-full-width" value={props.venue} onChange={props.handleInputChange} name="venue"/>
        </div>
      </div>
        <p>Invite Your Wedding Parti: </p>
          <label>Enter your partys email addresses, separated by commas</label>
          <input type="text" className="u-full-width" value={props.users} onChange={props.handleInputChange} name="users"/>
          <button className="sign-up-btn" onClick={props.addWedding}>Sign Up</button>
  </div>
)
export default SignUpForm;
