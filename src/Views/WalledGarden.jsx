import { Login } from "@mui/icons-material";
import React from "react";
import { connect } from "react-redux";
import SignUpPage from "./SignUpPage";

function WalledGarden(props) {
    return <div>{!props.username ? <Login /> : <SignUpPage />}</div>;
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
    };
};

export default connect(mapStateToProps)(WalledGarden);
