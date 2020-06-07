// Time Conversion

var s = "12:12:45AM";

function timeConversion(s) {
  var hours = parseInt(s.substr(0, 2)); // 7

  if (s.indexOf("AM") != -1 && hours == 12) {
    s = s.replace("12", "00");
  }
  if (s.indexOf("PM") != -1 && hours < 12) {
    s = s.replace(s.substr(0, 2), hours + 12);
  }
  return s.replace(/(AM|PM)/, "");
}

console.log(timeConversion(s)); // "19:05:45"
