/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  let result = n;
  
  while (result >= 10) {
    let sum = 0;
    const str = String(result);

    for (let i = 0; i < str.length; i++) {
      sum = sum + Number(str[i]);
    }

    result = sum;
  }

return result;


  // if (result < 10) {
  //   return result;
  // } else {
  //   return getSumOfDigits(result);
  // }
}

