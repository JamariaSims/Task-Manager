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
            <p>{task.taskId}</p>
            <div className="ButtonGroup">
                <button>Delete</button>
                <button>View</button>
                <button>Complete</button>
            </div>
        </div>
    );
}

export default Task;
