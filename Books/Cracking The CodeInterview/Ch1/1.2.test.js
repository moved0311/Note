import checkPermutation from './1.2'

test('abcd if permutation of cdab -> true', () => {
  expect(checkPermutation('abcd', 'cdab')).toBe(true)
})
test('xyz if permutation of abc -> false', () => {
  expect(checkPermutation('xyz', 'abc')).toBe(false)
})
test('xyzz if permutation of zyzx -> true', () => {
  expect(checkPermutation('xyzz', 'zyzx')).toBe(true)
})
test('xyzzx if permutation of zyzx -> true', () => {
  expect(checkPermutation('xyzzx', 'zyzx')).toBe(false)
})
