// Get Second Largest

var nums = [4, 2, 5, 6];

function getSecondLargest(nums) {
  let max = nums[0]; // 4

  if (nums.length == 1) {
    return max;
  }

  let second = nums[1] < max ? nums[1] : max; // 2

  for (let i of nums) {
    if (i > max) {
      second = max;
      max = i;
    }
    if (i > second && i < max) {
      second = i;
    }
  }
  return second;
}

console.log(getSecondLargest(nums));
