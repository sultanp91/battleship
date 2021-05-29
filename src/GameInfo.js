import React from 'react';

function GameInfo({ gameOver, shipsPlaced }) {
  return (
    <div>
      <h1>
        {gameOver && !shipsPlaced
          ? 'Place Your Ships!'
          : null || (!gameOver && shipsPlaced)
          ? 'Attack your opponent'
          : null || (gameOver && shipsPlaced)
          ? 'GAME OVER'
          : null}
      </h1>
    </div>
  );
}

export default GameInfo;
