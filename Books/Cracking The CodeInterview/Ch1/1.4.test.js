import isPalindromeAndPermutation from './1.4'

test('isPalindromeAndPermutation', () => {
  expect(isPalindromeAndPermutation('Tact Coa')).toBe(true)
})
test('isPalindromeAndPermutation', () => {
  expect(isPalindromeAndPermutation('TAOTAC')).toBe(false)
})
