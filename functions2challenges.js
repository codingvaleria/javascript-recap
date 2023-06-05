//  Problem: Calculate Average Grade
//  *
//  * Description:
//  * Write a JavaScript function called `calculateAverageGrade` that takes in an array of student objects.
//  * Each student object has the properties `name` (string) and `grades` (array of numbers). The function
//  * should calculate the average grade for each student and return a new array of objects with the student's
//  * name and average grade.
//  *
//  * Implement the function `calculateAverageGrade(students)` to calculate the average grade for each student
//  * and return an array of objects with the student's name and average grade.
//  */

function calculateAverageGrade(students) {
  // TODO: Write your solution here

  // pick out each individual object,
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    //   Access the grades of student
    let studentGrade = student.grades;
    //    Get average of student
    let sumofGrades = 0;
    let averageGrade = 0;
    for (let j = 0; j < studentGrade.length; j++) {
      sumofGrades = sumofGrades + studentGrade[j];
    }

    //  update the value of grades array to the average value;
    averageGrade = sumofGrades / studentGrade.length;
    studentGrade = averageGrade;
    student.grades = studentGrade;
  }

  // return the original array with the updated value of objects
  return students;
}

const students = [
  {
    name: "John",
    grades: [90, 85, 95],
  },
  {
    name: "Alice",
    grades: [80, 75, 85],
  },
  {
    name: "Bob",
    grades: [95, 90, 92],
  },
];

const averageGrades = calculateAverageGrade(students);

console.log(averageGrades);
// should log:
// [
//   { name: "John", averageGrade: 90 },
//   { name: "Alice", averageGrade: 80 },
//   { name: "Bob", averageGrade: 92.33333333333333 }
// ]
