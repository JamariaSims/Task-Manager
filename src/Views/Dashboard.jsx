import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUserData, fetchTasks } from "../Actions/Index";
import Tasks from "../Components/Tasks";
import TaskForm from "./TaskForm";

function Dashboard(props) {
  const { username, fetchUserData } = props;
  useEffect(() => {
    fetchUserData(username);
  }, [username]);
  return (
    <div className="Dashboard_Container">
      <h1>Dashboard</h1>
      <h1>{username}</h1>
      <TaskForm />
      <Tasks />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    tasks: state.tasks,
  };
};

export default connect(mapStateToProps, { fetchUserData })(Dashboard);
