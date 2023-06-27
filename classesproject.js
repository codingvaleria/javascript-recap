// /*
// Challenge: JavaScript Library Project

// Requirements:
// 1. Implement the following models: Book, Student, Admin, and LibraryApp.
// 2. Each model should have an id attribute along with other relevant attributes.
// 3. Each model's constructor should receive the database instance as the first parameter and it should be named `db`.
// 4. Each model should use the `db` parameter for querying by id or retrieving all saved entries, updating data, and saving data.
// 5. The InMemoryDatabase class should receive the name of the table and the required data to run queries, updates, or selects.
// 6. Use the InMemoryDatabase implementation provided for this challenge.

// */
class InMemoryDatabase {
  constructor() {
    this.tables = {};
    this.lastIds = {};
  }

  select(tableName) {
    if (this.tables[tableName]) {
      return this.tables[tableName];
    } else {
      return [];
    }
  }

  selectById(tableName, id) {
    const table = this.tables[tableName];
    if (table) {
      return table.find((entry) => entry.id === id) || null;
    } else {
      return null;
    }
  }

  update(tableName, id, data) {
    const table = this.tables[tableName];
    if (table) {
      const entry = table.find((entry) => entry.id === id);
      if (entry) {
        Object.assign(entry, data);
        return true;
      }
    }
    return false;
  }

  insert(tableName, data) {
    if (!this.tables[tableName]) {
      this.tables[tableName] = [];
      this.lastIds[tableName] = 0;
    }
    const nextId = this.lastIds[tableName] + 1;
    const entry = { id: nextId, ...data };
    this.tables[tableName].push(entry);
    this.lastIds[tableName] = nextId;
    return nextId;
  }
}

let db = new InMemoryDatabase();
// /*Steps:
// 1. Implement the Book class:
//    - `constructor(db)`: Initialize the Book instance.
//    - `findById(id)`: Query the database to retrieve the book with the given id.
//    - `findAll()`: Retrieve all saved books from the database.
//    - `update(data)`: Update the book's attributes with the provided data.
//    - `save()`: Save the book to the database.

//  Book attributes:
//    - `id` (number): The unique identifier of the book.
//    - `title` (string): The title of the book.
//    - `author` (string): The author of the book.
//    - `isBorrowed` (boolean): Whether the book is borrowed or not.
//    - `createdAt` (Date): When this entry was created
//    - `updatedAt` (Date): When this entry was last updated

// */
// class Book {
//   constructor(db, id, title, author, isBorrowed, createdAt, updatedAt) {
//     this.db = db;
//     this.id = id;
//     this.title = title;
//     this.author = author;
//     this.isBorrowed = isBorrowed;
//     this.createdAt = createdAt;
//     this.updatedAt = updatedAt;
//   }

//   save() {
//     const newBookId = this.db.insert("books", {
//       title: this.title,
//       author: this.author,
//       isBorrowed: this.isBorrowed,
//       createdAt: this.createdAt,
//       updatedAt: this.updatedAt,
//     });

//     const savedBook = Book.findById(this.db, newBookId);
//     if (savedBook) {
//       return savedBook;
//     }

//     return null;
//   }

//   static findById(db, id) {
//     const bookObj = db.selectById("books", id);
//     if (bookObj) {
//       const book = new Book(
//         db,
//         bookObj.id,
//         bookObj.title,
//         bookObj.author,
//         bookObj.isBorrowed,
//         bookObj.createdAt,
//         bookObj.updatedAt
//       );
//       return book;
//     }
//     return null;
//   }

//   static findAll(db) {
//     const bookObjects = db.select("books");
//     return bookObjects.map(
//       (bookObj) =>
//         new Book(
//           db,
//           bookObj.id,
//           bookObj.title,
//           bookObj.author,
//           bookObj.isBorrowed,
//           bookObj.createdAt,
//           bookObj.updatedAt
//         )
//     );
//   }

//   update(data) {
//     const updated = this.db.update("books", this.id, data);
//     if (updated) {
//       const updatedBook = Book.findById(this.db, this.id);
//       if (updatedBook) {
//         this.db = updatedBook.db;
//         return updatedBook;
//       }
//     }
//     return null;
//   }
// }

// const newBook = {
//   id: 1,
//   title: "Book 1",
//   author: "book1author",
//   isBorrowed: "false",
//   createdAt: null,
//   updatedAt: null,
// };

// const book1 = new Book(
//   db,
//   newBook.id,
//   newBook.title,
//   newBook.author,
//   newBook.isBorrowed,
//   newBook.createdAt,
//   newBook.updatedAt
// );

// const newBook2 = {
//   id: 2,
//   title: "Book 2",
//   author: "book2author",
//   isBorrowed: true,
//   createdAt: null,
//   updatedAt: null,
// };

// const book2 = new Book(
//   db,
//   newBook2.id,
//   newBook2.title,
//   newBook2.author,
//   newBook2.isBorrowed,
//   newBook2.createdAt,
//   newBook2.updatedAt
// );

// const data = {
//   title: "Rich dad, poor dad",
// };

// book1.save();
// book2.save();

// console.log(book1);
// // console.log(Book.findById(db, 2));
// // console.log(Book.findAll(db));
// book1.update(data);
// console.log(book1);

// 2. Implement the Student class:
//    - `constructor(db)`: Initialize the Student instance.
//    - `findById(id)`: Query the database to retrieve the student with the given id.
//    - `findAll()`: Retrieve all saved students from the database.
//    - `update(data)`: Update the student's attributes with the provided data.
//    - `save()`: Save the student to the database.

//    Student attributes:
//    - `id` (number): The unique identifier of the student.
//    - `name` (string): The name of the student.
//    - `grade` (string): The grade of the student.
//    - `createdAt` (Date): When this entry was created
//    - `updatedAt` (Date): When this entry was last updated

// class Student {
//   constructor(db, studentObj) {
//     this.db = db;
//     this.id = studentObj.id;
//     this.name = studentObj.name;
//     this.grade = studentObj.grade;
//     this.createdAt = studentObj.createdAt;
//     this.updatedAt = studentObj.updatedAt;
//   }

//   save() {
//     const newStudentId = this.db.insert("students", {
//       name: this.name,
//       grade: this.grade,
//       createdAt: this.createdAt,
//       updatedAt: this.updatedAt,
//     });

//     const savedStudent = Student.findById(this.db, newStudentId);
//     if (savedStudent) {
//       return savedStudent;
//     }
//     return null;
//   }

//   static findById(db, id) {
//     const studentObj = db.selectById("students", id);
//     if (studentObj) {
//       const student = new Student(db, studentObj);
//       return student;
//     }
//     return null;
//   }

//   static findAll(db) {
//     const studentObjects = db.select("students");
//     const students = [];

//     for (let i = 0; i < studentObjects.length; i++) {
//       const studentObj = studentObjects[i];
//       const student = new Student(db, studentObj);
//       students.push(student);
//     }
//     return students;
//   }

//   update(data) {
//     const updated = this.db.update("students", this.id, data);
//     if (updated) {
//       const updatedStudent = Student.findById(this.db, this.id);
//       this.db = updatedStudent.db;
//       return updatedStudent;
//     }
//     return null;
//   }
// }

// let student = new Student(db, {
//   id: 1,
//   name: "student1",
//   grade: "grade1",
//   createdAt: null,
//   updatedAt: null,
// });

// let student2 = new Student(db, {
//   id: 2,
//   name: "student2",
//   grade: "grade2",
//   createdAt: null,
//   updatedAt: null,
// });

// student.save();
// student2.save();
// student2.update({ name: "Valeria" });
// console.log(Student.findAll(db));

/*3. Implement the Admin class:
   - `constructor(db)`: Initialize the Admin instance.
   - `findById(id)`: Query the database to retrieve the admin with the given id.
   - `findAll()`: Retrieve all saved admins from the database.
   - `update(data)`: Update the admin's attributes with the provided data.
   - `save()`: Save the admin to the database.
   - `checkPassword(name, password)`: Check if the provided name and password match the admin's credentials. Return `true` if they match, and `false` otherwise.

   Admin attributes:
   - `id` (number): The unique identifier of the admin.
   - `name` (string): The name of the admin.
   - `password` (string): The password of the admin.
   - `createdAt` (Date): When this entry was created
   - `updatedAt` (Date): When this entry was last updated
*/
// class Admin {
//   constructor(db, obj) {
//     this.db = db;
//     this.id = obj.id;
//     this.name = obj.name;
//     this.password = obj.password;
//     this.createdAt = obj.createdAt;
//     this.updatedAt = obj.updatedAt;
//   }

//   save() {
//     let id = this.db.insert("admins", {
//       name: this.name,
//       password: this.password,
//     });
//     this.id = id;
//   }

//   static findById(db, id) {
//     let adminObj = db.selectById("admins", id);
//     let admin = new Admin(db, adminObj);
//     return admin;
//   }

//   static findAll(db) {
//     let adminsObjects = db.select("admins");
//     let admins = [];
//     for (let i = 0; i < adminsObjects.length; i++) {
//       let admin = new Admin(db, adminsObjects[i]);
//       admins.push(admin);
//     }
//     return admins;
//   }

//   update(data) {
//     let adminIsUpdated = this.db.update("admins", this.id, data);
//     if (adminIsUpdated === true) {
//       return Admin.findById(this.db, this.id);
//     } else {
//       return null;
//     }
//   }
// }

// const admin1 = new Admin(db, {
//   id: 1,
//   name: "admin 1",
//   password: "admin1",
// });
// admin1.save();

// const admin2 = new Admin(db, {
//   id: 2,
//   name: "admin 2",
//   password: "admin2",
// });

// admin2.save();
// console.log(Admin.findAll(db));

// // make changes to the admin
// admin1.name = "John Doe";
// //update the admin
// const updatedAdmin = admin1.update({ name: admin1.name });
// console.log(admin1);

/*4; Implement the LibraryApp class:
   - `constructor(db, id, name, location)`: Initialize the LibraryApp instance.
   - `addBook(bookData)`: Add a new book to the library. The `bookData` parameter should be an object with Book properties.
   - `addStudent(studentData)`: Add a new student to the library. The `studentData` parameter should be an object with student properties.
   - `borrowBook(studentId, bookId)`: Allow a student to borrow a book. The `studentId` and `bookId` parameters represent the IDs of the student and the book, respectively.
   - `getBorrowedBooks()`: Retrieve an array of books that are currently borrowed from the library.
   - `getAvailableBooks()`: Retrieve an array of books that are currently available in the library.
   - `getBooksBorrowedByStudent(studentId)`: Retrieve an array of books borrowed by a specific student. The `studentId` parameter represents the ID of the student.
   - `checkIfBookIsAvailable(bookId)`: Check if a book with the given ID is available in the library. Return `true` if available, and `false` otherwise.

5. Use the provided InMemory Database implementation to store and retrieve data.

*/

class LibraryApp {
  constructor(db, id, name, location) {
    this.db = db;
    this.id = id;
    this.name = name;
    this.location = location;
  }
}

const library = new LibraryApp(db, 1, "library1", "location1");
console.log(library);