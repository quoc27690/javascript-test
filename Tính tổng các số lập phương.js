// Tính tổng các số lập phương

var input = `4
1 2 8 3 `;

function processData(input) {
  var input = input.replace(/(\n)/g, " ");

  var newInputString = input.split(" ");

  var newInputFilter = newInputString.filter(function (el) {
    if (el !== "") return el;
  });

  var newInput = newInputFilter.map((x) => parseInt(x));

  if (newInput[0] <= 1000) {
    var result = 0;

    var limitNum = Math.pow(10, 9);

    for (let i = 1; i < newInput.length; i++) {
      var checkNumAbs = Math.abs(newInput[i]);

      if (checkNumAbs < limitNum) {
        var checkNum = Math.cbrt(checkNumAbs);

        if (Number.isInteger(checkNum)) {
          result += newInput[i];
        }
      }
    }
    console.log(result);
  }
}

console.log(processData(input));
