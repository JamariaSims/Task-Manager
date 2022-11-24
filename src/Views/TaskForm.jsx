import {
  Button,
  ButtonGroup,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../Actions/Index";

export const TaskForm = (props) => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    deadline: "",
    priority: "normal",
    status: "available",
    group_name: "none",
    created_by: props.username || "None",
  });
  // Input Controller
  const onInputChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setTask({ ...task, [name]: value });
  };

  // When User Submit Form
  const onInputSubmit = (event) => {
    props.addTask(task);
  };

  // Reset The Form
  const onInputReset = () => {
    setTask({
      name: "",
      description: "",
      deadline: "",
      priority: "normal",
      status: "available",
      group_name: "none",
      created_by: props.userId || "None",
    });
  };
  return (
    <form onSubmit={onInputSubmit}>
      <div className="TF">
        <Paper className="TF-Container" elevation={5}>
          <h2>Create Task</h2>
          <>
            <InputLabel id="name">Name</InputLabel>
            <TextField
              id="standard-basic"
              variant="outlined"
              type={"text"}
              name="name"
              value={task.name}
              onChange={onInputChange}
              required
            />
          </>
          <>
            <InputLabel id="description">Description</InputLabel>
            <TextField
              id="standard-basic"
              variant="outlined"
              type={"text"}
              name="description"
              value={task.description}
              onChange={onInputChange}
              required
            />
          </>

          <>
            <InputLabel id="deadline">Deadline</InputLabel>
            <TextField
              id="standard-basic"
              variant="outlined"
              type={"date"}
              name="deadline"
              value={task.deadline}
              onChange={onInputChange}
              required
            />
          </>
          <>
            <InputLabel id="priority">Priority</InputLabel>
            <Select
              id="priority"
              name="priority"
              value={task.priority}
              onChange={onInputChange}
            >
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="normal">Normal</MenuItem>
              <MenuItem value="important">Important</MenuItem>
              <MenuItem value="critical">Critical</MenuItem>
            </Select>
          </>

          <>
            <InputLabel id="status">Status</InputLabel>
            <Select
              id="status"
              name="status"
              value={task.status}
              onChange={onInputChange}
            >
              <MenuItem value="available">Available</MenuItem>
              <MenuItem value="in_progress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </>
          <>
            <InputLabel id="group_name">Group Name</InputLabel>
            <Select
              id="group_name"
              name="group_name"
              value={task.group_name}
              onChange={onInputChange}
            >
              <MenuItem value="none">None</MenuItem>
            </Select>
          </>
          <>
            <InputLabel id="created_by">Created By</InputLabel>
            <p>none</p>
          </>

          <ButtonGroup>
            <Button color="success" type="submit">
              Add
            </Button>
            <Button color="error">Cancel</Button>
          </ButtonGroup>
        </Paper>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.username,
    tasks: state.tasks,
    userId: state._id,
  };
};
export default connect(mapStateToProps, { addTask })(TaskForm);
