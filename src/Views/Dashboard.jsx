import React from "react";
import { connect } from "react-redux";
import Tasks from "../Components/Tasks";

export const Dashboard = (props) => {
  return (
    <div>
      <p>Dashboard</p>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Dashboard);
