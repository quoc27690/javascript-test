// Số thiên thần

var input = `2111 `;

function processData(input) {
  var input = input.replace(/(\n)/g, " ");

  var newInputString = input.split(" ");

  var newInputFilter = newInputString.filter(function (el) {
    if (el !== "") return el;
  });

  var newInput = newInputFilter.map((x) => parseInt(x));

  var num = newInput[0];

  for (let i = num; 2 <= i <= 100000; i++) {
    if (i === checkNum(i)) {
      var numString = i.toString();

      for (let j = 0; j < numString.length; j++) {
        if (numString[j] === numString[numString.length - 1 - j]) {
          console.log(numString);
        }
      }
      break;
    }
  }
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

console.log(checkNum(2111));

console.log(processData(input));
