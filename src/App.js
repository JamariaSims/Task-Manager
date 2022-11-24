import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskDisplay from "./Views/TaskDisplay";
import Error from "./Views/Error";
import SignUpPage from "./Views/SignUpPage";
import WalledGarden from "./Views/WalledGarden";
import LoginPage from "./Views/LoginPage";
import HomePage from "./Views/HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WalledGarden />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Test" element={<HomePage />} />
        <Route path="/Task/:_id" element={<TaskDisplay />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
