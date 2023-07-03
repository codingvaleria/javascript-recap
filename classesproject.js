/*
Challenge: JavaScript Library Project

Requirements:
1. Implement the following models: Book, Student, Admin, and LibraryApp.
2. Each model should have an id attribute along with other relevant attributes.
3. Each model's constructor should receive the database instance as the first parameter and it should be named `db`.
4. Each model should use the `db` parameter for querying by id or retrieving all saved entries, updating data, and saving data.
5. The InMemoryDatabase class should receive the name of the table and the required data to run queries, updates, or selects.
6. Use the InMemoryDatabase implementation provided for this challenge.

*/
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
        Object.assign(entry, { ...data, updatedAt: new Date() });
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
    const entry = {
      ...data,
      id: nextId,
      updatedAt: new Date(),
      createdAt: new Date(),
    };
    this.tables[tableName].push(entry);
    this.lastIds[tableName] = nextId;
    return nextId;
  }
}

let db = new InMemoryDatabase();
/*Steps:
1. Implement the Book class:
   - `constructor(db)`: Initialize the Book instance.
   - `findById(id)`: Query the database to retrieve the book with the given id.
   - `findAll()`: Retrieve all saved books from the database.
   - `update(data)`: Update the book's attributes with the provided data.
   - `save()`: Save the book to the database.

 Book attributes:
   - `id` (number): The unique identifier of the book.
   - `title` (string): The title of the book.
   - `author` (string): The author of the book.
   - `isBorrowed` (boolean): Whether the book is borrowed or not.
   - `createdAt` (Date): When this entry was created
   - `updatedAt` (Date): When this entry was last updated

*/
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

//   static save(db, title, author, isBorrowed) {
//     const newBookId = db.insert("books", {
//       title, //shorthand for property name and value being equal.
//       author: author,
//       isBorrowed: isBorrowed,
//     });

//     const savedBook = Book.findById(db, newBookId);
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
//       this.title = updatedBook.title;
//       this.isBorrowed = updatedBook.isBorrowed;
//       this.author = updatedBook.author;
//       this.updatedAt = updatedBook.updatedAt;
//       return updatedBook;
//     }
//     return null;
//   }
// }

// let book1 = Book.save(db, "book1", "book1author", true);
// let book2 = Book.save(db, "book2", "book2author", false);
// let book3 = Book.save(db, "book3", "book3author", false);

// const data = {
//   title: "Rich dad, poor dad",
// };

// console.log(book1);
// console.log(Book.findById(db, 2));
// console.log(Book.findAll(db));
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

//   static save(db, studentObj) {
//     const newStudentId = db.insert("students", {
//       name: studentObj.name,
//       grade: studentObj.grade,
//     });

//     const savedStudent = Student.findById(db, newStudentId);
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
//       this.name = updatedStudent.name;
//       this.grade = updatedStudent.grade;
//       this.updatedAt = updatedStudent.updatedAt;
//       return updatedStudent;
//     }
//     return null;
//   }
// }

// let student1 = Student.save(db, {
//   name: "student1",
//   grade: "grade1",
// });

// let student2 = Student.save(db, {
//   name: "student2",
//   grade: "grade2",
// });

// console.log(student1);
// console.log(Student.findById(db, 2))
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
class Admin {
  constructor(db, obj) {
    this.db = db;
    this.id = obj.id;
    this.name = obj.name;
    this.password = obj.password;
    this.createdAt = obj.createdAt;
    this.updatedAt = obj.updatedAt;
  }

  static save(db, obj) {
    let id = db.insert("admins", {
      name: obj.name,
      password: obj.password,
    });
    const savedAdmin = Admin.findById(db, id);
    if (savedAdmin) {
      return savedAdmin;
    }
    return null;
  }

  static findById(db, id) {
    let adminObj = db.selectById("admins", id);
    let admin = new Admin(db, adminObj);
    return admin;
  }

  static findAll(db) {
    let adminsObjects = db.select("admins");
    let admins = [];
    for (let i = 0; i < adminsObjects.length; i++) {
      let admin = new Admin(db, adminsObjects[i]);
      admins.push(admin);
    }
    return admins;
  }

  update(data) {
    let adminIsUpdated = this.db.update("admins", this.id, data);
    if (adminIsUpdated === true) {
      const updatedAdmin = Admin.findById(this.db, this.id);
      this.name = updatedAdmin.name;
      this.password = updatedAdmin.password;
      return updatedAdmin;
    } else {
      return null;
    }
  }
}

const admin1 = Admin.save(db, {
  name: "admin 1",
  password: "admin1",
});

const admin2 = Admin.save(db, {
  name: "admin 2",
  password: "admin2",
});

//update the admin
admin1.update({ password: "xyz" });
console.log(admin1);

// /*4; Implement the LibraryApp class:
//    - `constructor(db, id, name, location)`: Initialize the LibraryApp instance.
//    - `addBook(bookData)`: Add a new book to the library. The `bookData` parameter should be an object with Book properties.
//    - `addStudent(studentData)`: Add a new student to the library. The `studentData` parameter should be an object with student properties.
//    - `borrowBook(studentId, bookId)`: Allow a student to borrow a book. The `studentId` and `bookId` parameters represent the IDs of the student and the book, respectively.
//    - `getBorrowedBooks()`: Retrieve an array of books that are currently borrowed from the library.
//    - `getAvailableBooks()`: Retrieve an array of books that are currently available in the library.
//    - `getBooksBorrowedByStudent(studentId)`: Retrieve an array of books borrowed by a specific student. The `studentId` parameter represents the ID of the student.
//    - `checkIfBookIsAvailable(bookId)`: Check if a book with the given ID is available in the library. Return `true` if available, and `false` otherwise.

// 5. Use the provided InMemory Database implementation to store and retrieve data.

// */
// class LibraryApp {
//   constructor(db, id, name, location) {
//     this.db = db;
//     this.id = id;
//     this.name = name;
//     this.location = location;
//   }

//   addBook(bookData) {
//     const book = new Book(
//       this.db,
//       bookData.id,
//       bookData.title,
//       bookData.author,
//       bookData.isBorrowed,
//       bookData.createdAt,
//       bookData.updatedAt
//     );
//     book.save();
//   }

//   addStudent(studentData) {
//     const student = new Student(this.db, studentData);
//     student.save();
//   }

//   borrowBook(studentId, bookId) {
//     const student = Student.findById(this.db, studentId);
//     const book = Book.findById(this.db, bookId);

//     if (student && book && !book.isBorrowed) {
//       book.update({ isBorrowed: true });
//       console.log(
//         `Book "${book.title}" is borrowed by student "${student.name}".`
//       );
//     } else {
//       console.log(
//         "Unable to borrow the book. Please check the student and book IDs."
//       );
//     }
//   }

//   getBorrowedBooks() {
//     const books = Book.findAll(this.db);
//     const borrowedBooks = books.filter((book) => book.isBorrowed);
//     return borrowedBooks;
//   }

//   getAvailableBooks() {
//     const books = Book.findAll(this.db);
//     const availableBooks = books.filter((book) => !book.isBorrowed);
//     return availableBooks;
//   }

//   getBooksBorrowedByStudent(studentId) {
//     const student = Student.findById(this.db, studentId);

//     if (student) {
//       const books = Book.findAll(this.db);
//       const borrowedBooks = books.filter(
//         (book) => book.isBorrowed && book.borrowerId === studentId
//       );
//       return borrowedBooks;
//     } else {
//       console.log("Student not found.");
//       return [];
//     }
//   }

//   checkIfBookIsAvailable(bookId) {
//     const book = Book.findById(this.db, bookId);

//     if (book) {
//       if (book.isBorrowed) {
//         console.log(`Book "${book.title}" is currently not available.`);
//         return false;
//       } else {
//         console.log(`Book "${book.title}" is available.`);
//         return true;
//       }
//     } else {
//       console.log("Book not found.");
//       return false;
//     }
//   }
// }

// // create library instance
// const library = new LibraryApp(db, 1, "library1", "location1");

// // add book
// const newBook3 = {
//   id: 3,
//   title: "Book 3",
//   author: "book3author",
//   isBorrowed: false,
//   createdAt: null,
//   updatedAt: null,
// };

// library.addBook(newBook3);

// // add student
// const student3 = {
//   id: 3,
//   name: "student3",
//   grade: "grade3",
//   createdAt: null,
//   updatedAt: null,
// };

// library.addStudent(student3);

// // borrow book
// library.borrowBook(3, 3);

// // get borrowed books
// console.log(library.getBorrowedBooks());

// // get available books
// console.log(library.getAvailableBooks());

// // get books borrowed by student
// console.log(library.getBooksBorrowedByStudent(3));

// // check if a book is available
// library.checkIfBookIsAvailable(3);
console.log(db)