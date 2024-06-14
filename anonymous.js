function greeting() {
  console.log("Hello I am here...");
}
console.log("Before");
setTimeout(greeting, 5000);
console.log("After");

console.log("Before");
setTimeout(function () {
  // Anonymous function
  console.log("This is Anonymous Function");
}, 6000);
console.log("After");

const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(2, 6));
