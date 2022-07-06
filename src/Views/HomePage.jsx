import React from "react";
import Task from "../Components/Task";
import Dashboard from "./Dashboard";
import Form from "./Form";
import TaskForm from "./TaskForm";

function HomePage() {
  return (
    <div>
      <TaskForm />
      <Dashboard />
    </div>
  );
}

export default HomePage;
