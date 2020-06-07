// Staircase

function staircase(n) {
  console.log(Array(n)); // [ <4 empty items> ]

  const line = Array(n).fill(" ");
  console.log(line); // [ ' ', ' ', ' ', ' ' ]

  for (let i = n - 1; i >= 0; i--) {
    line[i] = "#";
    console.log(line.join(""));
  }
}
console.log(staircase(4));
//   #
//  ##
// ###
//####
