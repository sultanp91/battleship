import React from 'react';

function PlayerBoard({ player1, setPlayer1, playerPlacement, horizontal }) {
  const hitColor = { color: 'red' };
  const notHitColor = { color: 'blue' };
  return (
    <div>
      <div className='gameboard'>
        {player1.board.boardArray.map((boardCell, index) => (
          <div
            onClick={(e) => playerPlacement(e)}
            style={boardCell.hit ? hitColor : notHitColor}
            data-index={index}
            // className={boardCell.ship ? 'ship' : 'water'}
          >
            {boardCell.ship ? 'ship' : 'water'}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlayerBoard;
