import { ADD_TASK, COMPLETE_TASK, DELETE_TASK } from "../Actions/Index";
import { dummyTasks } from "../Data/TasksDummyData";

export const initialState = {
    tasks: dummyTasks,
    completedTasks: [],
};

const Reducer = (state = initialState, action) => {
    const { tasks, completedTasks } = state;
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

        case COMPLETE_TASK: {
            const currentTask = tasks.find((task) => {
                return task.id === action.payload;
            });

            return {
                ...state,
                completedTasks: [...completedTasks, currentTask],
            };
        }

        default:
            return state;
    }
};

export default Reducer;
