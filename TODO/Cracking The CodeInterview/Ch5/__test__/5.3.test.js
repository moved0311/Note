import flipBit from "../5.3";

test("Flip Bit", () => {
  expect(flipBit(0b11011101111)).toBe(8);
});
test("Flip Bit", () => {
  expect(flipBit(0b1101111001111)).toBe(7);
});
