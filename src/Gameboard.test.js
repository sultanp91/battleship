import gameboardFactory from './Gameboard';
import shipFactory from './ship';

test('Board array populates correctly', () => {
  const Board1 = gameboardFactory();
  expect(Board1.boardArray[99]).toEqual({
    ship: false,
    hit: false,
  });
});

test('Ships can be placed correctly', () => {
  const Board1 = gameboardFactory();
  Board1.placeShip(3, 2);
  expect(Board1.boardArray[2].currentShip.shipLength).toBe(3);
});

test('Ships are being sent to ship Array', () => {
  const Board1 = gameboardFactory();
  Board1.placeShip(3, 2);
  expect(Board1.shipArray[0].shipLength).toBe(3);
});

test('Hits are registering on ship objects on board', () => {
  const Board1 = gameboardFactory();
  Board1.placeShip(3, 2);
  Board1.boardArray[2].currentShip.hit();
  Board1.boardArray[2].currentShip.hit();
  Board1.boardArray[2].currentShip.hit();
  expect(Board1.boardArray[2].currentShip.isSunk()).toBe(true);
});

test('Hits are registering on ship objects on ship array', () => {
  const Board1 = gameboardFactory();
  Board1.placeShip(3, 2);
  Board1.boardArray[2].currentShip.hit();
  Board1.boardArray[2].currentShip.hit();
  Board1.boardArray[2].currentShip.hit();
  expect(Board1.shipArray[0].isSunk()).toBe(true);
});

test('shipsSunk function is working correctly (single ship)', () => {
  const Board1 = gameboardFactory();
  Board1.placeShip(3, 2);
  Board1.boardArray[2].currentShip.hit();
  Board1.boardArray[2].currentShip.hit();
  Board1.boardArray[2].currentShip.hit();
  expect(Board1.shipsSunk()).toBe(true);
});

test('shipsSunk function is working correctly (single ship)', () => {
  const Board1 = gameboardFactory();
  Board1.placeShip(3, 2);
  Board1.boardArray[2].currentShip.hit();
  Board1.boardArray[2].currentShip.hit();
  expect(Board1.shipsSunk()).toBe(false);
});

test('shipsSunk function is working correctly (multiple ships)', () => {
  const Board1 = gameboardFactory();
  Board1.placeShip(1, 2);
  Board1.placeShip(1, 4);
  Board1.boardArray[2].currentShip.hit();
  Board1.boardArray[4].currentShip.hit();
  expect(Board1.shipsSunk()).toBe(true);
});

test('shipsSunk function is working correctly (multiple ships)', () => {
  const Board1 = gameboardFactory();
  Board1.placeShip(2, 1);
  Board1.placeShip(1, 4);
  Board1.boardArray[2].currentShip.hit();
  Board1.boardArray[4].currentShip.hit();
  expect(Board1.shipsSunk()).toBe(false);
});
