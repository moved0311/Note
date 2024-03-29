import rotateMatrix from './1.7'
test('rotate matrix', () => {
  expect(
    rotateMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ])
  ).toStrictEqual([
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3],
  ])
})
test('rotate matrix', () => {
  expect(
    rotateMatrix([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ])
  ).toStrictEqual([
    [13, 9, 5, 1],
    [14, 10, 6, 2],
    [15, 11, 7, 3],
    [16, 12, 8, 4],
  ])
})
