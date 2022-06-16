import { ADD_TASK, DELETE_TASK, VIEW_TASK } from "../Actions/Index";
import { dummyTasks } from "../Data/TasksDummyData";

export const initialState = {
  tasks: dummyTasks,
  completedTasks: [],
  selectedTask: null,
};

const Reducer = (state = initialState, action) => {
  const { tasks } = state;
  switch (action.type) {
    case ADD_TASK: {
      return { ...state, tasks: [...tasks, action.payload] };
    }
    case DELETE_TASK: {
      const updatedTasks = tasks.filter((task) => {
        return task.id !== action.payload;
      });
      return { ...state, tasks: updatedTasks };
    }

    case VIEW_TASK: {
      const currentTask = tasks.map((task) => {
        return task.id === action.payload;
      });

      return { ...state, selectedTask: currentTask };
    }
    default:
      return state;
  }
};

export default Reducer;
