/*
 * @lc app=leetcode id=861 lang=typescript
 *
 * [861] Score After Flipping Matrix
 */

// @lc code=start
function matrixScore(grid: number[][]): number {
  let res = 0;
  const rows = grid.length;
  const cols = grid[0].length;

  // flip first digit to 1.
  for (let r = 0; r < rows; r++) {
    if (grid[r][0] === 0) {
      for (let c = 0; c < cols; c++) {
        grid[r][c] = 1 - grid[r][c];
      }
    }
  }

  let pos = cols - 1;

  for (let c = 0; c < cols; c++) {
    let count = 0;

    for (let r = 0; r < rows; r++) {
      if (grid[r][c] === 1) count++;
    }

    res += Math.pow(2, pos) * Math.max(count, rows - count);
    pos--;
  }

  return res;
}
// @lc code=end

console.log(
  matrixScore([
    [0, 0, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
  ])
);

console.log(matrixScore([[]]));
