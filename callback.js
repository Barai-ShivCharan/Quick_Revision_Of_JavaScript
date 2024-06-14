function greeting(name) {
  console.log(`Hello ${name}`);
}
function getUserInput(callback) {
  let name = prompt("Please enter your name:");
  callback(name);
}
getUserInput(greeting);
