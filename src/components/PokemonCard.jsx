import React from "react";
import { colors, typeColors } from "../utils/constants";

const PokemonCard = ({ pokemon }) => {
  let getColor = pokemon.types[0].type.name;
  let getColors = pokemon.types.map((types) => types.type.name);
  // console.log(pokemon);

  return (
    <div
      className="w-[104px] h-[108px] flex flex-col items-center justify-between rounded-[8px] overflow-hidden relative dropShadow1"
      style={{ background: colors.white }}
    >
      <div
        className="w-full text-end caption pt-1 px-2"
        style={{ color: colors.medium }}
      >
        #{pokemon.id.toString().padStart(3, 0)}
      </div>
      <div className=" w-[72px] h-[72px] absolute top-0 bottom-0 right-0 left-0 m-auto">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
      </div>
      <div
        className="rounded-t-[7px] w-full pt-6 body3 text-center"
        style={{
          background: typeColors[getColor],
          // getColors.length === 1
          //   ? typeColors[getColors[0]]
          //   : `linear-gradient(0deg, ${typeColors[getColors[0]]} 45%, ${
          //       typeColors[getColors[1]]
          //     } 55%)`,
          color: colors.black,
        }}
      >
        <p className="px-2 pb-1">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
