package com.HocusPocus.Simulation.repo;

import com.HocusPocus.Simulation.SimulationResults;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SimulationRepo extends JpaRepository<SimulationResults, Long> {
}
