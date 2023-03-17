/*
 * @lc app=leetcode id=260 lang=typescript
 *
 * [260] Single Number III
 */

// @lc code=start
function singleNumber(nums: number[]): number[] {
  let xorAll = 0;
  nums.map((v) => (xorAll ^= v));

  let lastSetBit = (xorAll & (xorAll - 1)) ^ xorAll;

  let [a, b] = [0, 0];
  nums.forEach((v) => {
    if (v & lastSetBit) a ^= v;
    else b ^= v;
  });

  return [a, b];
}
// @lc code=end

console.log(singleNumber([1, 2, 1, 3, 2, 5])); // [3, 5]
// console.log(singleNumber([2, 1, 2, 3, 4, 1])); // [3, 4]

/*
 1. Time: O(n), Space: O(n) 
  const dict: { [key: string]: number } = {};
  nums.map((n) => (dict[n] = (dict[n] || 0) + 1));

  const result = Object.keys(dict)
    .filter((key) => dict[key] === 1)
    .map((v) => parseInt(v));
*/

/*
  2. Time: O(1), Space: O(1)
  https://leetcode.com/problems/single-number-iii/solutions/68921/c-solution-o-n-time-and-o-1-space-easy-understaning-with-simple-explanation/

  剛好有兩個不同的數值a和b,將全部數做xor運算會等於a xor b
  1: 001
  2: 010
  1: 001
  3: 011
  2: 010
  5: 101
  1 ^ 2 ^ 1 ^ 3 ^ 2 ^ 5 ^ 1 = 3 ^ 5 = 6 (110)
  xor特性是不同數值做xor為1, 同數值做xor是0,所以可以用1來做分群
  以6(110)為例子,可以使用100或是010做為區分兩群的數字

  已010區分
  可以分為(001,001,101), (010,011,010)兩群
  001 ^ 001 ^ 101 = 5
  010 ^ 011 ^ 010 = 3

  已100區分
  可以分為(101), (010,011,010,001,001)兩群
  101 = 5
  010 ^ 011 ^ 010 ^ 001 ^ 001 = 3
*/
