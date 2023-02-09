import React, { useEffect, useState } from "react";
import { getPokemons } from "./api";
import PokedexList from "./PokedexList";
import { colors } from "../utils/constants";
import pokeball from "../assets/WhitePokeball.svg";
import Searchbar from "./SearchBar";
import SearchFilter from "./SearchFilter";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemons = async () => {
      const data = await getPokemons(25, 0);
      setPokemons(data);
      setLoading(false);
    };
    fetchPokemons();
  }, []);

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
          <Searchbar />
          <SearchFilter />
        </div>
      </div>
      <PokedexList pokemons={pokemons} loading={loading} />
    </div>
  );
};

export default Pokedex;
