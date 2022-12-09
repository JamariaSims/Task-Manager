import React from "react";
import Dashboard from "./Dashboard";
import TaskForm from "../Components/TaskForm";

function HomePage() {
  return (
    <div>
      <TaskForm />
      <Dashboard />
    </div>
  );
}

export default HomePage;
