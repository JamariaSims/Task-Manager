import React from "react";
import { connect } from "react-redux";
import { fetchUserData } from "../Actions/Index";
import Tasks from "../Components/Tasks";
import TaskForm from "./TaskForm";

function Dashboard(props) {
    props.fetchUserData(props.username);
    return (
        <div className="Dashboard_Container">
            <p>Dashboard</p>
            <TaskForm />
            <Tasks />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
    };
};

export default connect(mapStateToProps, { fetchUserData })(Dashboard);
