export default function shipFactory(length) {
  const shipLength = length;

  let shipLife = length;

  const hit = function () {
    shipLife--;
  };
  const isSunk = function () {
    return shipLife < 1 ? true : false;
  };

  return { shipLength, hit, isSunk };
}
