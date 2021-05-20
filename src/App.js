import React, { useState, useEffect } from 'react';
import './App.css';
import playerFactory from './Player';

function App() {
  const [player1, setPlayer1] = useState(playerFactory('Player 1'));

  const [player2, setPlayer2] = useState(playerFactory('Player 2'));

  const [winner, setWinner] = useState(null);

  const placeShip = () => {
    let playerCopy1 = Object.assign({}, player1);
    playerCopy1.board.placeShip(3, 3, true);
    playerCopy1.board.placeShip(3, 20, false);
    setPlayer1(playerCopy1);
    let playerCopy2 = Object.assign({}, player2);
    playerCopy2.board.placeShip(3, 3, true);
    playerCopy2.board.placeShip(3, 20, false);
    setPlayer2(playerCopy2);
  };

  const playRound = (e) => {
    let playerCopy2 = Object.assign({}, player2);
    let index = e.target.dataset.index;
    playerCopy2.board.receiveAttack(index);
    let playerCopy1 = Object.assign({}, player1);
    playerCopy2.randomMove(playerCopy1.board);
    setPlayer2(playerCopy2);
    setPlayer1(playerCopy1);
  };

  const hitColor = { color: 'red' };
  const notHitColor = { color: 'blue' };

  useEffect(() => {
    if (player1.board.shipsSunk()) {
      setWinner(player2.playerName);
    } else if (player2.board.shipsSunk()) {
      setWinner(player1.playerName);
    } else if (!player2.board.shipsSunk() && !player1.board.shipsSunk()) {
      setWinner('No Winner yet!');
    }
  }, [player1, player2]);
  return (
    <div className='App'>
      <button onClick={() => placeShip()}>Place ship</button>
      <h1>Battleship</h1>
      <h2>Winner: {winner}</h2>
      <h2>
        Player 1 {player1.board.shipsSunk() ? 'ships sunk' : 'still floating'}
      </h2>
      <div className='gameboard'>
        {player1.board.boardArray.map((boardCell, index) => (
          <div
            style={boardCell.hit ? hitColor : notHitColor}
            data-index={index}
            // className={boardCell.ship ? 'ship' : 'water'}
          >
            {boardCell.ship ? 'ship' : 'water'}
          </div>
        ))}
      </div>
      <h1>board 2</h1>
      <div className='gameboard'>
        {player2.board.boardArray.map((boardCell, index) => (
          <div
            onClick={(e) => playRound(e)}
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
