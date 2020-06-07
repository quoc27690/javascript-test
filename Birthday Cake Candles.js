// Birthday Cake Candles

var ar = [3, 1, 2, 3];

function birthdayCakeCandles(ar) {
  var maxNum = Math.max(...ar); // 3
  var result = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === maxNum) {
      result += 1;
    }
  }
  return result;
}

console.log(birthdayCakeCandles(ar)); // 2
