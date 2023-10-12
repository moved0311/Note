/*
Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4 
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
  123    741
  456 -> 852
  789    963

  1  2  3  4      13  9 5 1
  5  6  7  8  ->  14 10 6 2
  9 10 11 12      15 11 7 3
 13 14 15 16      16 12 8 4
*/
const rotateMatrix = (matrix) => {
  let n = matrix.length
  for (let layer = 0; layer < Math.floor(n / 2); layer++) {
    let first = layer
    let last = n - 1 - layer
    for (let i = first; i < last; i++) {
      let top = matrix[first][i]
      let offset = i - first
      // left -> top
      matrix[first][i] = matrix[last - offset][first]
      // bottom -> left
      matrix[last - offset][first] = matrix[last][last - offset]
      // right -> bottom
      matrix[last][last - offset] = matrix[i][last]
      // top -> right
      matrix[i][last] = top
    }
  }
  return matrix
}

module.exports = rotateMatrix
