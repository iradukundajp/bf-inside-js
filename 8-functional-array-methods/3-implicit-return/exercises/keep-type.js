/**
 * Filters an array and keeps only the elements whose type matches the specified type.
 *
 * @param {any[]} things - The array of elements.
 * @param {string} type - The type to filter for.
 * @returns {any[]} An array containing only the elements whose type matches the specified type.
 */
export const keepType = (things = [], type = '') => {
  return things.filter((thing) => {
    return typeof thing === type;
  });
};
