/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const testarr = arr;
  const selectarr = [];
  const temparr = [];
  for (let i = 0; i < testarr.length; i++) {
    if (testarr[i] !== -1) {
      selectarr.push(testarr[i]);
    }
  }
  function compareNumbers(a, b) {
    return a - b;
  }
  selectarr.sort(compareNumbers);

  for (let i = 0; i < testarr.length; i++) {
    if (testarr[i] !== -1) {
      temparr.push(selectarr.shift(0));
    } else if (testarr[i] === -1) temparr.push(testarr[i]);
  }
  return temparr;
}

module.exports = sortByHeight;
