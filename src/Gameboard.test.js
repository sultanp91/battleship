import gameboardFactory from './Gameboard';
import shipFactory from './ship';

test('Board array populates correctly', () => {
  const Board1 = gameboardFactory();
  expect(Board1.boardArray[99]).toEqual({
    ship: false,
    hit: false,
  });
});

test('Ships can be placed correctly (correct parameters)', () => {
  const Board1 = gameboardFactory();
  Board1.placeShip(3, 2);
  expect(Board1.boardArray[2].currentShip.shipLength).toBe(3);
});

test('Ships can be placed correctly (incorrect parameters - wont fit board)', () => {
  const Board1 = gameboardFactory();
  Board1.placeShip(5, 8);
  expect(Board1.boardArray[8].ship).toBe(false);
});

test("Ships can't be placed if one of the positions have already been occupied", () => {
  const Board1 = gameboardFactory();
  Board1.placeShip(0, 5);
  Board1.placeShip(4, 3);
  expect(Board1.boardArray[7].ship).toBe(false);
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

test('Receive attack function is working correctly - both hits land', () => {
  const Board1 = gameboardFactory();
  Board1.placeShip(2, 2);
  Board1.receiveAttack(2);
  Board1.receiveAttack(3);
  expect(Board1.shipArray[0].isSunk()).toBe(true);
});

test('Receive attack function is working correctly - only one hit lands', () => {
  const Board1 = gameboardFactory();
  Board1.placeShip(2, 2);
  Board1.receiveAttack(2);
  Board1.receiveAttack(4);
  expect(Board1.shipArray[0].isSunk()).toBe(false);
});

test('Receive attack function is working correctly - multiple hits on one location', () => {
  const Board1 = gameboardFactory();
  Board1.placeShip(2, 2);
  Board1.receiveAttack(2);
  Board1.receiveAttack(2);
  expect(Board1.shipArray[0].isSunk()).toBe(false);
});
