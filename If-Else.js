// Conditional Statements: If-Else

function getGrade(score) {
  return "FFEDCBA"[Math.floor(score / 5.0)];
}

// function getGrade(score) {
//   let grade;
//   if (0 <= score && score <= 5) {
//     grade = "F";
//   } else if (5 < score && score <= 10) {
//     grade = "E";
//   } else if (10 < score && score <= 15) {
//     grade = "D";
//   } else if (15 < score && score <= 20) {
//     grade = "C";
//   } else if (20 < score && score <= 25) {
//     grade = "B";
//   } else if (25 < score && score <= 30) {
//     grade = "A";
//   }
//   return grade;
// }

console.log(getGrade(20));
