import React, { useEffect, useState } from "react";
import { fetchPokemonData } from "./api.js";
import "./maincardarea.css";

const PokemonInfo = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemonData = async () => {
      setLoading(true);
      const data = await fetchPokemonData(pokemonName);
      setPokemon(data);
      setLoading(false);
    };

    getPokemonData();
  }, [pokemonName]); // Run effect when pokemonName changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!pokemon) {
    return <div>Error loading Pokémon data.</div>;
  }

  return (
    <div className="pokecard">
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      {/* Additional Pokémon details can go here */}
    </div>
  );
};

export default PokemonInfo;
