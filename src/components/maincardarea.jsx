import React from "react";
import "./maincardarea.css";
import PokemonInfo from "./PokemonInfo.jsx";

const MainCardArea = ({ pokemonList, onCardClick }) => {
  return (
    <div className="main-card-area">
      {pokemonList.map((pokemonName, index) => (
        <div
          className="card"
          key={index}
          onClick={() => onCardClick(pokemonName)}
        >
          <PokemonInfo pokemonName={pokemonName} />
        </div>
      ))}
    </div>
  );
};

export default MainCardArea;
