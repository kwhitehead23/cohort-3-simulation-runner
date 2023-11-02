import "./App.css";
import Grid from "./Components/Grid";
import mazeData from "./Components/Data/mazes.json";
import Legend from "./Components/Legend";
function App() {
  return (
    <>
      <Legend />
      <Grid data={mazeData} />
    </>
  );
}

export default App;
