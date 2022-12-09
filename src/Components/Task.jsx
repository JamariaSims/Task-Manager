import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { changeTaskStatus, completeTask, deleteTask } from "../Actions/Index";
import { Link } from "react-router-dom";
import { ButtonGroup } from "@mui/material";
import fetchApiService from "../Services/fetchApiService";

function Task(props) {
  const { task } = props;
  const { name, description, deadline, priority, _id, status } = task;

  const onDelete = (event) => {
    event.preventDefault();
    props.deleteTask(_id);
  };
  const changeStatus = (event) => {
    event.preventDefault();
    console.log(task);
    props.changeTaskStatus(task);
  };
  return (
    <div className="Task_Container" id={task.id} key={task._id}>
      <div className="TC-MiniBar">
        <p className="TC-Priority">{priority}</p>
        <p className="TC-Status">{status}</p>
      </div>

      <p className="TC-Name">{name}</p>
      <p className="TC-Description">{description}</p>

      <p>{deadline}</p>
      <form>
        <div className="Button-Group">
          <button className="TC-Button-1" onClick={onDelete}>
            Delete
          </button>
          <Link className="TC-Button-2" to={`/Task/${task._id}`}>
            <p>View</p>
          </Link>
          {task.status === "available" ? (
            <button
              className="TC-Button-3"
              onClick={changeStatus}
              type="submit"
            >
              In Progress
            </button>
          ) : task.status === "in_progress" ? (
            <button
              className="TC-Button-3"
              onClick={changeStatus}
              type="submit"
            >
              Completed
            </button>
          ) : (
            <button
              className="TC-Button-3"
              onClick={changeStatus}
              type="submit"
            >
              Archive
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps, { deleteTask, changeTaskStatus })(Task);
