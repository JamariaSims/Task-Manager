import "./App.css";
import Form from "./Views/Form";
import { useState } from "react";
import Tasks from "./Components/Tasks";

function App() {
    return (
        <div className="App">
            <Form />
            <Tasks />
        </div>
    );
}

export default App;
