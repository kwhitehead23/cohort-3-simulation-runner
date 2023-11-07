import React from "react";
import Navbar from "./Components/Navbar";
import Simulation from "./pages/Simulation";

function App() {
  return (
    <div>
      <Navbar/>
      <div className="Simulation">
         <Simulation />
      </div>
    </div>
  );
}

export default App;
