// Đếm giá trị phân số

var input = `4 `;

function processData(input) {
  var input = input.replace(/(\n)/g, " ");
  var newInputString = input.split(" ");
  var newInputFilter = newInputString.filter(function (el) {
    if (el !== "") return el;
  });
  var newInput = newInputFilter.map((x) => parseInt(x));

  var array = [];
  for (var i = 1; i < newInput; i++) {
    for (var j = 2; j <= newInput; j++) {
      if (i < j) {
        var num = i / j;
        if (parseInt(num) !== num) array.push(num);
      }
    }
  }
  array.sort();
  var equal = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) equal += 1;
  }
  console.log(array.length - equal);
}

console.log(processData(input));
