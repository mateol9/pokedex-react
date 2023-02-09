import React from "react";
import PokemonCard from "./PokemonCard";

const PokedexList = ({ pokemons, loading }) => {
  // console.log(pokemons);
  return (
    <div className="flex flex-wrap justify-between">
      {pokemons.map((pokemon) => (
        <PokemonCard pokemon={pokemon} key={pokemon.id} />
      ))}
    </div>
  );
};

export default PokedexList;
