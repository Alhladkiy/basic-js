import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 export default function transform (arr) {
  const result = [];

  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`)
  }

  let skipNext = false;

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const next = arr[i + 1];
    const prev = result[result.length - 1]

    if (item === '--discard-next') {
      i = i + 1;
      skipNext = true;
      continue;
    } else if (item === '--discard-prev') {
      if (result.length && !skipNext) {
        result.pop();
      }
    } else if (item === '--double-next') {
      if (next) {
        result.push(next);
      }
    } else if (item === '--double-prev') {
      if (prev && !skipNext) {
        result.push(prev);
      }
    } else {
      result.push(item);
    }

    skipNext = false;
  }

  return result;
}