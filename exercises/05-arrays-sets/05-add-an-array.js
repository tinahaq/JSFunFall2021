/**
 * Add all of the numbers in an array and return the sum.
 * @param {array} numbers an array of numbers
 * @return {number} the sum of all the numbers in an array
 *
 * @example add([1, 2, 3]); // 6
 */



const add = (numbers) => {
  let number = 0;
  for (let i = 0; i < numbers.length; i++) {
    number += numbers[i];  }
  return number;
};

// IGNORE THIS BELOW. It is for the tests.

export default add;
