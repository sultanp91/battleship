import gameboardFactory from './Gameboard';

test('Board array populates correctly', () => {
  const Board1 = gameboardFactory();
  Board1.initBoard();
  expect(Board1.boardArray[0]).toEqual({
    positionTaken: false,
    hit: false,
  });
});

test('Ships will receive attack', () => {
  const Board1 = gameboardFactory();

  Board1.placeShip(this.ship1, 2);
  expect(Board1.boardArray[3]).toEqual({ currentShip: this.ship1, hit: false });
});
