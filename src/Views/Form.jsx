import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../Actions/Index";

const initialState = {
    name: "",
    description: "",
    deadline: "",
    priority: "Normal",
};
function Form(props) {
    const { tasks } = props;
    const [state, setState] = useState(initialState);

    const onInputChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setState({ ...state, [name]: value });
        console.log(state);
    };
    const onInputSubmit = (event) => {
        event.preventDefault();
        props.addTask(state, tasks);
        setState(initialState);
    };
    const onInputReset = () => {
        setState(initialState);
    };
    return (
        <form className="Form_Container" onSubmit={onInputSubmit}>
            <label>Task Name:</label>
            <input
                type={"text"}
                value={state.taskName}
                placeholder="Name"
                onChange={onInputChange}
                name="name"
                required
            />
            <label>Task Description:</label>
            <input
                type={"text"}
                value={state.description}
                placeholder="Description"
                onChange={onInputChange}
                name="description"
                required
            />
            <label>Deadline</label>
            <input
                type={"date"}
                value={state.deadline}
                onChange={onInputChange}
                name="deadline"
                required
            />
            <label>Priority</label>
            <div className="Form_Priority">
                <label id="Priority-Low" for="Priority-Low">
                    Low{" "}
                    <input
                        id="Priority-Low"
                        type={"radio"}
                        value={"Low"}
                        onChange={onInputChange}
                        name="priority"
                        checked={state.priority === "Low"}
                    />
                </label>

                <label id="Priority-Normal" for="Priority-Normal">
                    Normal{" "}
                    <input
                        id="Priority-Normal"
                        type={"radio"}
                        value={"Normal"}
                        onChange={onInputChange}
                        name="priority"
                        checked={state.priority === "Normal"}
                    />
                </label>

                <label id="Priority-Important" for="Priority-Important">
                    Important{" "}
                    <input
                        id="Priority-Important"
                        type={"radio"}
                        value={"Important"}
                        onChange={onInputChange}
                        name="priority"
                        checked={state.priority === "Important"}
                    />
                </label>

                <label id="Priority-Important" for="Priority-Critical">
                    Critical{" "}
                    <input
                        id="Priority-Critical"
                        type={"radio"}
                        value={"Critical"}
                        onChange={onInputChange}
                        name="priority"
                        checked={state.priority === "Critical"}
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
            <button type="submit">Add</button>
            <button type="reset" onClick={onInputReset}>
                Cancel
            </button>
        </form>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
    };
};
export default connect(mapStateToProps, { addTask })(Form);
