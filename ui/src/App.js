import "./App.css";
import Grid from "./Components/Grid";
import mazeData from "./Components/Data/mazes.json";
function App() {
  return (
    <>
      <Grid data={mazeData} />
    </>
  );
}

export default App;
