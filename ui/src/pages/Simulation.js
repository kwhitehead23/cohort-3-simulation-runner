import React, { useState } from "react";
import Grid from "../Components/grid";
import Legend from "../Components/Legend";
import Layouts from "../Data/Layouts.json";
import Settings from "../Components/Settings";

function Simulation() {
  const [selectedLayout, setSelectedLayout] = useState(null);

  const handleLayoutChange = (layout) => {
    setSelectedLayout(layout);
  };

  return (
    <div>
      <h1>Simulation Page</h1>
      <Legend />
      <Grid data={Layouts} />
    <Settings onSelect={handleLayoutChange} selectedLayout={selectedLayout} />
    </div>
  );
}

export default Simulation;
