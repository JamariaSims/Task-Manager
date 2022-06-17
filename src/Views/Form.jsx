import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../Actions/Index";

import { v4 as uuidv4 } from "uuid";

const initialState = {
    name: "",
    description: "",
    deadline: "",
    priority: "Normal",
    status: "In Progress",
};
function Form(props) {
    const [task, setTask] = useState(initialState);

    const onInputChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        setTask({ ...task, [name]: value });
        console.log(task);
    };
    const onInputSubmit = (event) => {
        event.preventDefault();
        task.id = uuidv4();
        props.addTask(task);
        setTask(initialState);
    };
    const onInputReset = () => {
        setTask(initialState);
    };
    return (
        <form className="Form_Container" onSubmit={onInputSubmit}>
            <label htmlFor="Form-Name">Task Name:</label>
            <input
                type={"text"}
                value={task.taskName}
                placeholder="Name"
                onChange={onInputChange}
                name="name"
                id="Form-Name"
                required
            />
            <label htmlFor="Form-Description">Task Description:</label>
            <input
                type={"text"}
                value={task.description}
                placeholder="Description"
                onChange={onInputChange}
                name="description"
                id="Form-Description"
                required
            />
            <label htmlFor="Form-Deadline">Deadline</label>
            <input
                type={"date"}
                value={task.deadline}
                onChange={onInputChange}
                name="deadline"
                id="Form-Deadline"
                required
            />
            <label>Priority</label>
            <div className="Form_Priority">
                <label id="Priority-Low" htmlFor="Priority-Low">
                    Low{" "}
                    <input
                        id="Priority-Low"
                        type={"radio"}
                        value={"Low"}
                        onChange={onInputChange}
                        name="priority"
                        checked={task.priority === "Low"}
                    />
                </label>

                <label id="Priority-Normal" htmlFor="Priority-Normal">
                    Normal{" "}
                    <input
                        id="Priority-Normal"
                        type={"radio"}
                        value={"Normal"}
                        onChange={onInputChange}
                        name="priority"
                        checked={task.priority === "Normal"}
                    />
                </label>

                <label id="Priority-Important" htmlFor="Priority-Important">
                    Important{" "}
                    <input
                        id="Priority-Important"
                        type={"radio"}
                        value={"Important"}
                        onChange={onInputChange}
                        name="priority"
                        checked={task.priority === "Important"}
                    />
                </label>

                <label id="Priority-Important" htmlFor="Priority-Critical">
                    Critical{" "}
                    <input
                        id="Priority-Critical"
                        type={"radio"}
                        value={"Critical"}
                        onChange={onInputChange}
                        name="priority"
                        checked={task.priority === "Critical"}
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
