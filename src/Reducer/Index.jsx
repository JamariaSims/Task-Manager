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
            console.log(action.payload);
            return { ...state, username: action.payload.username };
        }
        case FETCH_USER_DATA: {
            console.log(action.payload);
            return { ...state, tasks: action.payload };
        }
        case USERNAME_NOT_FOUND: {
            return state;
        }
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
            // const currentTask = tasks.find((task) => {
            //     return task.id === action.payload;
            // });

            return state;
        }

        default:
            return state;
    }
};

export default Reducer;
