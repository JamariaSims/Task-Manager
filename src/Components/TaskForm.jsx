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
    event.preventDefault();
    props.addTask(task);
    onInputReset();
  };

  // Reset The Form
  const onInputReset = () => {
    setTask({
      name: "",
      description: "",
      deadline: "",
      priority: "normal",
      status: "available",
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
          <br></br>
          <ButtonGroup>
            <Button color="success" type="submit">
              Add
            </Button>
            <Button color="error" onClick={onInputReset}>
              Cancel
            </Button>
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
