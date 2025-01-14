/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
 export default function countCats(matrix) {
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    const column = matrix[i];

    for (let j = 0; j < column.length; j++) {
      if (column[j] === '^^') {
        count += 1;
      }
    }
  }

  return count;
  // remove line with error and write your code here
}