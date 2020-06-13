// Bọn phù thủy nhỏ háu ăn và những cây mía

var input = `5 3
14
15
33 `;

function processData(input) {
  var input = input.replace(/(\n)/g, " ");

  var newInputString = input.split(" ");

  var newInputFilter = newInputString.filter(function (el) {
    if (el !== "") return el;
  });

  var newInput = newInputFilter.map((x) => parseInt(x));

  var soDot = 0;
  for (let i = 2; i < newInput.length; i++) {
    var num = newInput[i] / newInput[0];
    if (!Number.isInteger(num)) {
      var numDu = num % 1;
      if (numDu <= 0.5) {
        soDot += parseInt(num) - 1;
      } else {
        soDot += parseInt(num);
      }
    } else {
      soDot += num;
    }
  }
  console.log(soDot);
}

console.log(processData(input));
