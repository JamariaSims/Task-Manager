/*
    Form Control
    Add Task
    Delete Task
    View Task

*/

export const ADD_TASK = "ADD_TASK";

export const addTask = (task, tasks) => {
  task.id = tasks.length;
  return { type: ADD_TASK, payload: task };
};

export const DELETE_TASK = "DELETE_TASK";

export const deleteTask = (id) => {
  return { type: DELETE_TASK, payload: id };
};

export const VIEW_TASK = "VIEW_TASK";

export const viewTask = (id) => {
  return { type: VIEW_TASK, payload: id };
};
