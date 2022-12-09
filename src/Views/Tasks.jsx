import { TaskTwoTone } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Task from "../Components/Task";

function Tasks(props) {
  const { tasks } = props;
  console.log(tasks);
  const availableContainer = [];
  const inProgressContainer = [];
  const completedContainer = [];
  tasks.map((task) => {
    if (task.status === "available") {
      return availableContainer.push(task);
    } else if (task.status === "in_progress") {
      return inProgressContainer.push(task);
    } else if (task.status === "completed") {
      return completedContainer.push(task);
    }
    return task;
  });
  return (
    <div>
      {tasks.length >= 1 ? (
        <div className="Tasks_Container">
          <div className="available_Container">
            <p className="Center">Available</p>
            {availableContainer.map((currTask) => {
              return <Task task={currTask} key={currTask._id} />;
            })}
          </div>
          <div className="inProgress_Container">
            <p className="Center">In Progress</p>
            {inProgressContainer.map((currTask) => {
              return <Task task={currTask} key={currTask._id} />;
            })}
          </div>
          <div className="completed_Container">
            <p className="Center">Completed</p>
            {completedContainer.map((currTask) => {
              return <Task task={currTask} key={currTask._id} />;
            })}
          </div>
        </div>
      ) : (
        <h1>No Data</h1>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps)(Tasks);
