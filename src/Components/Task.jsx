import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../Actions/Index";

function Task(props) {
    const { task } = props;
    const { name, description, deadline, priority, id } = task;
    const onDelete = () => {
        props.deleteTask(id);
    };
    return (
        <div>
            <h1>Task</h1>
            <p>{name}</p>
            <p>{description}</p>
            <p>{deadline}</p>
            <p>{priority}</p>
            <p>{id}</p>
            <div className="ButtonGroup">
                <button onClick={onDelete}>Delete</button>
                <button>View</button>
                <button>Complete</button>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    };
};
export default connect(mapStateToProps, { deleteTask })(Task);
