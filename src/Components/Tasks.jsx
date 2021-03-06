import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

const FREE_TASK = "FREE_TASK";
const IN_PROGRESS = "IN_PROGRESS";
const COMPLETED_TASK = "COMPLETED_TASK";

function Tasks(props) {
    const { tasks, type } = props;
    return (
        <div>
            {tasks.length >= 1 ? (
                <div className="Tasks_Container">
                    {tasks.map((task, index) => {
                        return <Task task={task} key={task._id} />;
                    })}
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
