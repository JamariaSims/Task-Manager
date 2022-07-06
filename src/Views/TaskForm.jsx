import {
  Button,
  ButtonGroup,
  FormGroup,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { connect } from "react-redux";

const initialState = {
  name: "",
  description: "",
  deadline: "",
  priority: "normal",
  status: "available",
  group_name: "none",
  created_by: "",
};

export const TaskForm = (props) => {
  const [task, setTask] = useState(initialState);

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
    setTask(initialState);
  };

  // Reset The Form
  const onInputReset = () => {
    setTask(initialState);
  };
  return (
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
          <Button color="success">Add</Button>
          <Button color="error">Cancel</Button>
        </ButtonGroup>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
