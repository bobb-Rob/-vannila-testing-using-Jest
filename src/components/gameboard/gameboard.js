// import shipFactory from "../../shipFactory";

const Gameboard = (gameboard = []) => {
  let board = gameboard;

  const init = () => {
    for (let i = 0; i < 100; i++) {
      board.push({ hasShip: false, isShot: false });
    }
  };
  if (!board.length) init();
  return { board };
};

export default Gameboard;
