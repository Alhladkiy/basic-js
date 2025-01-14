import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || sampleActivity.trim().length === 0  || isNaN(Number(sampleActivity))) {
    return false;
  }

  const k  = Math.log(2) / HALF_LIFE_PERIOD;
  const term = (Math.log(MODERN_ACTIVITY / sampleActivity)) / k
  const result = Math.ceil(term);
  
  if ((isNaN(result) || result < 0 || !Number.isFinite(result))) {
    return false;
  }

  return result;
}