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

// Problem: Grade Analytics
//  *
//  * Description:
//  * Write a JavaScript program that performs various analytics on a set of student grades. The program should include the following functions:
//  *
//  * 1. `calculateAverageGrade(grades)`: Calculates the average grade from an array of grades.
//  * 2. `findHighestGrade(grades)`: Finds the highest grade from an array of grades.
//  * 3. `findLowestGrade(grades)`: Finds the lowest grade from an array of grades.
//  * 4. `gradeAnalytics(students)`: Takes in an array of student objects. Each student object has the
//  *         properties `name` (string) and `grades` (array of numbers). The function should calculate and
//  *         return an object with the following analytics:
//  *    - `averageGrade`: The average grade across all students.
//  *    - `highestGrade`: The highest grade among all students.
//  *    - `lowestGrade`: The lowest grade among all students.
//  *
//  * Implement the functions and the `gradeAnalytics` function as described above.
//  */

function calculateAverageGrade2(grades) {
  // TODO: Write your solution here
  let sumofGrades2 = 0;
  for (let i = 0; i < grades.length; i++) {
    sumofGrades2 = sumofGrades2 + grades[i];
  }
  let average = sumofGrades2 / grades.length;
  return average;
}

function findHighestGrade(grades) {
  // TODO: Write your solution here
  let highestGrade = grades[0];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] > highestGrade) {
      highestGrade = grades[i];
    }
  }
  return highestGrade;
}

function findLowestGrade(grades) {
  // TODO: Write your solution here
  let lowestGrade = grades[0];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < lowestGrade) {
      lowestGrade = grades[i];
    }
  }
  return lowestGrade;
}

function gradeAnalytics(students2) {
  // TODO: Write your solution here
  let nestedgrades = [];
  for (let i = 0; i < students2.length; i++) {
    nestedgrades.push(students2[i].grades);
  }
  let gradesArray = [].concat(...nestedgrades);
  console.log(gradesArray);
  let results = {
    averageGrade: calculateAverageGrade2(gradesArray),
    highestGrade: findHighestGrade(gradesArray),
    lowestGrade: findLowestGrade(gradesArray),
  };
  return results;
}

const students2 = [
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

const analytics = gradeAnalytics(students2);

console.log(analytics);
// should log:
// {
//   averageGrade: 88.66666666666667,
//   highestGrade: 95,
//   lowestGrade: 75
// }
