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

export const loginToServer = (userData) => {
    console.log(userData);
    axios
        .get(
            `https://dreamengine-task-manager-api.herokuapp.com/api/users/${userData.username}`
        )
        .then((res) => {
            console.log(res.body);
            if (res.body !== null) {
                if (
                    res.body.username === userData.username &&
                    res.body.password === userData.password
                ) {
                    return { type: USERNAME_FOUND, payload: res.body };
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
