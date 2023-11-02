import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Reports from './pages/Reports'
import Simulation from './pages/Simulation'


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/dashboard' exact component={Dashboard}/>
        <Route path='/reports' component={Reports}/>
        <Route path='/products' component={Simulation}/>
      </Routes>
    </Router>
    </>  
  );
}

export default App;
