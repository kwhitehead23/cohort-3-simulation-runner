import React from "react";
import Grid from "../Components/grid";
import Legend from "../Components/Legend";
import mazes from "../Data/mazes.json";

function Simulation(g) {
  return (
    <div>
      <h1>Simulation Page</h1>
      <Legend />
      <Grid data={mazes} />
    </div>
  );
}

export default Simulation;
