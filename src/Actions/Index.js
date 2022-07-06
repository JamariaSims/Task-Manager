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
