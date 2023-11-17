import "./App.css";

import Grid from "./Components/grid";

import React from "react";
import SideBar from "./Components/Sidebar";
import Simulation from "./pages/Simulation";
import "./App.css"; // Import your CSS file for styling

function App() {
  return (
    <div className="app-container">
      <SideBar />
      <div className="content-container">
        <Simulation />
      </div>
    </div>
  );
}

export default App;
