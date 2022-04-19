import ShipFactory from "./shipFactory.js";

describe("ship Factory Functions", () => {
  let submarine;
  beforeEach(() => {
    submarine = ShipFactory("submarine", [4, 5, 6, 7, 8]);
  });

  test("hit function test", () => {
    submarine.hit(4);
    expect(submarine.hits[0]).toBe(4);
  });

  test("isSunk function test", () => {
    submarine.hit(4);
    submarine.hit(5);
    submarine.hit(6);
    submarine.hit(7);
    submarine.hit(8);

    expect(submarine.isSunk()).toBe(true);
  });
});
