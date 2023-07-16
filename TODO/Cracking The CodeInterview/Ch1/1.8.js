/*
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and 
column are set to 0. 
*/
const zeroMatrix = (matrix) => {
  let rowsIdx = []
  let colsIdx = []
  let rows = matrix.length
  let cols = matrix[0].length
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (matrix[row][col] === 0) {
        rowsIdx.push(row)
        colsIdx.push(col)
      }
    }
  }
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (rowsIdx.includes(row) || colsIdx.includes(col)) {
        matrix[row][col] = 0
      }
    }
  }
  return matrix
}
module.exports = zeroMatrix
