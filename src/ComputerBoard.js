import React, { useEffect, useState } from 'react';

function ComputerBoard({ player2, setPlayer2, playRound }) {
  const hitColor = { color: 'red' };
  const notHitColor = { color: 'blue' };

  useEffect(() => {
    let playerCopy2 = Object.assign({}, player2);
    playerCopy2.randomPlacement();
    setPlayer2(playerCopy2);
  }, []);

  return (
    <div>
      <div className='gameboard'>
        {player2.board.boardArray.map((boardCell, index) => (
          <div
            onClick={(e) => playRound(e)}
            style={boardCell.hit ? hitColor : notHitColor}
            data-index={index}
            data-hit={boardCell.hit}
            // className={boardCell.ship ? 'ship' : 'water'}
          >
            {boardCell.ship ? 'ship' : 'water'}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComputerBoard;
