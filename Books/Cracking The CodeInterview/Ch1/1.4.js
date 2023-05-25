/*
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. 
A palindrome is a word or phrase that is the same forwards and backwards. A permutation 
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. 
*/

/*
1. build hash table
2. if there are zero or one odd letter return true
   else return false
*/
const isPalindromeAndPermutation = (s) => {
  s = s.replace(' ', '').toLowerCase()
  let hash = {}
  for (let char of s) {
    hash[char] = ((hash[char] || 0) + 1) % 2
  }
  let countOdd = 0
  for (let v of Object.values(hash)) {
    if (v === 1) countOdd += 1
  }

  return countOdd > 1 ? false : true
}
/*
	time complexity: O(n)
	space complexity: O(n)
*/
module.exports = isPalindromeAndPermutation
