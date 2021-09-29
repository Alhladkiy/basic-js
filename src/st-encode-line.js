// import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  const obj = {};
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (obj[letter] !== undefined) {
      obj[letter] += 1;
    } else { 
      obj[letter] = 1;
    } 
  }
  for (const key in obj) { 
    if (obj[key] > 1) {
      result += obj[key] + key; 
    } else {
      result += key 
    }

  
  }
  return result

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


encodeLine('aabbbc')

// 2a3bc