// Tích hai phần tử liền kề

var input = `4
1 1 3 5 `;

function processData(input) {
  var input = input.replace(/(\n)/g, " ");

  var newInputString = input.split(" ");

  var newInputFilter = newInputString.filter(function (el) {
    if (el !== "") return el;
  });

  var newInput = newInputFilter.map((x) => parseInt(x)); // [ 4, 1, 2, 3, 1 ]

  if (newInput[0] >= 3 && newInput[0] <= 10000) {
    var result = [];
    var limitNum = Math.pow(10, 9);

    for (let i = 1; i < newInput.length - 1; i++) {
      var checkNumAbsA = Math.abs(newInput[i]);
      var checkNumAbsB = Math.abs(newInput[i + 1]);
      if (checkNumAbsA < limitNum && checkNumAbsB < limitNum) {
        result.push(newInput[i] * newInput[i + 1]);
      }
    }

    console.log(Math.max(...result));
  }
}

console.log(processData(input));
