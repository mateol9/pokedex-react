import "./App.css";
import { searchPokemon, getPokemons } from "./components/api";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getPokemons(25, 0);
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Pokemon</h1>
    </div>
  );
}

export default App;
