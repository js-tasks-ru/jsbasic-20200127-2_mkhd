/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let result = arr.slice().filter(item => item <= b && item >= a);
  return result;
}
