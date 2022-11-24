import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { completeTask, deleteTask } from "../Actions/Index";

function TaskDisplay(props) {
  const { tasks } = props;

  let { _id } = useParams();

  let currentTask = tasks.find((task) => {
    console.log(task, _id, task._id === _id);
    return task._id === _id;
  });
  const onDelete = () => {
    props.deleteTask(_id);
  };
  const onTaskComplete = () => {
    currentTask.status = "Completed";
    props.completeTask(_id);
  };
  const onTaskEdit = () => {
    props.completeTask(_id);
  };

  return (
    <div>
      <div className="Task_Container">
        <p>{currentTask.name}</p>
        <p>{currentTask.description}</p>
        <p>{currentTask.deadline}</p>
        <p>{currentTask.priority}</p>
        <p>{currentTask._id}</p>
        <Link to={`/`} onClick={onDelete}>
          Delete
        </Link>
        <button onClick={onTaskEdit}>Edit</button>
        <button onClick={onTaskComplete}>Complete</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps, { deleteTask, completeTask })(
  TaskDisplay
);
