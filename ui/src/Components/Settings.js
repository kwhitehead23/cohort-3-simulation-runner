import React, { useState, useEffect } from "react";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

import { useSelector, useDispatch } from 'react-redux'
import { updateLayout, updateRuleset, updateMaxIterations } from '../store/settingsSlice';

function Settings() {
  const dispatch = useDispatch()
  const selectedLayout = useSelector((state) => state.settings.layoutId);
  const selectedRuleset = useSelector((state) => state.settings.rulesetId);
  const maxIterations = useSelector((state) => state.settings.maxIterations);

  // what populates the drop down
  const [layoutOptions, setLayoutOptions] = useState([
    { value: 1, label: 'Chocolate' },
    { value: 2, label: 'Strawberry' },
    { value: 3, label: 'Vanilla' }
  ]);
  const [rulesetOptions, setRulesetOptions] = useState([
    { value: 1, label: 'Chocolate' },
    { value: 2, label: 'Strawberry' },
    { value: 3, label: 'Vanilla' }
  ]);

  const onSelectLayout = (selectedOption) => dispatch(updateLayout(selectedOption.value));
  const onSelectRuleset = (selectedOption) => dispatch(updateRuleset(selectedOption.value));
  const onChangeMaxIterations = (e) => dispatch(updateMaxIterations(e.target.value));

  return (
    <div>
      <h2>Settings</h2>
      <Select
        value={layoutOptions.find(({ value }) => value === selectedLayout)}
        onChange={onSelectLayout}
        options={layoutOptions}
      />

      <Select
        value={rulesetOptions.find(({ value }) => value === selectedRuleset)}
        onChange={onSelectRuleset}
        options={rulesetOptions}
      />

      <Form.Control
        required
        name="maxIt"
        type="number"
        onChange={onChangeMaxIterations}
        value={maxIterations}
      />
      <div className="runButton">
        <button type="button" className="btn btn-primary">Run Simulation</button>
      </div>
    </div>
  );
}

export default Settings;
