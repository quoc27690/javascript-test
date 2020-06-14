// Get Day Name

var dateString = "10/11/2009";

function getDayName(dateString) {
  var date = new Date(dateString); // 2009-10-10T17:00:00.000Z

  var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var findIndexDayNames = date.getDay(); // 0

  return (dayName = dayNames[findIndexDayNames]);
}

console.log(getDayName(dateString)); // "Sunday"
