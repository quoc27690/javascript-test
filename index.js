var objects = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 4, y: 5 },
];

function getCount(objects) {
  var result = 0;

  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x === objects[i].y) {
      result += 1;
    }
  }

  return result;
}

console.log(getCount(objects));
