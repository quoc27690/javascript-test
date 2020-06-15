// Between Two Sets

var a = [3, 9, 6];
var b = [36, 72];

function getTotalX(a, b) {
  const lowLimit = a[a.length - 1];
  const highLimit = b[0];
  let consideredMultiples = [];
  for (let i = lowLimit; i <= highLimit; i += lowLimit) {
    consideredMultiples.push(i);
  } // [ 6, 12, 18, 24, 30, 36 ]

  //filter the array based on whether members of first array can go in it
  consideredMultiples = consideredMultiples.filter((multiple) => {
    for (let i = 0; i < a.length; i++) {
      if (multiple % a[i] !== 0) {
        return false;
      }
    }
    return true;
  }); // [ 18, 36 ]

  //filter the array based on whether its members can go in the second array
  consideredMultiples = consideredMultiples.filter((multiple) => {
    for (let j = 0; j < b.length; j++) {
      if (b[j] % multiple !== 0) {
        return false;
      }
    }
    return true;
  }); // [ 18, 36 ]

  return consideredMultiples.length;
}

console.log(getTotalX(a, b)); // 3
