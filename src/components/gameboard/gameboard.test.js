import Gameboard from "./gameboard";

describe("Gameboard functions", () => {
  let testBoard;
  beforeEach(() => {
    testBoard = Gameboard();
  });

  test("Initialize a gameboard with the right amount of cells", () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push({ hasShip: false, isShot: false });
    }
    expect(testBoard.board).toEqual(arr);
  });
});
