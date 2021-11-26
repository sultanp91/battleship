/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ShipPlacer from "./ShipPlacer";

function PlayerBoard({
  player1,
  setPlayer1,
  shipsPlaced,
  playerPlacement,
  horizontal,
  setHorizontal,
  index,
}) {
  return (
    <div className="player-board">
      {!shipsPlaced && (
        <ShipPlacer
          setHorizontal={setHorizontal}
          horizontal={horizontal}
          index={index}
          player1={player1}
        />
      )}
      <div className="board-wrapper">
        <div className="gameboard">
          {player1.board.boardArray.map((boardCell, index) => (
            <div
              onClick={(e) => playerPlacement(e)}
              data-index={index}
              className={`cell ${
                boardCell.hit && boardCell.ship ? "cell-ship-hit" : null
              }
              ${boardCell.hit && !boardCell.ship ? "cell-water-hit" : null}
              ${boardCell.ship ? "cell-ship" : "cell-water"}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlayerBoard;
