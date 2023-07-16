import insertion from "../5.1";

test("insertion", () => {
  expect(insertion(0b10000000000, 0b10011, 2, 6)).toBe(0b10001001100);
});
