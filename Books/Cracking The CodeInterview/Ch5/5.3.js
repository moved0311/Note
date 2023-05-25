/*
Flip Bit to Win: You have an integer and you can flip exactly one bit from a 0 to a 1. Write code to find the length of the longest sequence of ls you could create.
EXAMPLE
Input: 1775 (or: 11011101111) Output: 8
*/

const flipBit = (num) => {
  let binary = num.toString(2);
  let compress = [];
  let count = 0;
  let flag = false;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      flag = true;
      count += 1;
    } else {
      if (flag) compress.push(count);
      compress.push(0);
      flag = false;
      count = 0;
    }
    if (i === binary.length - 1 && count > 0) {
      compress.push(count);
    }
  }

  // compress : 11011101111   -> [ 2, 0, 3, 0, 4 ]
  //            1101111001111 -> [ 2, 0, 4, 0, 0, 4 ]

  let max = 0;
  for (let i = 1; i < compress.length - 1; i++) {
    if (compress[i] === 0 && compress[i - 1] !== 0 && compress[i + 1] !== 0) {
      max = Math.max(compress[i - 1] + 1 + compress[i + 1], max);
    }
  }

  return max;
};

module.exports = flipBit;
