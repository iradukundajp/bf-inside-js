/*
 * Adds a number to each element in an array of numbers.
 *
 * @param {number[]} nums - The array of numbers.
 * @param {number} addThis - The number to add to each element.
 * @returns {number[]} An array where each element is the sum of the corresponding number from nums and addThis.
 */

// // before
// export const addNumber = (nums = [], addThis = 0) => {
//   return nums.map((num) => {
//     return num + addThis;
//   });
// };

// // step 1: refactor callback
// export const addNumber = (nums = [], addThis = 0) => {
//   return nums.map((num) => num + addThis);
// };

// step 2: refactor main function (if possible)
export const addNumber = (nums = [], addThis = 0) =>
  nums.map((num) => num + addThis);
