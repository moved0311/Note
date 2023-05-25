import isUnique from './1.1'

test('abcd is unique = true', () => {
  expect(isUnique('abcd')).toBe(true)
})
test('abcdd is unique = false', () => {
  expect(isUnique('abcdd')).toBe(false)
})
