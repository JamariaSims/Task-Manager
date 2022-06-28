import React from "react";
import { connect } from "react-redux";

function WalledGarden() {
    return <div>WalledGarden</div>;
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        completedTasks: state.completedTasks,
    };
};

export default connect(mapStateToProps)(WalledGarden);
