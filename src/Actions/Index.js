import fetchApiService from "../Services/fetchApiService";

const axios = require("axios");

/* ---------------------------------- LOGIN --------------------------------- */
export const USERNAME_NOT_FOUND = "USERNAME_NOT_FOUND";
export const USERNAME_FOUND = "USERNAME_FOUND";
export const loginToServer = (props) => (dispatch) => {
  fetchApiService(`GET`, `/users/${props.username}`)
    .then((res) => {
      if (props.password === res.data.password) {
        dispatch({ type: USERNAME_FOUND, payload: res.data });
      } else {
        console.log("incorrect password");
      }
    })
    .catch((err) => {
      console.log(err);
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
export const addTask = (task) => (dispatch) => {
  axios
    .post(`http://localhost:3000/api/tasks/`, task)
    .then((res) => {
      task = res.data;
      return dispatch({
        type: ADD_TASK,
        payload: task,
      });
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
/* ------------------------------- CHANGE TASK STATUS ------------------------------ */
export const CHANGE_TASK_STATUS = "CHANGE_TASK_STATUS";
const AVAILABLE = "available";
const IN_PROGRESS = "in_progress";
const COMPLETED = "completed";
const ARCHIVE = "archive";
export const changeTaskStatus = (task) => (dispatch) => {
  task.status === AVAILABLE
    ? (task.status = IN_PROGRESS)
    : task.status === IN_PROGRESS
    ? (task.status = COMPLETED)
    : (task.status = ARCHIVE);
  console.log(task, " Alert");
  console.log(task._id);
  fetchApiService("PUT", `/tasks/${task._id}`, task)
    .then((res) => {
      console.log(res);
      dispatch({ type: CHANGE_TASK_STATUS, payload: task });
    })
    .catch((err) => {
      console.log(err);
    });
};
