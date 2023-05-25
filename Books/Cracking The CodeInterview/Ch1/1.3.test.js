import urlify from './1.3'

test('urlify', () => {
  expect(urlify('Mr John Smith    ')).toBe('Mr%20John%20Smith')
})
