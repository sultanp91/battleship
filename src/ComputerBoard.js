import React from 'react';

function ComputerBoard({ player2, playRound }) {
  const hitColor = { color: 'red' };
  const notHitColor = { color: 'blue' };
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
      <h1>Duplicate Board</h1>
    </div>
  );
}

export default ComputerBoard;
