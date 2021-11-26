/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from "react";

function ComputerBoard({ player2, setPlayer2, playRound }) {
  useEffect(() => {
    const playerCopy2 = { ...player2 };
    playerCopy2.randomPlacement();
    setPlayer2(playerCopy2);
  }, []);

  return (
    <div className="board-wrapper">
      <div className="gameboard">
        {player2.board.boardArray.map((boardCell, index) => (
          <div
            onClick={(e) => playRound(e)}
            data-index={index}
            data-hit={boardCell.hit}
            className={`cell ${
              boardCell.hit && boardCell.ship ? "cell-ship-hit" : null
            } 
            ${!boardCell.hit ? "cell-water" : null} 

            ${boardCell.hit && !boardCell.ship ? "cell-water-hit" : null}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ComputerBoard;
