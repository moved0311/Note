/*
 * @lc app=leetcode id=260 lang=typescript
 *
 * [260] Single Number III
 */

// @lc code=start
function singleNumber(nums: number[]): number[] {
  let xorAll = 0;
  nums.map((v) => (xorAll ^= v));

  let lastSetBit = xorAll & (xorAll - 1);

  let [a, b] = [0, 0];
  nums.forEach((v) => {
    if (v & lastSetBit) a ^= v;
    else b ^= v;
  });

  return [a, b];
}
// @lc code=end

console.log(singleNumber([1, 2, 1, 3, 2, 5]));

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

*/
