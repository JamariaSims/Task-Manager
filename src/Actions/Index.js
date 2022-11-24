const axios = require("axios");

/* ---------------------------------- LOGIN --------------------------------- */
export const USERNAME_NOT_FOUND = "USERNAME_NOT_FOUND";
export const USERNAME_FOUND = "USERNAME_FOUND";
export const loginToServer = (props) => (dispatch) => {
  axios
    .get(`http://localhost:3000/api/users/${props["username"]}`)
    .then((res) => {
      console.log(res.data.username);
      if (res.data.username !== null) {
        if (
          res.data.username === props.username &&
          res.data.password === props.password
        ) {
          console.log(`Username found and password correct!`);
          return dispatch({
            type: USERNAME_FOUND,
            payload: res.data,
          });
        }
      }
      console.log("Password incorrect!");
      return { type: PASSWORD_INCORRECT };
    })
    .catch((err) => {
      console.log(err);
      return { type: USERNAME_NOT_FOUND };
    });
};
/* ----------------------------- CREATE ACCOUNT ----------------------------- */
export const ADD_ACCOUNT = "ADD_ACCOUNT";
export const ADD_ACCOUNT_FAILED = "ADD_ACCOUNT_FAILED";
export const PASSWORD_INCORRECT = "PASSWORD_INCORRECT";
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
/* ------------------------------- FETCH DATA ------------------------------- */
export const FETCH_USER_DATA = "FETCH_USER_DATA";
export const FETCH_USER_DATA_FAILED = "FETCH_USER_DATA_FAILED";
export const fetchUserData = (username) => (dispatch) => {
  console.log(username);
  axios
    .get(`http://localhost:3000/api/tasks/`)
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
/* -------------------------------- ADD TASK -------------------------------- */
export const ADD_TASK = "ADD_TASK";
export const addTask = (task) => {
  console.log(task);
  axios
    .post(`http://localhost:3000/api/tasks/`, task)
    .then((res) => {
      return {
        type: ADD_TASK,
        payload: task,
      };
    })
    .catch((err) => {
      console.log(err);
    });
};
/* ------------------------------- DELETE TASK ------------------------------ */
export const DELETE_TASK = "DELETE_TASK";
export const deleteTask = (id) => {
  axios
    .delete(`http://localhost:3000/api/tasks/${id}`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(DELETE_TASK, id);
  return { type: DELETE_TASK, payload: id };
};
/* ------------------------------ COMPLETE TASK ----------------------------- */
export const COMPLETE_TASK = "COMPLETE_TASK";
export const completeTask = (id) => {
  console.log(COMPLETE_TASK, id);
  return { type: COMPLETE_TASK, payload: id };
};

export const PASSWORD_CORRECT = "PASSWORD_CORRECT";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCEED = "LOGIN_SUCCEED";
