/*
Zero Sum
Given an array of negative/positive integers, return true if there exists two numbers whose sum is zero.

Constraints: Solve this linear time complexity O(n)

zeroSum([ 1, 3, 2, -3 ]) // true
zeroSum([ 5, 7, 2, 9 ]) // false
*/
// var zeroSum = function(array) {
//   array.sort((a, b) => b - a);

//   var len = array.length - 1;
//   for (let i = 0; i < len / 2; i++) {
//     if (array[i] + array[len - i] === 0) return true;
//   }
//   return false;
// };
//solution2
var zeroSum = function(array) {
  var arr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) arr[array[i]] = array[i];
    if (array[i] < 0) {
      if (arr[Math.abs(array[i])] !== undefined) return true;
    }
  }
  return false;
};
