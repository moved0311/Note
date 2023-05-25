/*
Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you 
cannot use additional data structures? 
*/

const isUnique = (s) => {
  let hash = {}
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    hash[char] = (hash[char] || 0) + 1
    if (hash[char] > 1) return false
  }
  return true
}
/*
	time complexity : O(n)
	space complexity: O(n)
*/
module.exports = isUnique
