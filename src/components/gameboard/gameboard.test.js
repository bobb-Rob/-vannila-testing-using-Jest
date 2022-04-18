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

  test("Update cells that receive attack", () => {
    testBoard.receiveAttack(45);
    expect(testBoard.board[45].isShot).toBe(true);
  });
});
