// Tính tổng các số nguyên tố

var input = `3
2 3 4 `;

function processData(input) {
  var input = input.replace(/(\n)/g, " "); // "3 2 3 5 "

  var newInputString = input.split(" "); // [ '3', '2', '3', '5', '' ]

  var newInputFilter = newInputString.filter(function (el) {
    if (el !== "") return el;
  }); // [ '3', '2', '3', '5' ]

  var newInput = newInputFilter.map((x) => parseInt(x)); // [ 3, 2, 3, 5 ]

  var result = 0;
  for (let i = 1; i < newInput.length; i++) {
    result += checkNum(newInput[i]);
  }
  console.log(result); // 5
}

checkNum = (x) => {
  if (x < 2) {
    return 0;
  } else if (x == 2) {
    return x;
  } else if (x % 2 == 0) {
    return 0;
  } else {
    for (let j = 3; j < x - 1; j += 2) {
      if (x % j == 0) {
        return 0;
      }
    }
  }
  return x;
};

console.log(processData(input));
