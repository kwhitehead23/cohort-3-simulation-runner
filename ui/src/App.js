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
  );
}

export default App;
