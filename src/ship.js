export default function shipFactory(length) {
  const shipLength = length;

  let shipLife = length;

  const hit = function () {
    this.shipLife--;
  };
  const isSunk = function () {
    if (this.shipLife < 1) {
      return true;
    } else if (this.shipLife > 0) {
      return false;
    }
  };

  return { shipLife, hit, isSunk };
}
