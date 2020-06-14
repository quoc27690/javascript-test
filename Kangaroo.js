// Kangaroo

var x1 = 0;
var v1 = 3;
var x2 = 4;
var v2 = 2;

function kangaroo(x1, v1, x2, v2) {
  if (v1 > v2 && x1 < x2) {
    var result1 = x1;
    var result2 = x2;
    var check = true;

    for (let i = 1; i < 10000; i++) {
      result1 += v1;
      result2 += v2;
      if (result1 !== result2) {
        check = false;
      } else {
        check = true;
        break;
      }
    }
    return check ? "YES" : "NO";
  } else {
    return "NO";
  }
}

console.log(kangaroo(x1, v1, x2, v2)); // "YES"
