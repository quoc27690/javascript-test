function run() {
  console.log(arguments);
  console.log(Array.from(arguments));
}

console.log(run(1, 2, 3));
