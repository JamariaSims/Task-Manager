import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import TaskDisplay from "./Views/TaskDisplay";
import Error from "./Views/Error";

import SignUpPage from "./Views/SignUpPage";
import WalledGarden from "./Views/WalledGarden";
function App(props) {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WalledGarden />} />
                <Route path="/SignUp" element={<SignUpPage />} />
                <Route path="/Login" element={<SignUpPage />} />
                <Route path="/Task/:id" element={<TaskDisplay />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks,
        completedTasks: state.completedTasks,
    };
};
export default connect(mapStateToProps)(App);
