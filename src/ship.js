export default function shipFactory(length) {
  const shipLength = length;

  let shipLife = length;

  const hit = function () {
    this.shipLife--;
  };
  const isSunk = function () {
    return this.shipLife < 1 ? true : false;
  };

  return { shipLength, hit, isSunk };
}
