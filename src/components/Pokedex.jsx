import React, { useEffect, useState } from "react";
import { getPokemons } from "./api";
import PokedexList from "./PokedexList";

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
    <div>
      <PokedexList pokemons={pokemons} loading={loading} />
    </div>
  );
};

export default Pokedex;
