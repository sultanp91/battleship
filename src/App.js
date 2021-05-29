import React, { useState, useEffect } from 'react';
import './App.css';
import playerFactory from './Factories/Player';
import ComputerBoard from './ComputerBoard';
import PlayerBoard from './PlayerBoard';
import GameInfo from './GameInfo';

function App() {
  const [player1, setPlayer1] = useState(playerFactory('Player 1'));

  const [player2, setPlayer2] = useState(playerFactory('Computer'));

  const [horizontal, setHorizontal] = useState(true);

  const [index, setIndex] = useState(0);

  const [winner, setWinner] = useState(null);

  const [gameOver, setGameOver] = useState(true);

  const [shipsPlaced, setShipsPlaced] = useState(false);

  const playerPlacement = (e) => {
    if (!shipsPlaced && gameOver) {
      let playerCopy1 = Object.assign({}, player1);
      if (
        playerCopy1.board.placeShip(
          playerCopy1.shipLengths[index],
          parseInt(e.target.dataset.index),
          horizontal
        )
      ) {
        setPlayer1(playerCopy1);
        setIndex(index + 1);
      }
    }
  };

  const resetGame = () => {
    setPlayer1(playerFactory('Player 1'));
    let playerCopy2 = playerFactory('Computer');
    playerCopy2.randomPlacement();
    setPlayer2(playerCopy2);
    setShipsPlaced(false);
    setIndex(0);
    setWinner(null);
  };

  const playRound = (e) => {
    if (!gameOver && e.target.dataset.hit === 'false') {
      let playerCopy2 = Object.assign({}, player2);
      let index = e.target.dataset.index;
      playerCopy2.board.receiveAttack(index);
      let playerCopy1 = Object.assign({}, player1);
      playerCopy1.randomMove();
      setPlayer2(playerCopy2);
      setPlayer1(playerCopy1);
    }
  };

  useEffect(() => {
    if (player1.board.shipsSunk()) {
      setWinner(player2.playerName);
      setGameOver(true);
    } else if (player2.board.shipsSunk()) {
      setWinner(player1.playerName);
      setGameOver(true);
    } else if (!player2.board.shipsSunk() && !player1.board.shipsSunk()) {
      setWinner('No Winner yet!');
    }
  }, [player1, player2]);

  useEffect(() => {
    if (index > 4) {
      setShipsPlaced(true);
      setGameOver(false);
    }
  }, [index]);
  useEffect;
  return (
    <div className='App'>
      {!shipsPlaced && (
        <button type='button' onClick={() => setHorizontal(!horizontal)}>
          Toggle Horizontal
        </button>
      )}
      <button onClick={resetGame}>Reset Game</button>
      <h1>Battleship</h1>
      <h2>Winner: {winner}</h2>
      <h2>
        Player 1 {player1.board.shipsSunk() ? 'ships sunk' : 'still floating'}
      </h2>
      <GameInfo gameOver={gameOver} shipsPlaced={shipsPlaced} />
      <div className='gameboard-container'>
        <PlayerBoard
          player1={player1}
          setPlayer1={setPlayer1}
          playerPlacement={playerPlacement}
          shipsPlaced={shipsPlaced}
          horizontal={horizontal}
        />
        <ComputerBoard
          className='gameboard-container'
          player2={player2}
          setPlayer2={setPlayer2}
          playRound={playRound}
        />
      </div>
    </div>
  );
}

export default App;
