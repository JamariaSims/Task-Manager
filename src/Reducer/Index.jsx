import {
  ADD_ACCOUNT,
  ADD_ACCOUNT_FAILED,
  ADD_TASK,
  DELETE_TASK,
  FETCH_USER_DATA,
  USERNAME_FOUND,
  USERNAME_NOT_FOUND,
  CHANGE_TASK_STATUS,
} from "../Actions/Index";

export const initialState = {
  username: "",
  tasks: [],
  isLoggedIn: false,
  errorState: "",
};

const Reducer = (state = initialState, action) => {
  const { tasks } = state;
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
      };
    }
    case FETCH_USER_DATA: {
      const taskList = action.payload.filter((task) => {
        const { created_by } = task;
        console.log(task.created_by === state.username);
        return created_by === state.username;
      });

      return { ...state, tasks: taskList, isLoggedIn: true };
    }
    case USERNAME_NOT_FOUND: {
      return { ...state, errorState: "" };
    }
    case ADD_TASK: {
      return { ...state, tasks: [...tasks, action.payload] };
    }
    case CHANGE_TASK_STATUS: {
      const updatedTasks = tasks.filter((task) => {
        return task._id !== action.payload._id;
      });
      updatedTasks.push(action.payload);
      return { ...state, tasks: updatedTasks };
    }

    case DELETE_TASK: {
      const updatedTasks = tasks.filter((task) => {
        console.log(task, task._id, action.payload);
        return task._id !== action.payload;
      });
      console.log(updatedTasks);
      return { ...state, tasks: updatedTasks };
    }

    default:
      return state;
  }
};

export default Reducer;
