import React, { useState, useEffect } from 'react';
import './App.css';
import playerFactory from './Factories/Player';
import ComputerBoard from './ComputerBoard';
import PlayerBoard from './PlayerBoard';
import GameInfo from './GameInfo';
import Header from './Header';
import ShipPlacer from './ShipPlacer';

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
    setGameOver(true);
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
    if (index > 4 && gameOver) {
      setShipsPlaced(true);
      setGameOver(false);
    }
  }, [index]);
  useEffect;
  return (
    <div className='App'>
      <Header />
      <GameInfo winner={winner} gameOver={gameOver} shipsPlaced={shipsPlaced} />
      <div className='gameboard-container'>
        <div className='player-board'>
          <PlayerBoard
            player1={player1}
            setPlayer1={setPlayer1}
            playerPlacement={playerPlacement}
            shipsPlaced={shipsPlaced}
            horizontal={horizontal}
            setHorizontal={setHorizontal}
            index={index}
          />
        </div>
        <ComputerBoard
          className='gameboard-container'
          player2={player2}
          setPlayer2={setPlayer2}
          playRound={playRound}
        />
      </div>
      <button className='reset-button' onClick={resetGame}>
        New Game
      </button>
    </div>
  );
}

export default App;
