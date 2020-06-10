// Tính tổng các số lập phương

var input = `4
1 2 -8 3 `;

function processData(input) {
  var input = input.replace(/(\n)/g, " "); // "4 1 2 -8 3 "

  var newInputString = input.split(" "); // [ '4', '1', '2', '-8', '3', '' ]

  var newInputFilter = newInputString.filter(function (el) {
    if (el !== "") return el;
  }); // [ '4', '1', '2', '-8', '3' ]

  var newInput = newInputFilter.map((x) => parseInt(x)); // [ 4, 1, 2, -8, 3 ]

  if (newInput[0] <= 1000) {
    var result = 0;

    var limitNum = Math.pow(10, 9);

    for (let i = 1; i < newInput.length; i++) {
      var checkNumAbs = Math.abs(newInput[i]);

      if (checkNumAbs < limitNum) {
        var checkNum = Math.cbrt(checkNumAbs);

        // Check có phải là số nguyên hay ko sau khi căn bậc 3
        if (Number.isInteger(checkNum)) {
          result += newInput[i];
        }
      }
    }
    console.log(result);
  }
}

console.log(processData(input)); // 9
