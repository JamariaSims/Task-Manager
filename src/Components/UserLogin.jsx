import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../Actions/Index";

import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const initialState = {
    username: "",
    password: "",
    confirmedPassword: "",
    userID: uuidv4(),
};
function UserLogin(props) {
    const [userInfo, setUserInfo] = useState(initialState);

    const onInputChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setUserInfo({ ...userInfo, [name]: value });
    };
    const onInputSubmit = (event) => {
        event.preventDefault();
    };
    const onInputReset = () => {};
    return (
        <form className="SignUp-Form" onSubmit={onInputSubmit}>
            <label htmlFor="Form-Name">Username:</label>
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
            <button type="submit">Sign Up</button>
            <button type="reset" onClick={onInputReset}>
                Cancel
            </button>
            <a href="/Login">Login</a>
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    };
};
export default connect(mapStateToProps, { addTask })(UserLogin);
