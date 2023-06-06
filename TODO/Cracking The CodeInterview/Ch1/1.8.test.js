import zeroMatrix from './1.8'
test('zero matrix', () => {
  expect(
    zeroMatrix([
      [1, 2, 3],
      [4, 0, 5],
      [6, 7, 8],
    ])
  ).toStrictEqual([
    [1, 0, 3],
    [0, 0, 0],
    [6, 0, 8],
  ])
})
test('zero matrix', () => {
  expect(
    zeroMatrix([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
    ])
  ).toStrictEqual([
    [0, 0, 0],
    [0, 4, 5],
    [0, 7, 8],
  ])
})
