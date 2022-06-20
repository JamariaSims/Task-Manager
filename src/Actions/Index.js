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

export const addInProgress = () => {
    
}
