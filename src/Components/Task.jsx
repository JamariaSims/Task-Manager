import React from "react";
import { connect } from "react-redux";
import { completeTask, deleteTask } from "../Actions/Index";
import { Link } from "react-router-dom";
import { ButtonGroup } from "@mui/material";
function Task(props) {
  const { task } = props;
  console.log(task);

  const { name, description, deadline, priority, _id, status } = task;
  const onDelete = (event) => {
    event.preventDefault();
    props.deleteTask(_id);
  };
  const onTaskComplete = (event) => {
    event.preventDefault();
    props.completeTask(_id);
  };
  return (
    <div className="Task_Container" key={task._id}>
      <div className="TC-MiniBar">
        <p className="TC-Priority">{priority}</p>
        <p className="TC-Status">{status}</p>
      </div>

      <p className="TC-Name">{name}</p>
      <p className="TC-Description">{description}</p>

      <p>{deadline}</p>
      <div className="Button-Group">
        <button className="TC-Button-1" onClick={onDelete}>
          Delete
        </button>
        <Link className="TC-Button-2" to={`/Task/${task._id}`}>
          <p>View</p>
        </Link>
        <button className="TC-Button-3" onClick={onTaskComplete}>
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
