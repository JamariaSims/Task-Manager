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
  const onInProgress = () => {};
  const onTaskComplete = () => {
    props.completeTask(id);
  };
  return (
    <div className="Task_Container">
      <p className="TC-Name">{name}</p>
      <p className="TC-Description">{description}</p>
      <div className="Task_Container-Status">
        <p>{status}</p>
        <p>{deadline}</p>
      </div>
      <div className="TC-ButtonGroup">
        <button className="TC-Button-" onClick={onDelete}>
          Delete
        </button>
        <Link className="TC-Button-" to={`/Task/${task.id}`}>
          View
        </Link>
        {status === "FREE_TASK" ? (
          <button className="TC-Button-" onClick={onTaskComplete}>
            In Progress
          </button>
        ) : status !== "COMPLETED_TASK" ? (
          <button className="TC-Button-" onClick={onTaskComplete}>
            Complete
          </button>
        ) : (
          <></>
        )}
      </div>
      <p className="TC-Priority">{priority}</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps, { deleteTask, completeTask })(Task);
