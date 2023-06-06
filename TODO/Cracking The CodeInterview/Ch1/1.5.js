/*
One Away: There are three types of edits that can be performed on strings: insert a character, 
remove a character, or replace a character. Given two strings, write a function to check if they are 
one edit (or zero edits) away. 
EXAMPLE:  
pale, ple -> true 
pales, pale -> true 
pale, bale -> true 
pale, bake -> false 
*/

const oneAway = (s1, s2) => {
  if (s1.length === s2.length) {
    return replace(s1, s2)
  } else if (s1.length + 1 === s2.length) {
    return insert(s1, s2)
  } else if (s1.length - 1 === s2.length) {
    return insert(s2, s1)
  }
  return false
}
const replace = (s1, s2) => {
  let foundDifference = false
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      if (foundDifference) return false
      foundDifference = true
    }
  }
  return true
}
const insert = (s1, s2) => {
  let index1 = 0
  let index2 = 0
  while (index1 < s1.length && index2 < s2.length) {
    if (s1[index1] !== s2[index2]) {
      if (index1 !== index2) return false
      index2++
    } else {
      index1++
      index2++
    }
  }
  return true
}

module.exports = oneAway
