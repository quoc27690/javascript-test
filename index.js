// Số thiên thần

var input = `1204132 `;

function processData(input) {
  var input = input.replace(/(\n)/g, " "); // "1204132 "

  var newInputString = input.split(" "); // [ '1204132', '' ]

  var newInputFilter = newInputString.filter(function (el) {
    if (el !== "") return el;
  }); // [ '1204132' ]

  var newInput = newInputFilter.map((x) => parseInt(x)); // [ 1204132 ]

  var num = newInput[0]; // 1204132

  for (let i = num; 2 <= i <= 100000; i++) {
    if (checkNum(i) && checkAngle(i)) {
      console.log(i);
      break;
    }
  }
}

// Check số nguyên tố
checkNum = (x) => {
  if (x < 2) {
    return false;
  } else if (x == 2) {
    return true;
  } else if (x % 2 == 0) {
    return false;
  } else {
    for (let j = 3; j < x - 1; j += 2) {
      if (x % j == 0) {
        return false;
      }
    }
  }
  return true;
};

// Check đối xứng
checkAngle = (y) => {
  var yText = y.toString();
  var check = true;
  for (var i = 0; i < yText.length; i++) {
    if (yText[i] !== yText[yText.length - 1 - i]) {
      check = false;
      break;
    }
  }
  if (check) return true;
  else return false;
};

console.log(processData(input)); // 1208021
