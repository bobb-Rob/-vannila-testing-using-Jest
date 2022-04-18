import shipFactory from "./battleship";

test("hit function test", () => {
  const submarine = shipFactory("submarine", 4);
  submarine.hit(2, submarine.shipArr);
  expect(submarine.shipArr).toEqual([undefined, undefined, "hit", undefined]);
});

test("isSunk function test", () => {
  const submarine = shipFactory("submarine", 6);
  submarine.hit(2, submarine.shipArr);
  expect(submarine.isSunk(submarine.shipArr)).toBeFalsy();
});
