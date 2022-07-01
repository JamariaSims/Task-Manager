import { Login } from "@mui/icons-material";
import React from "react";
import { connect } from "react-redux";

function WalledGarden() {
    return (
        <div>
            <Login />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        completedTasks: state.completedTasks,
    };
};

export default connect(mapStateToProps)(WalledGarden);
