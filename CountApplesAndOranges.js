// Count Apples And Oranges

var s = 7;
var t = 11;
var a = 5;
var b = 15;
var apples = [-2, 2, 1];
var oranges = [5, -6];

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  var applesFromAPlus = apples.map((x) => x + a);
  var orangesFromBPlus = oranges.map((x) => x + b);

  var countApples = 0;
  var countOranges = 0;

  for (let i = 0; i < applesFromAPlus.length; i++) {
    if (applesFromAPlus[i] >= s && applesFromAPlus[i] <= t) {
      countApples += 1;
    }
  }
  for (let i = 0; i < orangesFromBPlus.length; i++) {
    if (orangesFromBPlus[i] >= s && orangesFromBPlus[i] <= t) {
      countOranges += 1;
    }
  }

  console.log(countApples);
  console.log(countOranges);
}

console.log(countApplesAndOranges(s, t, a, b, apples, oranges));
