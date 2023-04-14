/*
 * @lc app=leetcode id=921 lang=typescript
 *
 * [921] Minimum Add to Make Parentheses Valid
 */

// @lc code=start
function minAddToMakeValid(s: string): number {
  const [left, right] = s.split("").reduce(
    (res, ch: string) => {
      if (ch === "(") res[0] += 1;
      if (ch === ")") res[1] += 1;

      return res;
    },
    [0, 0]
  );

  return Math.abs(left - right);
}
// @lc code=end

console.log(minAddToMakeValid("())")); // 1
console.log(minAddToMakeValid(")))")); // 3
console.log(minAddToMakeValid("()))((")); // 4
