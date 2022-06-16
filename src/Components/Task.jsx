import React from "react";
import { connect } from "react-redux";
import { completeTask, deleteTask, viewTask } from "../Actions/Index";
import { Link } from "react-router-dom";
function Task(props) {
  const { task } = props;
  const { name, description, deadline, priority, id } = task;
  const onDelete = () => {
    props.deleteTask(id);
  };
  const onTaskView = () => {
    props.viewTask(id);
  };

  const onTaskComplete = () => {
    props.completeTask(id);
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
        <Link to={`/Task/${task.id}`} onClick={onTaskView}>
          View
        </Link>
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
export default connect(mapStateToProps, { deleteTask, viewTask, completeTask })(
  Task
);
