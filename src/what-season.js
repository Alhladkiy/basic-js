/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 export default function getSeason (date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  const isFakeDate = Boolean(Object.getOwnPropertyNames(date).length);
  const isDateInsance = date instanceof Date;

  if (isDateInsance && !isFakeDate) {
    const month = date.getMonth();

    if (month > 1 && month < 5) {
      return 'spring';
    } else if (month > 4 && month < 8) {
      return 'summer';
    } else if (month > 7 && month < 11) {
      return 'autumn';
    }

    return 'winter';
  }

  throw new Error('Invalid date!');
}

