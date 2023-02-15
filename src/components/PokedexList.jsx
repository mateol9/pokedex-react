import React from "react";
import { colors } from "../utils/constants";
import PokemonCard from "./PokemonCard";

const PokedexList = ({ pokemons, loading }) => {
  // console.log(pokemons);
  return (
    <>
      {loading ? (
        <div className="text-3xl">Cargando...</div>
      ) : (
        <div
          className="flex flex-wrap justify-center innerShadow py-6 px-3 rounded-[8px] gap-2 "
          style={{ background: colors.white, margin: "0 auto" }}
        >
          {pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default PokedexList;
