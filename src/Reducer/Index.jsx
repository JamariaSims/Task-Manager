import axios, { Axios } from "axios";
import {
  ADD_ACCOUNT,
  ADD_ACCOUNT_FAILED,
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  FETCH_USER_DATA,
  USERNAME_FOUND,
  USERNAME_NOT_FOUND,
} from "../Actions/Index";

export const initialState = {
  username: "",
  tasks: [],
  isLoggedIn: false,
  errorState: "",
};

const Reducer = (state = initialState, action) => {
  const { tasks, completedTasks } = state;
  switch (action.type) {
    case ADD_ACCOUNT: {
      console.log("Adding user!");
      return { ...state, username: action.payload.username };
    }
    case ADD_ACCOUNT_FAILED: {
      return state;
    }
    case USERNAME_FOUND: {
      return {
        ...state,
        username: action.payload.username,
        _id: action.payload._id,
      };
    }
    case FETCH_USER_DATA: {
      const taskList = action.payload.filter((task) => {
        const { created_by } = task;
        console.log(task.created_by === state.username);
        return created_by === state.username;
      });

      return { ...state, tasks: taskList };
    }
    case USERNAME_NOT_FOUND: {
      return { ...state, errorState: "" };
    }
    case ADD_TASK: {
      return { ...state, tasks: [...tasks, action.payload] };
    }
    case DELETE_TASK: {
      const updatedTasks = tasks.filter((task) => {
        console.log(task, task._id, action.payload);
        return task._id !== action.payload;
      });
      console.log(updatedTasks);
      return { ...state, tasks: updatedTasks };
    }

    case COMPLETE_TASK: {
      const currentTask = tasks.find((task) => {
        return task._id === action.payload;
      });
      currentTask["status"] = "Complete";

      return state;
    }

    default:
      return state;
  }
};

export default Reducer;
