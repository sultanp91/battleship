import React, { useState } from 'react';
import './App.css';
import playerFactory from './Player';
import gameboard from './Gameboard';

function App() {
  const [player1, setPlayer1] = useState(
    playerFactory('Player 1', true, false)
  );

  const placeShip = () => {
    let playerCopy = Object.assign({}, player1);
    playerCopy.board.placeShip(3, 3, true);

    setPlayer1(playerCopy);
  };

  return (
    <div className='App'>
      <button onClick={() => placeShip()}>Place ship</button>
      <h1>Battleship</h1>
      <div className='gameboard'>
        {player1.board.boardArray.map((boardCell) => (
          <div className={boardCell.ship ? 'ship' : 'water'}>
            {boardCell.ship ? 'ship' : 'water'}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
