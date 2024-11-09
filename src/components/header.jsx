import React from "react";
import "./header.css";

const Header = ({ currentScore, highScore }) => {
  return (
    <header className="gameHeader">
      <h1>Memory Card Game</h1>
      <p>
        Score points by selecting cards but don't select the same <br />
        card twice or the score resets. Click all 12 cards to win!
      </p>
      <div>
        <p>Current Score: {currentScore}</p>
        <p>High Score: {highScore}</p>
      </div>
    </header>
  );
};

export default Header;
