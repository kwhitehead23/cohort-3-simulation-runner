import React from "react";
import Grid from "../Components/grid";
import Legend from "../Components/Legend";
import Layouts from "../Data/Layouts.json";

function Simulation(g) {
  return (
    <div>
      <h1>Simulation Page</h1>
      <Legend />
      <Grid data={Layouts} />
    </div>
  );
}

export default Simulation;
