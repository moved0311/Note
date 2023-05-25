import stringCompression from './1.6'

test('string compression', () => {
  expect(stringCompression('aabcccccaaa')).toBe('a2b1c5a3')
})
test('string compression', () => {
  expect(stringCompression('aaaaaa')).toBe('a6')
})
test('string compression', () => {
  expect(stringCompression('aabbbccddd')).toBe('a2b3c2d3')
})
test('string compression', () => {
  expect(stringCompression('aabbcc')).toBe('aabbcc')
})
