/**
 * Checks if all strings in an array are longer than a specified length.
 *
 * @param {string[]} strings - The array of strings.
 * @param {number} long - The minimum length for the strings.
 * @returns {boolean} Whether all strings are longer than the specified length.
 */
export const allLong = (strings = [], long = 0) => {
  let areAllLong = true;
  for (const item of strings) {
    if (item.length < long) {
      areAllLong = false;
    }
  }

  return areAllLong;
};
