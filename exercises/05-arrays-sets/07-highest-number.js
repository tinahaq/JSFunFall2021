/**
 * Loop through the array using a for loop (or for ... of loop) and return the highest number
 * @param {array} numbers array of numbers
 * @returns {number} the highest number that was in the array
 *
 * @example highestNumber([1, 10, 2, 3, 4]) // 10
 * @example highestNumber([-1, -5, -4]) // -1
 *
 */

const highestNumber = (arr) => {
  //numbers = [1, 2, 3, 4];
  let highNum = Math.max(...arr);
  return highNum;
};

// IGNORE THIS BELOW. It is for the tests.

export default highestNumber;
