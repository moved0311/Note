/*
Check Permutation: Given two strings, write a method to decide if one is a permutation of the 
other.
*/
const checkPermutation = (s1, s2) => {
  // if len of s1 and s2 are different, return false
  if (s1.length !== s2.length) return false

  let s1Arr = s1.split('').sort()
  let s2Arr = s2.split('').sort()

  for (let i = 0; i < s1Arr.length; i++) {
    if (s1Arr[i] !== s2Arr[i]) return false
  }
  return true
}
/*
	time complexity : O(n)
	space complexity: O(n)
*/
module.exports = checkPermutation
