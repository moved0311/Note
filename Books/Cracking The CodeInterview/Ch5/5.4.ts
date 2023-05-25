/**
 * Next Number: Given a positive integer, print the next smallest and the next largest number that have the same number of 1 bits in their binary representation.
 * @param {number} num
 * @returns {number}
 */

// hint 175: 找到01轉換成10
// https://github.com/sonugiri1043/Cracking-The-Coding-Interview/blob/master/5-Bit-Manipulation/4-Next-Number.cpp

const nextNumber = (num: number) => {
  // 1. find 01
  let pos = 0;
  let tmp = num;
  let isFindOne = false;
  let isFindZeroOne = false;
  while (pos < 31) {
    if ((tmp & 1) === 1) {
      isFindOne = true;
    } else {
      if (isFindOne) {
        isFindZeroOne = true;
        break;
      }
    }
    pos++;
    tmp = tmp >> 1;
  }

  if (!isFindZeroOne) return -1;

  // 2. swap 01 -> 10
  let mask = 0x3 << (pos - 1);
  num = num ^ mask;

  return num;
};

console.log(nextNumber(15)); // 01111 -> 10111 (23)
console.log(nextNumber(20)); // 10100 -> 11000 (24)

export default nextNumber;
