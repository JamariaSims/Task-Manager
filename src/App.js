import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Views/Home";
import { connect } from "react-redux";
import TaskDisplay from "./Views/TaskDisplay";
import Error from "./Views/Error";
import Dashboard from "./Views/Dashboard";
function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Task/:id" element={<TaskDisplay />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    completedTasks: state.completedTasks,
  };
};
export default connect(mapStateToProps)(App);
