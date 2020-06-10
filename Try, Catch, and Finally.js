// Try, Catch, and Finally

function reverseString(s) {
  try {
    // Can be chained, but it damages readability
    console.log(s.split("").reverse().join(""));
  } catch (e) {
    console.log(e.message); // Use .message, or you'll get more than expected.
    console.log(s);
  }
}

console.log(reverseString(1234));
// "s.split is not a function"
// 1234
console.log(reverseString("1234"));
// 4321
