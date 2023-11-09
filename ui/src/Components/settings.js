import React, { useState, useEffect } from "react";
import Select from "react-select";

function Settings({ data, onSelect }) {
  const [selectedLayout, setSelectedLayout] = useState(null);
  const [layoutOptions, setLayoutOptions] = useState([]);

  useEffect(() => {
    const options = Object.keys(data).map((key) => ({
    value: key,
    label: data[key].name,
  }));
setLayoutOptions(options);

    // If there are options and selectedLayout is not set, set the first option as default
    if (options.length > 0 && !selectedLayout) {
      setSelectedLayout(options[0]);
      onSelect(data[options[0].value]);
    }
  }, [data, onSelect, selectedLayout]);

  const handleLayoutSelection = (selectedOption) => {
    setSelectedLayout(selectedOption);
onSelect(data[selectedOption.value]);
  };

    return (
    <div>
      <h2>Settings</h2>
      <Select
        value={selectedLayout}
        onChange={handleLayoutSelection}
        options={layoutOptions}
      />
    </div>
  );
}

export default Settings;
