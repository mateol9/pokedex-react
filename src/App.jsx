import "./App.css";
import { colors } from "./utils/constants";
import Pokedex from "./components/Pokedex";

function App() {
  return (
    <div className="App" style={{ background: colors.background }}>
      <Pokedex />
    </div>
  );
}

export default App;
