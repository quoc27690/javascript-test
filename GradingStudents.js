// Grading Students

var grades = [73, 67, 38, 33];

function gradingStudents(grades) {
  var result = [];
  for (var i = 0; i < grades.length; i++) {
    var nextMultiple = Math.ceil(grades[i] / 5) * 5;
    if (grades[i] >= 38 && nextMultiple - grades[i] !== 3) {
      result.push(nextMultiple);
    } else {
      result.push(grades[i]);
    }
  }
  return result;
}

// Cách 2
// function gradingStudents(grades) {
//   var result = [];
//   for (var i = 0; i < grades.length; i++) {
//     var nextMultiple = Math.ceil(grades[i] / 5) * 5;
//     if (grades[i] >= 38 && grades[i] % 5 > 2) {
//       result.push((grades[i] = grades[i] + (5 - (grades[i] % 5))));
//     } else {
//       result.push(grades[i]);
//     }
//   }
//   return result;
// }

console.log(gradingStudents(grades)); // [ 75, 67, 40, 33 ]
