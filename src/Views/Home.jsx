import React from "react";
import Task from "../Components/Task";
import Tasks from "../Components/Tasks";
import Form from "./Form";
import NavigationBar from "./NavigationBar";

function Home() {
    return (
        <div className="Home_Container">
            <NavigationBar />
            <Form />
            <Tasks />
        </div>
    );
}

export default Home;
