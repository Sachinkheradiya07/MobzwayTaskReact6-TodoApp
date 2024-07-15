import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/HomePage";
import TodoApp from "./pages/TodoApp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
