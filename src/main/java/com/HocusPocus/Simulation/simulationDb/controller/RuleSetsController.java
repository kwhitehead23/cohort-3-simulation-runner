package com.HocusPocus.Simulation.simulationDb.controller;

import com.HocusPocus.Simulation.simulationDb.models.RuleSet;
import com.HocusPocus.Simulation.simulationDb.services.RuleSetsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/ruleset")
public class RuleSetsController {
    @Autowired
    RuleSetsService ruleSetsService;

    @GetMapping
    public ResponseEntity<List<RuleSet>> getAllRuleSets() {
        return ResponseEntity.ok()
                .body(this.ruleSetsService.getAllRuleSets());
    }
}