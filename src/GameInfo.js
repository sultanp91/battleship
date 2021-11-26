import React from "react";

function GameInfo({ winner, gameOver, shipsPlaced }) {
  return (
    <div>
      <h2>{winner ? `Winner: ${winner}` : null}</h2>
      <h2>
        {gameOver && !shipsPlaced
          ? "Place all of your ships"
          : null || (!gameOver && shipsPlaced)
          ? "Attack your opponent"
          : null || (gameOver && shipsPlaced)
          ? "GAME OVER"
          : null}
      </h2>
    </div>
  );
}

export default GameInfo;
