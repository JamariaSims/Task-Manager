import React, { useState } from "react";
import { connect } from "react-redux";
import { createAccount } from "../Actions/Index";

const initialState = {
  username: "",
  password: "",
  confirmedPassword: "",
};

function SignUpPage(props) {
  const [userInfo, setUserInfo] = useState(initialState);

  const onInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const onInputSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);
    props.createAccount(userInfo);
  };
  const onInputReset = (event) => {
    event.preventDefault();
    setUserInfo(initialState);
  };
  return (
    <form className="SignUp-Form" onSubmit={onInputSubmit}>
      <p id="Form-Headline">START FOR FREE</p>
      <h1>Create new account</h1>
      <p>
        Already A member? <a href="/Login">Login</a>
      </p>
      <label id="Form-Label" htmlFor="Form-Name">
        Username:
      </label>
      <input
        type={"text"}
        value={userInfo.username}
        placeholder="Username"
        onChange={onInputChange}
        name="username"
        id="username"
        required
      />
      <label htmlFor="Form-Description">Password:</label>
      <input
        type={"password"}
        value={userInfo.password}
        placeholder="Password"
        onChange={onInputChange}
        name="password"
        id="password"
        required
      />
      <label htmlFor="Form-Deadline">Confirm Password</label>
      <input
        type={"password"}
        value={userInfo.confirmedPassword}
        placeholder="Confirm Password"
        onChange={onInputChange}
        name="confirmedPassword"
        id="confirmedPassword"
        required
      />
      <nav>
        <button id="Button-SignUp" type="submit">
          Sign Up
        </button>
        <button id="Button-Cancel" type="reset" onClick={onInputReset}>
          Cancel
        </button>
      </nav>
    </form>
  );
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps, { createAccount })(SignUpPage);
