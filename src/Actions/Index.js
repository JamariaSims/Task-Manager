const axios = require("axios");

export const ADD_TASK = "ADD_TASK";

export const addTask = (task) => {
    console.log(ADD_TASK, task);
    return { type: ADD_TASK, payload: task };
};

export const DELETE_TASK = "DELETE_TASK";

export const deleteTask = (id) => {
    console.log(DELETE_TASK, id);
    return { type: DELETE_TASK, payload: id };
};

export const COMPLETE_TASK = "COMPLETE_TASK";

export const completeTask = (id) => {
    console.log(COMPLETE_TASK, id);
    return { type: COMPLETE_TASK, payload: id };
};

export const ADD_IN_PROGRESS = "ADD_IN_PROGRESS";

export const addInProgress = () => {};

export const USERNAME_NOT_FOUND = "USERNAME_NOT_FOUND";
export const USERNAME_FOUND = "USERNAME_FOUND";
export const PASSWORD_INCORRECT = "PASSWORD_INCORRECT";
export const PASSWORD_CORRECT = "PASSWORD_CORRECT";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCEED = "LOGIN_SUCCEED";

export const FETCH_USER_DATA = "FETCH_USER_DATA";
export const FETCH_USER_DATA_FAILED = "FETCH_USER_DATA_FAILED";

export const fetchUserData = (username) => (dispatch) => {
    console.log(username);
    axios
        .get(`http://localhost:3000/api/tasks/user/${username}`)
        .then((res) => {
            console.log(res.data);
            return dispatch({
                type: FETCH_USER_DATA,
                payload: res.data,
            });
        })
        .catch((err) => {
            return dispatch({
                type: FETCH_USER_DATA_FAILED,
                payload: err.data,
            });
        });
};

export const loginToServer = (props) => (dispatch) => {
    console.log(props["username"]);
    axios
        .get(`http://localhost:3000/api/users/${props["username"]}`)
        .then((res) => {
            console.log(res.data.username);
            if (res.data.username !== null) {
                if (
                    res.data.username === props.username &&
                    res.data.password === props.password
                ) {
                    console.log("Username found and  password correct!");
                    return dispatch({
                        type: USERNAME_FOUND,
                        payload: res.data,
                    });
                }
            }
            console.log("Username not found!");
            return { type: USERNAME_NOT_FOUND };
        })
        .catch((err) => {
            console.log(err);
            return { type: USERNAME_NOT_FOUND };
        });
};

export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const ADD_ACCOUNT_FAILED = "ADD_ACCOUNT_FAILED";

export const createAccount = (userData) => {
    console.log(userData);
    axios({
        url: "http://localhost:3000/api/users",
        data: userData,
        method: "POST",
        mode: "no-cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": process.env.REACT_APP_API_URL,
            "Access-Control-Request-Headers": "Content-Type, Authorization",
        },
    })
        .then((req, res) => {
            console.log(userData);
            return { type: ADD_ACCOUNT, payload: userData };
        })
        .catch((err) => {
            return { type: ADD_ACCOUNT_FAILED };
        });
};
