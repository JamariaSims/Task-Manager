import "./App.css";
import Form from "./Views/Form";
import Tasks from "./Components/Tasks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import Task from "./Components/Task";
import { connect } from "react-redux";
import TaskDisplay from "./Views/TaskDisplay";
import Error from "./Views/Error";
import { useEffect } from "react";

function App(props) {
  const { tasks, completedTasks } = props;
  useEffect(() => {
    console.log(tasks, completedTasks);
  }, [tasks, completedTasks]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Task/:id" element={<TaskDisplay />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    completedTasks: state.tasks,
  };
};
export default connect(mapStateToProps)(App);
