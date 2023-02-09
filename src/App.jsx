import "./App.css";
import { searchPokemon, getPokemons } from "./components/api";
import { useEffect } from "react";
import PokemonCard from "./components/PokemonCard";
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
