import React from "react";
import Task from "../Components/Task";
import Tasks from "../Components/Tasks";
import UserLogin from "../Components/UserLogin";
import Form from "./Form";
import NavigationBar from "./NavigationBar";
import SignUp from "./SignupPage";

function Home() {
    return (
        <div className="Home_Container">
            <SignUp />
        </div>
    );
}

export default Home;
