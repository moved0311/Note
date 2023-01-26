/*
 * @lc app=leetcode id=1329 lang=typescript
 *
 * [1329] Sort the Matrix Diagonally
 * 給一組二維陣列,每一組對角線做排序
 */

// @lc code=start
function swap(mat: number[][], i1: number, j1: number, i2: number, j2: number): void {
  let tmp = mat[i1][j1];
  mat[i1][j1] = mat[i2][j2];
  mat[i2][j2] = tmp;
}

function diagonalSort(mat: number[][]): number[][] {
  const m = mat[0].length;
  const n = mat.length;

  const groups: number[][] = Array.from({ length: m + n - 1 }).fill([]);

  console.log(groups);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      groups[j - i].push(mat[i][j]);
    }
  }

  console.log(groups);

  return mat;
}
// @lc code=end

console.log(
  diagonalSort([
    [3, 3, 1, 1],
    [2, 2, 1, 2],
    [1, 1, 1, 2],
  ])
); // [[1,1,1,1],[1,2,2,2],[1,2,3,3]]
