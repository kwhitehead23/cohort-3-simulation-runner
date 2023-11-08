import React, {useState} from 'react';
import Select from 'react-select';

function Settings(data) {

    const layout = [
        { value: 'layout1', label: '1' },
  { value: 'layout2', label: '2' },
  { value: 'layout3', label: '3' },
    ];
    const ruleset = [
        { value: 'ruleset1', label: '1' },
  { value: 'ruleset2', label: '2' },
  { value: 'ruleset3', label: '3' },
    ];

    const [selectedLayout, setSelectedLayout] = useState(null);
    const [selectRuleset, setSelectedRuleset] = useState(null);
    const [selectMaxIt, setSelectedMaxIt] = useState(null);

    return (
        <div className="SettingsMenu">
            <h2>Settings</h2>
            <Select
            defaultValue={selectedLayout}
            onChange={setSelectedLayout}
            options={layout}
            >
            <option value="">Select your option</option>
            </Select>

            <Select 
            defaultValue={selectRuleset}
            onChange={setSelectedRuleset}
            options={ruleset}
            />

            <input
            name="maxIterations"
            type='number'
            defaultValue={selectMaxIt}
            onChange={setSelectedMaxIt}
            />
            <div className='runButton'>
            <button type="button">Run Simulation</button>
            </div>
        </div>

    )
    
}

export default Settings;