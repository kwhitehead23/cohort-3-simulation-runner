package com.HocusPocus.Simulation.controller;

import com.HocusPocus.Simulation.SimulationResults;
import com.HocusPocus.Simulation.SimulationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/results")
public class SimController {
    @Autowired
    private SimulationService simulationService;

    // Create a new simulation
    @PostMapping
    public SimulationResults createSimulationResults(@RequestBody SimulationResults simulationResults) {
        return simulationService.createSimulationResults(simulationResults);
    }

    // Get all simulation results
    @GetMapping
    public List<SimulationResults> getAllSimulationResults() {
        return simulationService.getAllSimulationResults();
    }

    // Get result by ID
    @GetMapping("/{id}")
    public Optional<SimulationResults> getSimulationById(@PathVariable Long id) {
        return simulationService.getSimulationById(id);
    }

    // Update result by ID
    @PutMapping("/{id}")
    public SimulationResults updateSimulationResults(@PathVariable Long id, @RequestBody SimulationResults simulationResultsDetails) {
        return simulationService.updateSimulation(id, simulationResultsDetails);
    }

    // Delete all results
    @DeleteMapping
    public String deleteAllSimulationResults() {
        simulationService.deleteAllSimulationResults();
        return "All results have been deleted successfully.";
    }

    // Delete user by ID
    @DeleteMapping("/{id}")
    public void deleteSimulationResults(@PathVariable Long id) {
        simulationService.deleteSimulationResults(id);
    }
}