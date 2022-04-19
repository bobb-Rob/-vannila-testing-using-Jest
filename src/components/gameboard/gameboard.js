// import ShipFactory from "../../shipFactory";

const Gameboard = (gameboard = []) => {
  let board = gameboard;

  const init = () => {
    for (let i = 0; i < 100; i++) {
      board.push({ hasShip: false, isShot: false });
    }
  };

  if (!board.length) init();

  function receiveAttack(index) {
    board[index].isShot = true;
  }

  function checkIfShotHit(position) {
    return board[position].hasShip;
  }

  const createShipCordinates = (location, ship, axis) => {
    const coordinates = [];
    for (let i = 0; i < ship.length; i++) {
      axis === "X"
        ? coordinates.push(location + i)
        : coordinates.push(location + i * 10);
    }
    return coordinates;
  };

  return { board, receiveAttack, checkIfShotHit, createShipCordinates };
};

export default Gameboard;
