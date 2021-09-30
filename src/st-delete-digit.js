/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 215, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const str = String(n);
  let min = Number(str[0]);

  for (let i = 1; i < str.length; i++) {
    const num = Number(str[i]);
    if (min > num) {
      min = num;
    }
  }

  const index = str.indexOf(String(min));
  const result = str.slice(0, index) + str.slice(index + 1);

  return Number(result)
} 

