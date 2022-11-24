import {
  Button,
  ButtonGroup,
  Checkbox,
  Paper,
  TextField,
  Alert,
} from "@mui/material";
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
    console.log(userInfo);
    event.preventDefault();
    props.loginToServer(userInfo);
  };

  const inputReset = (event) => {
    event.preventDefault();
    setUserInfo(initialState);
  };

  const onDemoLogin = (event) => {
    event.preventDefault();
    props.loginToServer({
      username: "JohnDoe",
      password: "Password123",
    });
  };

  return (
    <div className="LF">
      <Paper className="LF-Paper" elevation={4}>
        <form className="LF-Form">
          <div>
            <h1>Login to your account</h1>
            <p>Welcome back! Please enter your details.</p>
          </div>
          <section className="LF-S1">
            <div className="Error-Login" name="Error-Login">
              <Alert severity="error">Invalid username or password</Alert>
            </div>
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
            <div className="Error-Username" name="Error-Username">
              <Alert severity="error">
                Username must be more than 7 characters
              </Alert>
            </div>
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
            <div className="Error-Password" name="Error-Password">
              <Alert
                severity="error"
                className="Error-InvalidPassword"
                name="Error-Password"
              >
                Password must be more than 7 characters
              </Alert>
            </div>

            <div className="LF-S2">
              <div className="LF-S2-Checkbox">
                <Checkbox></Checkbox>
                <label>Remember for 30 days</label>
              </div>
              <a href="#">Forgot password</a>
              <p id="errorDisplay">{props.errorState}</p>
            </div>
          </section>
          <br></br>

          <ButtonGroup>
            <Button color="success" onClick={onInputSubmit}>
              Login
            </Button>
            <Button color="error" onClick={inputReset}>
              Cancel
            </Button>
          </ButtonGroup>
          <br />
          <br />
          <Button color="info" onClick={onDemoLogin}>
            Demo
          </Button>
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
    errorState: state.errorState,
  };
};
export default connect(mapStateToProps, { loginToServer })(LoginPage);
