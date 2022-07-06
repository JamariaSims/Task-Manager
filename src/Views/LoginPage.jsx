import { Label } from "@mui/icons-material";
import { Button, ButtonGroup, Checkbox, Paper, TextField } from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { loginToServer } from "../Actions/Index";

const initialState = {
  username: "",
  password: "",
};

function LoginPage(props) {
  const [userInfo, setUserInfo] = useState(initialState);

  const onInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const onInputSubmit = (event) => {
    event.preventDefault();
    props.loginToServer(userInfo);
  };
  const onInputReset = (event) => {
    event.preventDefault();
    setUserInfo(initialState);
  };
  return (
    <div className="LF">
      <Paper className="LF-Paper" elevation={4}>
        <form className="LF-Form" onSubmit={onInputSubmit}>
          <h1>Login to your account</h1>
          <p>Welcome back! Please enter your details.</p>
          <section className="LF-S1">
            <label>Username</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type={"text"}
              value={userInfo.username}
              onChange={onInputChange}
              name="username"
              required
            />
            <label>Password</label>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type={"password"}
              value={userInfo.password}
              onChange={onInputChange}
              name="password"
              required
            />
            <div className="LF-S2">
              <div className="LF-S2-Checkbox">
                <Checkbox></Checkbox>
                <label>Remember for 30 days</label>
              </div>
              <a href="#">Forgot password</a>
            </div>
          </section>

          <br></br>

          <ButtonGroup>
            <Button color="success" onClick={onInputSubmit}>
              Login
            </Button>
            <Button color="error">Cancel</Button>
          </ButtonGroup>
        </form>
        <p>
          Don't have an account? <a href="/SignUp">Sign Up</a>
        </p>
        <br></br>
      </Paper>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps, { loginToServer })(LoginPage);
