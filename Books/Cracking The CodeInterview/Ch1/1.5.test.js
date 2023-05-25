import oneAway from './1.5'

test('oneAway case1', () => {
  expect(oneAway('pale', 'ple')).toBe(true)
})
test('oneAway case2', () => {
  expect(oneAway('pales', 'pale')).toBe(true)
})
test('oneAway case3', () => {
  expect(oneAway('pale', 'bale')).toBe(true)
})
test('oneAway case4', () => {
  expect(oneAway('pale', 'bake')).toBe(false)
})
test('oneAway case5', () => {
  expect(oneAway('abc', 'cba')).toBe(false)
})
