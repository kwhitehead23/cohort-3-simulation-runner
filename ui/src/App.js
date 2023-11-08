database_connection
import "./App.css";

import Grid from "./Components/grid";
import Settings from "./Components/settings";

function App() {
  return (
    <>
      <div className="settings">
        <Settings  />
      </div>

      <Grid />
    </>
=======
// App.js

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
main
  );
}

export default App;
