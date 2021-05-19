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

  const hitShip = (e) => {
    let playerCopy = Object.assign({}, player1);
    let index = e.target.dataset.index;
    playerCopy.board.receiveAttack(index);
    setPlayer1(playerCopy);
  };

  const hitColor = { color: 'red' };
  const notHitColor = { color: 'blue' };

  return (
    <div className='App'>
      <button onClick={() => placeShip()}>Place ship</button>
      <h1>Battleship</h1>
      <div className='gameboard'>
        {player1.board.boardArray.map((boardCell, index) => (
          <div
            onClick={(e) => hitShip(e)}
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

export default App;
