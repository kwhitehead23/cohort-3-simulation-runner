package com.HocusPocus.Simulation.simulationDb.services;

import com.HocusPocus.Simulation.simulationDb.models.RuleSet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;


import java.util.List;

@Service
public class RuleSetsService {
    @Autowired
    private WebClient webClient;

    public List<RuleSet> getAllRuleSets() {
        return this.webClient.get()
                .uri("http://localhost:8080/rulesets/")
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<List<RuleSet>>() {})
                .block();
    }

    public void deleteRuleSet(Long id) {
        this.webClient.delete()
                .uri("http://localhost:8080/rulesets/{id}", id)
                .retrieve()
                .toBodilessEntity()
                .block();
    }
}