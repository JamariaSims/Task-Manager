import React from "react";

function Task(props) {
  const { task } = props;

  console.log(props);
  return (
    <div>
      <h1>Task</h1>
      <p>{task.taskName}</p>
    </div>
  );
}

export default Task;
