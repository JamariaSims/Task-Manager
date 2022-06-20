import React from "react";
import { connect } from "react-redux";
import Tasks from "../Components/Tasks";

const FREE_TASK = "FREE_TASK";
const IN_PROGRESS = "IN_PROGRESS";
const COMPLETED_TASK = "COMPLETED_TASK";

export const Dashboard = (props) => {
  return (
    <div>
      <p>Dashboard</p>
      <div className="Dashboard-Header">
        <div className="Available_Tasks-Container">
          <p>Available Tasks</p>
          <Tasks type={FREE_TASK} />
        </div>
        <div className="In_Progress-Container">
          <p>In Progress</p>
          <Tasks type={IN_PROGRESS} />
        </div>
        <div className="Completed-Container">
          <p>Completed Tasks</p>
          <Tasks type={COMPLETED_TASK} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Dashboard);
