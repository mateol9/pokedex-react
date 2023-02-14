import React, { useEffect, useState } from "react";
import { getPokemons, searchPokemon } from "./api";
import PokedexList from "./PokedexList";
import { colors } from "../utils/constants";
import pokeball from "../assets/WhitePokeball.svg";
import Searchbar from "./SearchBar";
import SearchFilter from "./SearchFilter";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [originalPokemons, setOriginalPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("number");

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemons(151, 0);
      setPokemons(data);
      setOriginalPokemons(data);
      setLoading(false);
    };
    fetchPokemons();
  }, []);

  const handleFilter = () => {
    const pokemonsFiltered = [...pokemons].sort((a, b) => {
      let param;
      filter === "number" ? (param = "id") : (param = "name");
      if (a[param] < b[param]) return -1;
      if (a[param] > b[param]) return 1;
      return 0;
    });
    setPokemons(pokemonsFiltered);
    setOriginalPokemons(pokemonsFiltered);
  };

  useEffect(() => {
    handleFilter();
  }, [filter]);

  const handleSearch = async (pokemon) => {
    if (!pokemon) {
      setPokemons(originalPokemons);
      return;
    }
    const result = await searchPokemon(pokemon);
    if (result) {
      setPokemons([result]);
    } else {
      console.log("Pokemon no encontrado");
    }
  };

  return (
    <div className="p-1" style={{ background: colors.primary }}>
      <div className="pt-3 px-3 pb-6 flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <img src={pokeball} alt="pokeball" className="w-6 h-6" />
          <h1 className="bold headline" style={{ color: colors.white }}>
            Pokédex
          </h1>
        </div>
        <div className="flex gap-4">
          <Searchbar handleSearch={handleSearch} />
          <SearchFilter setFilter={setFilter} filter={filter} />
        </div>
      </div>
      <PokedexList pokemons={pokemons} loading={loading} />
    </div>
  );
};

export default Pokedex;
