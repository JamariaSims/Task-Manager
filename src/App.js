import "./App.css";
import Form from "./Views/Form";
import { useState } from "react";
import Tasks from "./Components/Tasks";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="App">
      <Form tasks={tasks} setTasks={setTasks} />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
