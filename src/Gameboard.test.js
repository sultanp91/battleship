import gameboardFactory from './Gameboard';
import shipFactory from './ship';

test('Board array populates correctly', () => {
  const Board1 = gameboardFactory();
  expect(Board1.boardArray[99]).toEqual({
    positionTaken: false,
    hit: false,
  });
});

test('Ships can be placed correctly', () => {
  const Board1 = gameboardFactory();

  Board1.placeShip(3, 2);
  expect(Board1.boardArray[2]).toEqual({
    positionTaken: true,
    ship: true,
    hit: false,
  });
});
