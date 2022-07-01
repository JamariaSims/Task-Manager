import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT_START = "LOGOUT_START";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAIL = "LOGOUT_FAIL";

const LoginAction = (props) => (dispatch) => {
    const data = {
        username: props.username,
        password: props.password,
    };
    dispatch({ type: LOGIN_START });
    axios
        .post("", data)
        .then((response) => {
            console.log(response.data);
            dispatch({ type: LOGIN_SUCCESS, payload: response.data });
        })
        .catch((error) => {
            dispatch({
                type: LOGIN_FAIL,
                payload: error.response.data.message,
            });
        });
};

export const logoutAction = () => (dispatch) => {
    dispatch({ type: LOGOUT_START });
    axios
        .get("")
        .then((res) => {
            console.log(res);
            dispatch({ type: LOGOUT_SUCCESS });
        })
        .catch((err) => {
            console.log(err.response);
            dispatch({ type: LOGOUT_FAIL, payload: err.response.data.message });
        });
};
