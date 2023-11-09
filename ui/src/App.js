import "./App.css";

import Grid from "./Components/grid";

import React from "react";
import Navbar from "./Components/Navbar";
import Simulation from "./pages/Simulation";
import "./App.css"; // Import your CSS file for styling




function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-container">
        <Simulation />
      </div>
    </div>
  );
}

export default App;
