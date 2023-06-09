// // Problem: Book Class
// //  *
// //  * Description:
// //  * Create a Book class that represents a book. The class should have the following properties:
// //  * - title: the title of the book
// //  * - author: the author of the book
// //  * - year: the year the book was published
// //  *
// //  * The class should also have the following methods:
// //  * - getTitle(): returns the title of the book
// //  * - getAuthor(): returns the author of the book
// //  * - getYear(): returns the year the book was published
// //  * - getInfo(): returns a string representation of the book in the format "Title, Author, Year"
// //  *
// //  * Create an instance of the Book class with your favorite book and call the getInfo() method to log the book information to the console.
// //  */

// class Book {
//   // TODO: Implement the Book class
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }

//   getTitle() {
//     return this.title;
//   }

//   getAuthor() {
//     return this.author;
//   }

//   getYear() {
//     return this.year;
//   }

//   getInfo() {
//     return `"${this.title}, ${this.author}, ${this.year}"`;
//   }
// }

// const book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
// console.log(book.getInfo()); // should log "The Great Gatsby, F. Scott Fitzgerald, 1925"

// // Problem: Rectangle Class
// //  *
// //  * Description:
// //  * Create a Rectangle class that represents a rectangle. The class should have the following properties:
// //  * - width: the width of the rectangle
// //  * - height: the height of the rectangle
// //  *
// //  * The class should also have the following methods:
// //  * - getWidth(): returns the width of the rectangle
// //  * - getHeight(): returns the height of the rectangle
// //  * - getArea(): returns the area of the rectangle (width * height)
// //  * - getPerimeter(): returns the perimeter of the rectangle (2 * (width + height))
// //  *
// //  * Create an instance of the Rectangle class with width 5 and height 10. Call the getArea() and getPerimeter() methods to log the calculated values to the console.
// //  */

// class Rectangle {
//   // TODO: Implement the Rectangle class
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   getWidth() {
//     return this.width;
//   }

//   getHeight() {
//     return this.height;
//   }

//   getArea() {
//     return this.width * this.height;
//   }

//   getPerimeter() {
//     return 2 * (this.width + this.height);
//   }
// }

// const rectangle = new Rectangle(5, 10);
// console.log(rectangle.getArea()); // should log 50
// console.log(rectangle.getPerimeter()); // should log 30

// // Problem: Student and Course Classes
// //  *
// //  * Description:
// //  * Create a Student class and a Course class to represent students and courses. The classes should have the following properties and methods:
// //  *
// //  * Student Class:
// //  * - name: the name of the student
// //  * - age: the age of the student
// //  * - courses: an array to store the courses the student is enrolled in
// //  *
// //  * The Student class should also have the following methods:
// //  * - enroll(course): takes in a Course object and enrolls the student in that course by adding it to the courses array
// //  * - getCourseCount(): returns the number of courses the student is enrolled in
// //  * - checkIsEnrolled(courseName): takes in a course name and returns true if the student is enrolled in that course, false otherwise
// //  *
// //  * Course Class:
// //  * - name: the name of the course
// //  * - instructor: the name of the course instructor
// //  *
// //  * Create instances of the Student and Course classes. Enroll the student in multiple courses using the enroll() method and then call the getCourseCount() method to log the number of courses the student is enrolled in. Finally, use the checkIsEnrolled() method to check if the student is enrolled in a specific course.
// //  */

// class Student {
//   // TODO: Implement the Student class
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.courses = [];
//   }

//   enroll(course) {
//     this.courses.push(course);
//   }

//   getCourseCount() {
//     return this.courses.length;
//   }

//   checkIsEnrolled(courseName) {
//     if (this.courses.includes(courseName)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// class Course {
//   // TODO: Implement the Course class
//   constructor(name, instructor) {
//     this.name = name;
//     this.instructor = instructor;
//   }
// }

// const student = new Student("John Doe", 20);
// const course1 = new Course("Math", "Professor Smith");
// const course2 = new Course("English", "Professor Johnson");
// const course3 = new Course("Science", "Professor Brown");

// student.enroll(course1);
// student.enroll(course2);
// student.enroll(course3);

// console.log(student.getCourseCount()); // should log the number of courses the student is enrolled in
// console.log(student.checkIsEnrolled("Math")); // should log true
// console.log(student.checkIsEnrolled("History")); // should log false

// Problem: Book Library
//  *
//  * Description:
//  * Create a Book class and a Library class to represent books and a library of books. The classes should have the following properties and methods:
//  *
//  * Book Class:
//  * - title: the title of the book
//  * - author: the author of the book
//  * - year: the publication year of the book
//  *
//  * Library Class:
//  * - books: an array to store the books in the library
//  *
//  * The Library class should also have the following methods:
//  * - addBook(book): takes in a Book object and adds it to the library
//  * - removeBook(title): takes in a book title and removes the book with that title from the library
//  * - getBookCount(): returns the number of books in the library
//  * - findBooksByAuthor(author): takes in an author name and returns an array of books written by that author
//  * - findBooksByYear(year): takes in a publication year and returns an array of books published in that year
//  *
//  * Create instances of the Book and Library classes. Add multiple books to the library using the addBook() method.
//  * Then, call the getBookCount() method to log the number of books in the library.
//  * Finally, use the findBooksByAuthor() and findBooksByYear() methods to find and log books by a specific author or published in a specific year.
//  */

let booksbyAuthor = [];
let booksbyYear = [];
class Book {
  // TODO: Implement the Book class
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
}

class Library {
  // TODO: Implement the Library class
  constructor() {
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(title) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title === title) {
        // console.log(this.books[i].title);
        let indexofBook = this.books.findIndex(this.books[i]);
        this.books.splice(indexofBook, 1);
      }
    }
  }

  getBookCount() {
    return this.books.length;
  }

  findBooksByAuthor(author) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].author === author) {
        booksbyAuthor.push(this.books[i]);
      }
    }
    return booksbyAuthor;
  }

  findBooksByYear(year) {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].year === year) {
        booksbyYear.push(this.books[i]);
      }
    }
    return booksbyAuthor;
  }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("1984", "George Orwell", 1949);
const book4 = new Book("Pride and Prejudice", "Jane Austen", 1813);

const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
console.log(library.getBookCount()); // should log the number of books in the library
console.log(library.findBooksByAuthor("Harper Lee")); // should log an array of books by George Orwell
console.log(library.findBooksByYear(1960)); // should log an array of books published in 1960
