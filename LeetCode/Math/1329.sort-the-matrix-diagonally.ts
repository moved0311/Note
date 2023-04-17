/*
 * @lc app=leetcode id=1329 lang=typescript
 *
 * [1329] Sort the Matrix Diagonally
 * 給一組二維陣列,每一組對角線做排序
 */

// @lc code=start
function diagonalSort(mat: number[][]): number[][] {
  const m = mat[0].length;
  const n = mat.length;
  const groups: { [key: string]: number[] } = {};

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let key = (j - i).toString();
      if (groups[key]) {
        groups[key].push(mat[i][j]);
      } else {
        groups[key] = [mat[i][j]];
      }
    }
  }
  // sort groups
  Object.values(groups).map((g) => g.sort((a, b) => b - a));

  // fill
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let key = (j - i).toString();
      mat[i][j] = groups[key].pop() || 0;
    }
  }

  return mat;
}
// @lc code=end

// console.log(
//   diagonalSort([
//     [3, 3, 1, 1],
//     [2, 2, 1, 2],
//     [1, 1, 1, 2],
//   ])
// );
// console.log(
//   diagonalSort([
//     [11, 25, 66, 1, 69, 7],
//     [23, 55, 17, 45, 15, 52],
//     [75, 31, 36, 44, 58, 8],
//     [22, 27, 33, 25, 68, 4],
//     [84, 28, 14, 11, 5, 50],
//   ])
// );
