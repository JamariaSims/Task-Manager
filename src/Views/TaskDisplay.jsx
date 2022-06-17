import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { completeTask, deleteTask } from "../Actions/Index";

function TaskDisplay(props) {
    const { tasks } = props;

    let { id } = useParams();

    let currentTask = tasks.find((task) => {
        console.log(task, id, task.id == id);
        return task.id == id;
    });
    const onDelete = () => {
        props.deleteTask(id);
    };
    const onTaskComplete = () => {
        currentTask.status = "Completed";
        props.completeTask(id);
    };
    const onTaskEdit = () => {
        props.completeTask(id);
    };

    return (
        <div>
            <div className="Task_Container">
                <p>{currentTask.name}</p>
                <p>{currentTask.description}</p>
                <p>{currentTask.deadline}</p>
                <p>{currentTask.priority}</p>
                <p>{currentTask.id}</p>
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
