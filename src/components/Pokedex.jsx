import React, { useEffect, useState } from "react";
import { getPokemonsById, getPokemonsByName, searchPokemon } from "./api";
import PokedexList from "./PokedexList";
import { colors } from "../utils/constants";
import pokeball from "../assets/WhitePokeball.svg";
import Searchbar from "./SearchBar";
import SearchFilter from "./SearchFilter";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [originalPokemons, setOriginalPokemons] = useState([]);
  const [filter, setFilter] = useState("number");
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [page, setPage] = useState({ limit: 151, offset: 0 });

  const fetchPokemonsById = async () => {
    setLoading(true);
    const data = await getPokemonsById(page.limit, page.offset);
    setPokemons(data);
    setOriginalPokemons(data);
    setLoading(false);
    setNotFound(false);
  };

  const fetchPokemonsByName = async () => {
    setLoading(true);
    const data = await getPokemonsByName(page.limit, page.offset);
    setPokemons(data);
    setOriginalPokemons(data);
    setLoading(false);
    setNotFound(false);
  };

  useEffect(() => {
    fetchPokemonsById();
  }, []);

  const handleFilter = () => {
    if (filter === "number") {
      fetchPokemonsById();
      setNotFound(false);
    } else {
      fetchPokemonsByName();
      setNotFound(false);
    }
  };

  useEffect(() => {
    handleFilter();
  }, [filter]);

  const handleSearch = async (pokemon) => {
    setLoading(true);

    setNotFound(false);
    if (!pokemon) {
      setLoading(false);
      setPokemons(originalPokemons);
      return;
    }
    const result = await searchPokemon(pokemon);
    if (result) {
      setPokemons([result]);
      setLoading(false);
    } else {
      setNotFound(true);
      setLoading(false);
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
        <div
          className="flex justify-between subtitle3"
          style={{ color: colors.white }}
        >
          <button>Previus Page</button>
          <button>Next Page</button>
        </div>
      </div>
      {notFound ? (
        <div>Pokemon no Encontrado</div>
      ) : (
        <PokedexList pokemons={pokemons} loading={loading} />
      )}
    </div>
  );
};

export default Pokedex;
