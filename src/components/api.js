const baseURL = "https://pokeapi.co/api/v2/pokemon";

export const searchPokemon = async (pokemon) => {
  try {
    const response = await fetch(`${baseURL}/${pokemon}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

export const getPokemonsById = async (limit = 10, offset = 0) => {
  try {
    const response = await fetch(`${baseURL}?limit=${limit}&offset=${offset}`);
    const data = await response.json();

    const promises = data.results.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    });

    const results = await Promise.all(promises);

    return results;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonsByName = async (limit = 10, offset = 0) => {
  try {
    const response = await fetch(`${baseURL}?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    console.log(data);

    const dataByName = data.results.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    console.log(dataByName);

    const promises = dataByName.map(async (pokemon) => {
      const response = await fetch(pokemon.url);
      const data = await response.json();
      return data;
    });

    const results = await Promise.all(promises);

    return results;
  } catch (error) {
    console.log(error);
  }
};
