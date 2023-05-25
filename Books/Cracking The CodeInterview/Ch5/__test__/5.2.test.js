import binaryToSring from "../5.2";

test("Binary to String", () => {
  expect(binaryToSring(0.72)).toBe("ERROR");
});
test("Binary to String", () => {
  expect(binaryToSring(0.75)).toBe("0.11");
});
test("Binary to String", () => {
  expect(binaryToSring(0.625)).toBe("0.101");
});
