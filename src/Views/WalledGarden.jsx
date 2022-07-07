import { Login } from "@mui/icons-material";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import SignUpPage from "./SignUpPage";
import Dashboard from "./Dashboard";
import LoginPage from "./LoginPage";

function WalledGarden(props) {
    useEffect(() => {
        console.log(props.username);
    }, [props.username]);
    console.log(props.username);
    return <div>{!props.username ? <LoginPage /> : <Dashboard />}</div>;
}

const mapStateToProps = (state) => {
    return {
        username: state.username,
    };
};

export default connect(mapStateToProps)(WalledGarden);
