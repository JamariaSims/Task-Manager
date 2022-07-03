import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../Actions/Index";

import { v4 as uuidv4 } from "uuid";

const initialState = {
    username: "",
    password: "",
};

function LoginPage() {
    const [userInfo, setUserInfo] = useState(initialState);

    const onInputChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]: value });
    };
    const onInputSubmit = (event) => {
        event.preventDefault();
    };
    const onInputReset = (event) => {
        event.preventDefault();
        setUserInfo(initialState);
    };
    return (
        <form className="Login-Form" onSubmit={onInputSubmit}>
            <h1>Login to your account</h1>
            <p>
                Create a account? <a href="/SignUp">Sign Up</a>
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
            <nav>
                <button id="Button-Login" type="submit">
                    Login
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
export default connect(mapStateToProps, { addTask })(LoginPage);
