// Loops

var s = "javascriptloops";

function vowelsAndConsonants(s) {
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      console.log(s[i]);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (!vowels.includes(s[i])) {
      console.log(s[i]);
    }
  }
}

console.log(vowelsAndConsonants(s));
