import React from "react";

function Task(props) {
    const { task } = props;

    console.log(props);
    return (
        <div>
            <h1>Task</h1>
            <p>{task.taskName}</p>
            <p>{task.taskDescription}</p>
            <p>{task.taskDeadline}</p>
            <p>{task.taskPriority}</p>
        </div>
    );
}

export default Task;
