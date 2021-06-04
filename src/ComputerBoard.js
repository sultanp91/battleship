import React, { useEffect, useState } from 'react';

function ComputerBoard({ player2, setPlayer2, playRound }) {
  useEffect(() => {
    let playerCopy2 = Object.assign({}, player2);
    playerCopy2.randomPlacement();
    setPlayer2(playerCopy2);
  }, []);

  return (
    <div className='board-wrapper'>
      <div className='gameboard'>
        {player2.board.boardArray.map((boardCell, index) => (
          <div
            onClick={(e) => playRound(e)}
            data-index={index}
            data-hit={boardCell.hit}
            className={`cell ${boardCell.hit ? 'cell-hit' : null} ${
              !boardCell.hit ? 'cell-water' : null
            } 

            ${boardCell.hit && !boardCell.ship ? 'cell-water' : null} 
            
            
            ${boardCell.hit && boardCell.ship ? 'cell-ship' : null}   `}
          >
            {boardCell.ship ? 'ship' : 'water'}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComputerBoard;
