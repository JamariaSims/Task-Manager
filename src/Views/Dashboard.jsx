import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUserData, fetchTasks } from "../Actions/Index";
import Tasks from "./Tasks";
import TaskForm from "../Components/TaskForm";

function Dashboard(props) {
  const { username } = props;
  if (props.isLoggedIn === false) {
    props.fetchUserData(username);
  }
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
    isLoggedIn: state.isLoggedIn,
  };
};

export default connect(mapStateToProps, { fetchUserData })(Dashboard);
