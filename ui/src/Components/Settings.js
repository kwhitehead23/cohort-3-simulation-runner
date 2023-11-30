import React, { useState, useEffect } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

import { useSelector, useDispatch } from 'react-redux'
import { updateLayout, updateRuleset, updateMaxIterations } from '../store/settingsSlice';
import { useGetRuleSetsQuery } from '../store/ruleSetsSlice';

function Settings() {
  // Hooks
  const dispatch = useDispatch()
  const layoutId = useSelector((state) => state.settings.layoutId);
  const rulesetId = useSelector((state) => state.settings.rulesetId);
  const maxIterations = useSelector((state) => state.settings.maxIterations);
  // Question: should we handle a possible error here?
  const { data: rulesets = [], error, isLoading } = useGetRuleSetsQuery();

  // Event Handlers 
  const onSelectLayout = (selectedOption) => dispatch(updateLayout(selectedOption.value));
  const onSelectRuleset = (selectedOption) => dispatch(updateRuleset(selectedOption.value));
  const onChangeMaxIterations = (e) => dispatch(updateMaxIterations(e.target.value));

  // Data Transformations
  const rulesetOptions = rulesets.map((ruleset) => ({ value: ruleset.id, label: ruleset.name }));
  const layoutOptions = [];
  const selectedLayoutOption = layoutOptions.find(({ value }) => value === layoutId);
  const selectedRulesetOption = rulesetOptions.find(({ value }) => value === rulesetId)

  // View
  return (
    <div>
      <h2>Settings</h2>
      <Select
        value={selectedLayoutOption}
        onChange={onSelectLayout}
        options={layoutOptions}
      />

      <Select
        value={selectedRulesetOption}
        onChange={onSelectRuleset}
        options={rulesetOptions}
        // Question why are we disabling this select when it's loading or an error?
        isDisabled={isLoading || error}
        isLoading={isLoading}
      />

      <Form.Control
        required
        name="maxIt"
        type="number"
        onChange={onChangeMaxIterations}
        value={maxIterations}
      />
      <div className="runButton">
        {/* STOP AND ASK BEFORE YOU IMPLEMENT THIS!! Story #46 */}
        <button type="button" className="btn btn-primary">Run Simulation</button>
      </div>
    </div>
  );
}

export default Settings;
