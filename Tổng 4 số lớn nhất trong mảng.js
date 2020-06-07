// Tổng 4 số lớn nhất trong mảng

var input = `4
1 4 2 6 5`;

function processData(input) {
  var input = input.replace(/(\n)/g, " "); // "4 1 4 2 6 5"

  var newInput = input.split(" "); // [ '4', '1', '4', '2', '6', '5' ]

  newInput.splice(0, 1); // [ '1', '4', '2', '6', '5' ]

  var newInputSort = newInput.sort((a, b) => b - a); // [ '6', '5', '4', '2', '1' ]

  var result = 0;
  for (let i = 0; i < 4; i++) {
    result += parseInt(newInputSort[i]);
  }
  console.log(result); // 17
}

console.log(processData(input));
