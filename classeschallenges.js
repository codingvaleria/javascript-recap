// Problem: Book Class
//  *
//  * Description:
//  * Create a Book class that represents a book. The class should have the following properties:
//  * - title: the title of the book
//  * - author: the author of the book
//  * - year: the year the book was published
//  *
//  * The class should also have the following methods:
//  * - getTitle(): returns the title of the book
//  * - getAuthor(): returns the author of the book
//  * - getYear(): returns the year the book was published
//  * - getInfo(): returns a string representation of the book in the format "Title, Author, Year"
//  *
//  * Create an instance of the Book class with your favorite book and call the getInfo() method to log the book information to the console.
//  */

class Book {
  // TODO: Implement the Book class
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getTitle() {
    return this.title;
  }

  getAuthor() {
    return this.author;
  }

  getYear() {
    return this.year;
  }

  getInfo() {
    return `"${this.title}, ${this.author}, ${this.year}"`;
  }
}

const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
console.log(book.getInfo()); // should log "The Great Gatsby, F. Scott Fitzgerald, 1925"

// Problem: Rectangle Class
//  *
//  * Description:
//  * Create a Rectangle class that represents a rectangle. The class should have the following properties:
//  * - width: the width of the rectangle
//  * - height: the height of the rectangle
//  *
//  * The class should also have the following methods:
//  * - getWidth(): returns the width of the rectangle
//  * - getHeight(): returns the height of the rectangle
//  * - getArea(): returns the area of the rectangle (width * height)
//  * - getPerimeter(): returns the perimeter of the rectangle (2 * (width + height))
//  *
//  * Create an instance of the Rectangle class with width 5 and height 10. Call the getArea() and getPerimeter() methods to log the calculated values to the console.
//  */

class Rectangle {
  // TODO: Implement the Rectangle class
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getArea() {
    return this.width * this.height;
  }

  getPerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(5, 10);
console.log(rectangle.getArea()); // should log 50
console.log(rectangle.getPerimeter()); // should log 30

// Problem: Student and Course Classes
//  *
//  * Description:
//  * Create a Student class and a Course class to represent students and courses. The classes should have the following properties and methods:
//  *
//  * Student Class:
//  * - name: the name of the student
//  * - age: the age of the student
//  * - courses: an array to store the courses the student is enrolled in
//  *
//  * The Student class should also have the following methods:
//  * - enroll(course): takes in a Course object and enrolls the student in that course by adding it to the courses array
//  * - getCourseCount(): returns the number of courses the student is enrolled in
//  * - checkIsEnrolled(courseName): takes in a course name and returns true if the student is enrolled in that course, false otherwise
//  *
//  * Course Class:
//  * - name: the name of the course
//  * - instructor: the name of the course instructor
//  *
//  * Create instances of the Student and Course classes. Enroll the student in multiple courses using the enroll() method and then call the getCourseCount() method to log the number of courses the student is enrolled in. Finally, use the checkIsEnrolled() method to check if the student is enrolled in a specific course.
//  */

class Student {
  // TODO: Implement the Student class
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.courses = [];
  }

  enroll(course) {
    this.courses.push(course);
  }

  getCourseCount() {
    return this.courses.length;
  }

  checkIsEnrolled(courseName) {
    if (this.courses.includes(courseName)) {
      return true;
    } else {
      return false;
    }
  }
}

class Course {
  // TODO: Implement the Course class
  constructor(name, instructor) {
    this.name = name;
    this.instructor = instructor;
  }
}

const student = new Student("John Doe", 20);
const course1 = new Course("Math", "Professor Smith");
const course2 = new Course("English", "Professor Johnson");
const course3 = new Course("Science", "Professor Brown");

student.enroll(course1);
student.enroll(course2);
student.enroll(course3);

console.log(student.getCourseCount()); // should log the number of courses the student is enrolled in
console.log(student.checkIsEnrolled("Math")); // should log true
console.log(student.checkIsEnrolled("History")); // should log false
