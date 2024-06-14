let student = {
  roll: 45,
  name: "piyush Jindal",
  course: "Computer Science",
};
console.log(student);
console.log(student.name); // Access by dot notation
console.log(student["name"]); // Access by  bracket
console.log(student["roll"]); // Access by  bracket
console.log(typeof student);
console.log(typeof student.roll);

delete student.course;
console.log(student);

student.year = "second";
console.log(student);
