import React, { useState } from 'react';

function PlayerBoard({
  player1,
  setPlayer1,
  shipsPlaced,
  playerPlacement,
  horizontal,
}) {
  return (
    <div className='board-wrapper'>
      <div className='gameboard'>
        {player1.board.boardArray.map((boardCell, index) => (
          <div
            onClick={(e) => playerPlacement(e)}
            data-index={index}
            className={`cell ${boardCell.hit ? 'cell-hit' : null} ${
              boardCell.ship ? 'cell-ship' : 'cell-water'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default PlayerBoard;
