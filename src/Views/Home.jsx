import React from "react";
import Task from "../Components/Task";
import Tasks from "../Components/Tasks";
import Form from "./Form";

function Home() {
  return (
    <div className="Home_Container">
      <Form />
      <Tasks />
    </div>
  );
}

export default Home;
