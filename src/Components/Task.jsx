import React from "react";
import { connect } from "react-redux";
import { viewTask } from "../Actions/Index";
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
  return (
    <Link to={`/Task/${task.id}`} onClick={onTaskView}>
      <div>
        <h1>Task</h1>
        <p>{name}</p>
        <p>{description}</p>
        <p>{deadline}</p>
        <p>{priority}</p>
        <p>{id}</p>
        <div className="ButtonGroup">
          <button onClick={onDelete}>Delete</button>
          <button>Complete</button>
        </div>
      </div>
    </Link>
  );
}
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps, { viewTask })(Task);
