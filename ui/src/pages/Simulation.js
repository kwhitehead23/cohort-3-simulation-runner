import React, { useState } from "react";
import Grid from "../Components/grid";
import Legend from "../Components/Legend";
import Settings from "../Components/Settings";
// Fix settings
import "./Simulation.css";

function Simulation() {
  return (
    <div>
      <h1>Simulation Page</h1>

      <div className="content-container">
        <Legend />
        <Grid data={{}} />
      </div>

      <div className="settings-container">
        <Settings />
      </div>
    </div>
  );
}

export default Simulation;
