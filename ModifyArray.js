// Modify Array

var nums = [1, 2, 3, 4, 5];

function modifyArray(nums) {
  var newNums = nums.map((x) => {
    if (x % 2 === 0) {
      return x * 2;
    } else {
      return x * 3;
    }
  });
  return newNums;
}

console.log(modifyArray(nums)); // [ 3, 4, 9, 8, 15 ]
