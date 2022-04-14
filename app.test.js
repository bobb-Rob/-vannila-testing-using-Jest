import sum from "./app";
import fetchData from "./peanut-butter";

test("3 + 4 equals 7", () => {
  expect(sum(3, 4)).toBe(7);
});

test("the return data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe("peanut butter");
  });
});
