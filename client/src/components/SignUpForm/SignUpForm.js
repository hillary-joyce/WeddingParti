import React from "react";
import "./SignUpForm.css"

const SignUpForm = props => (
  <div className="sign-up-form">
    <form>
      <p>Create a new account</p>
          <label>Your First Name: </label>
          <input type="text" className="u-full-width" value={props.bride} onChange={props.handleInputChange} name="bride"/>

          <label>Email: </label>
          <input className="u-full-width" type="text" value={props.email} onChange={props.handleInputChange} name="email"/>

          <label>Wedding Nickname: </label>
          <p>This is what your party will use to sign in. Can include letters, numbers, and punctuation</p>
          <input type="text" className="u-full-width" value={props.weddingName} onChange={props.handleInputChange} name="weddingName" placeholder= "AlexAndBen2019 etc."/>

          <label>Password: </label>
          <p>This is a shared password your party will use to sign in. Must be at least 7 characters, can include letters, numbers and punctuation</p>
          <input type="password" className="u-full-width" value={props.password} onChange={props.handleInputChange} name="password"/>

      <p> Tell Us More About Your Wedding </p>

          <label>Partners Name: </label>
          <input type="text" className="u-full-width" value={props.partner} onChange={props.handleInputChange} name="partner"/>

          <label>Wedding Date: </label>
          <input type="text" className="u-full-width" value={props.weddingDate} onChange={props.handleInputChange} name="weddingDate"/>

          <label>Venue/Location: </label>
          <input type="text" className="u-full-width" value={props.venue} onChange={props.handleInputChange} name="venue"/>

          <label>Invite Your Wedding Parti: </label>
          <p>Enter your partys emails, separated by commas</p>
          <textarea type="text" className="u-full-width" value={props.users} onChange={props.handleInputChange} name="users"/>
          <button className="sign-up-btn" onClick={props.addWedding}>Sign Up</button>
    </form>
  </div>
)
export default SignUpForm;
