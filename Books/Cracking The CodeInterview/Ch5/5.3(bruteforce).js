/*
Flip Bit to Win: You have an integer and you can flip exactly one bit from a 0 to a 1. Write code to find the length of the longest sequence of ls you could create.
EXAMPLE
Input: 1775 (or: 11011101111) Output: 8
*/
const countLongestOne = (str) => {
  let max = 0;
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") {
      count += 1;
    } else {
      count = 0;
    }
    max = Math.max(max, count);
  }
  return max;
};
const flipBit = (num) => {
  let binary = num.toString(2);
  let max = 0;
  for (let i = 0; i < binary.length; i++) {
    let clone = binary.split("");
    if (clone[i] === "0") {
      clone[i] = "1";
      max = Math.max(max, countLongestOne(clone.join("")));
    }
  }
  return max;
};
console.log(flipBit(1775));

module.exports = flipBit;

// Time complexity : O(n^2), Space complexity: O(2n)
