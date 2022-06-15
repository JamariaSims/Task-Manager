import React, { useState } from "react";

const initialState = {
  taskName: "",
  taskDescription: "",
  taskDeadline: "",
  taskPriority: "",
};
function Form(props) {
  const { tasks, setTasks } = props;
  const [state, setState] = useState(initialState);

  const onInputChange = (event) => {
    event.preventDefault();
    const { target } = event;
    const { name, value } = target;
    setState({ ...state, [name]: value });
  };
  const onInputAdd = (event) => {
    event.preventDefault();
    setTasks([...tasks, state]);
    setState(initialState);
  };
  return (
    <form className="Form_Container">
      <label>Task Name:</label>
      <input
        type={"text"}
        value={state.taskName}
        placeholder="Name"
        onChange={onInputChange}
        name="taskName"
      />
      <label>Task Description:</label>
      <input
        type={"text"}
        value={state.taskDescription}
        placeholder="Description"
        onChange={onInputChange}
        name="taskDescription"
      />
      <label>Deadline</label>
      <input
        type={"date"}
        value={state.taskDeadline}
        onChange={onInputChange}
        name="taskDeadline"
      />
      <label>Priority</label>
      <div className="Form_Priority">
        <label id="Priority-Low">
          Low{" "}
          <input
            type={"radio"}
            value={state.taskPriority}
            for="Priority-Low"
            onChange={onInputChange}
            name="taskPriority"
          />
        </label>

        <label id="Priority-Normal">
          Normal{" "}
          <input
            type={"radio"}
            value={state.taskPriority}
            for="Priority-Normal"
            onChange={onInputChange}
            name="taskPriority"
          />
        </label>

        <label id="Priority-Important">
          Important{" "}
          <input
            type={"radio"}
            value={state.taskPriority}
            for="Priority-Important"
            onChange={onInputChange}
            name="taskPriority"
          />
        </label>

        <label id="Priority-Important">
          Critical{" "}
          <input
            type={"radio"}
            value={state.taskPriority}
            for="Priority-Critical"
            onChange={onInputChange}
            name="taskPriority"
          />
        </label>
      </div>

      <label>Members</label>
      <button>Add Member</button>
      <label>Group</label>
      <select>
        <option>None</option>
        <option>Add a group</option>
      </select>
      <button onClick={onInputAdd}>Add</button>
      <button>Cancel</button>
    </form>
  );
}

export default Form;
