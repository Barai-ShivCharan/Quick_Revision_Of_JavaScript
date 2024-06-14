let student = {
  roll: 45,
  name: "piyush Jindal",
  course: "Computer Science",
};

// trying to show references
let num1 = 10;
let num2 = num1;
console.log(num2);
console.log(student);

num1 = 15;
delete student.name;
console.log(num1);
console.log(student);
