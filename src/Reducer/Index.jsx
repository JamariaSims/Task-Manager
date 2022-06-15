import { ADD_TASK, DELETE_TASK } from "../Actions/Index";

export const initialState = {
    tasks: [],
};

const Reducer = (state = initialState, action) => {
    const { tasks } = state;
    switch (action.type) {
        case ADD_TASK: {
            return { ...state, tasks: [...tasks, action.payload] };
        }
        case DELETE_TASK: {
            const updatedTasks = tasks.filter((task) => {
                return task.taskID !== action.payload;
            });
            return { ...state, tasks: updatedTasks };
        }
        default:
            return state;
    }
};

export default Reducer;
