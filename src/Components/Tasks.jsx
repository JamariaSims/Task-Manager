import React from "react";
import { connect } from "react-redux";
import Task from "./Task";

function Tasks(props) {
    const { tasks } = props;
    return (
        <div>
            {tasks.length >= 1 ? (
                <div className="Tasks_Container">
                    {tasks.map((task, index) => {
                        return (
                            <div key={task.id}>
                                <Task task={task} />
                            </div>
                        );
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
