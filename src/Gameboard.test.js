import Gameboard from './Gameboard';
import shipFactory from './ship';

test('Ships will receieve attack', () => {
  const Board1 = Gameboard();

  Board1.placeShip(Board1.ship1, 2);

  expect(Board1.boardArray[2]).toEqual({ currentShip: ship1, hit: false });
});
