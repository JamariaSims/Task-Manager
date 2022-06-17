import React from "react";
import { connect } from "react-redux";
import { completeTask, deleteTask } from "../Actions/Index";
import { Link } from "react-router-dom";
function Task(props) {
    const { task } = props;

    const { name, description, deadline, priority, id, status } = task;
    const onDelete = () => {
        props.deleteTask(id);
    };
    const onTaskComplete = () => {
        props.completeTask(id);
    };
    return (
        <div>
            <p>{name}</p>
            <p>{description}</p>
            <p>{deadline}</p>
            <p>{priority}</p>
            <p>{id}</p>
            <p>{status}</p>
            <div className="ButtonGroup">
                <button onClick={onDelete}>Delete</button>
                <Link to={`/Task/${task.id}`}>View</Link>
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
export default connect(mapStateToProps, { deleteTask, completeTask })(Task);
