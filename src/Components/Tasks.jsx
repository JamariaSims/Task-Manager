import React from "react";
import Task from "./Task";

function Tasks(props) {
  const { tasks } = props;
  return (
    <div>
      <h1>Tasks</h1>
      <div>
        {tasks.length >= 1 ? (
          <div>
            {tasks.map((task, index) => {
              return (
                <div key={index}>
                  <Task task={task} />
                </div>
              );
            })}
          </div>
        ) : (
          <h1>No Data</h1>
        )}
      </div>
    </div>
  );
}

export default Tasks;
