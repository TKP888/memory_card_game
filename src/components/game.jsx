import React, { useState, useEffect } from "react";
import Header from "./header.jsx";
import MainCardArea from "./maincardarea.jsx";
import "./game.css";

const Game = () => {
  const initialPokemonList = [
    "pikachu",
    "bulbasaur",
    "charmander",
    "squirtle",
    "eevee",
    "snorlax",
    "mewtwo",
    "dragonite",
    "gengar",
    "jigglypuff",
    "psyduck",
    "meowth",
  ];

  const [pokemonList, setPokemonList] = useState(initialPokemonList);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);

  // Shuffle function using Fisher-Yates algorithm
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleCardClick = (pokemonName) => {
    if (clickedCards.includes(pokemonName)) {
      // Reset score if the same card is clicked twice
      setCurrentScore(0);
      setClickedCards([]);
    } else {
      // Increment score and update high score if needed
      const newScore = currentScore + 1;
      setCurrentScore(newScore);
      setHighScore(Math.max(highScore, newScore));
      setClickedCards([...clickedCards, pokemonName]);
    }

    // Shuffle cards after every click
    setPokemonList(shuffleArray(pokemonList));
  };

  return (
    <div className="game">
      <Header currentScore={currentScore} highScore={highScore} />
      <MainCardArea pokemonList={pokemonList} onCardClick={handleCardClick} />
    </div>
  );
};

export default Game;
