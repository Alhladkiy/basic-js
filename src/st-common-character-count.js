/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
    let result = 0;
    let string = s2;

    for (let i = 0; i < s1.length; i++) {
      for (let j = 0; j < string.length; j++) {
        if (s1[i] === string[j]) {
          result += 1;
          string = string.slice(0, j) + string.slice(j+1);
          break;
        }
      }
    }
    
    return result;
}
