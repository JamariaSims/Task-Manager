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
        <div className="Task_Container">
            <p id="TAG-ProjectName">Project Name:</p>
            <p className="TC-Name">{name}</p>
            <p id="TAG-Description">Description:</p>
            <p className="TC-Description">{description}</p>
            <div className="Task_Container-Status">
                <p>{status}</p>
                <p className="TC-Priority">{priority}</p>
                <p>{deadline}</p>
            </div>
            <div className="TC-ButtonGroup">
                <button className="TC-Button-" onClick={onDelete}>
                    Delete
                </button>
                <Link className="TC-Button-" to={`/Task/${task.id}`}>
                    View
                </Link>
                <button className="TC-Button-" onClick={onTaskComplete}>
                    Complete
                </button>
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
