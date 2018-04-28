import React from "react";

const SignUpForm = props => (
  <div className="sign-up-form">
    <label>Name: </label>
    <input value={props.bride} onChange={props.handleInputChange} name="bride"/>
    <label>Wedding Nickname: </label>
    <input value={props.weddingName} onChange={props.handleInputChange} name="weddingName"/>
    <label>Password: </label>
    <input value={props.password} onChange={props.handleInputChange} name="password"/>
    <label>Users: </label>
    <input value={props.users} onChange={props.handleInputChange} name="users"/>
    <button onClick={props.addWedding}>Sign Up</button>
  </div>
)
export default SignUpForm;
