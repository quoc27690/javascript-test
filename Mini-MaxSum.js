// Mini-Max Sum

var arr = [1, 5, 2, 4, 3];

function miniMaxSum(arr) {
  var min = 0;
  var max = 0;
  arr.sort((a, b) => a - b); // [ 1, 2, 3, 4, 5 ]

  for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
  }
  for (let j = 1; j < arr.length; j++) {
    max += arr[j];
  }

  console.log(min, max);
}

console.log(miniMaxSum(arr)); // 10 14
