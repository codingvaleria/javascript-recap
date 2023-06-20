/*
Challenge: JavaScript Library Project

Requirements:
1. Implement the following models: Book, Student, Admin, and LibraryApp.
2. Each model should have an id attribute along with other relevant attributes.
3. Each model's constructor should receive the database instance as the first parameter and it should be named `db`.
4. Each model should use the `db` parameter for querying by id or retrieving all saved entries, updating data, and saving data.
5. The InMemoryDatabase class should receive the name of the table and the required data to run queries, updates, or selects.
6. Use the InMemoryDatabase implementation provided for this challenge.

Steps:
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

class Book {
  constructor(db, obj) {
    this.db = db;
    this.id = obj.id;
    this.title = obj.title;
    this.author = obj.author;
    this.isBorrowed = obj.isBorrowed;
    this.createdAt = obj.createdAt;
    this.updatedAt = obj.updatedAt;
  }

  findById(id) {
    let bookObj = this.db.selectById("books", id);
    //   So to get the instance of Book rather than just an object
    let book = new Book(
      this.db, // the instance of previous /existing objects
      bookObj
    );
    return book;
  }

  static findAll(db) {
    let booksObjects = db.select("books");
    let books = [];
    for (let i = 0; i < booksObjects.length; i++) {
      let book = new Book(db, booksObjects[i]);
      books.push(book);
    }
    return books;
  }

  update(data) {
    let isUpdated = this.db.update("books", this.id, data);
    if (isUpdated === true) {
      return this.findById(this.id);
    } else {
      return null;
    }
  }

  save() {
    let id = this.db.insert("books", {
      title: this.title,
      author: this.author,
      isBorrowed: this.isBorrowed,
    });
    this.id = id;
  }
}

/*
2. Implement the Student class:
   - `constructor(db)`: Initialize the Student instance.
   - `findById(id)`: Query the database to retrieve the student with the given id.
   - `findAll()`: Retrieve all saved students from the database.
   - `update(data)`: Update the student's attributes with the provided data.
   - `save()`: Save the student to the database.


   Student attributes:
   - `id` (number): The unique identifier of the student.
   - `name` (string): The name of the student.
   - `grade` (string): The grade of the student.
   - `createdAt` (Date): When this entry was created
   - `updatedAt` (Date): When this entry was last updated
*/

class Student {
  constructor(db, obj) {
    this.db = db;
    this.id = obj.id;
    this.name = obj.name;
    this.grade = obj.grade;
    this.createdAt = obj.createdAt;
    this.updatedAt = obj.updatedAt;
  }

  findById(id) {
    let studentObj = this.db.selectById("students", id);
    let student = new Student(this.db, studentObj);
    return student;
  }

  static findAll(db) {
    let studentsObjects = db.select("students");
    let students = [];
    for (let i = 0; i < studentsObjects.length; i++) {
      let student = new Student(db, studentsObjects[i]);
      students.push(student);
    }
    return students;
  }

  update(data) {
    let studentIsUpdated = this.db.update("students", this.id, data);
    if (studentIsUpdated === true) {
      return this.findById(this.id);
    } else {
      return null;
    }
  }

  save() {
    let id = this.db.insert("students", {
      name: this.name,
      grade: this.grade,
    });
    this.id = id;
  }
}

/*
3. Implement the Admin class:
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
    this.name = obj.name;
    this.password = obj.password;
    this.createdAt = obj.createdAt;
    this.updatedAt = obj.updatedAt;
  }

  save() {
    let id = this.db.insert("admins", {
      name: this.name,
      password: this.password,
    });
    this.id = id;
  }

  findById(id) {
    let adminObj = this.db.selectById("admins", id);
    let admin = new Admin(this.db, adminObj);
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
      return this.findById(this.id);
    } else {
      return null;
    }
  }
}

/*
4. Implement the LibraryApp class:
   - `constructor(db, id, name, location)`: Initialize the LibraryApp instance.
   - `addBook(bookData)`: Add a new book to the library. The `bookData` parameter should be an object with Book properties.
   - `borrowBook(studentId, bookId)`: Allow a student to borrow a book. The `studentId` and `bookId` parameters represent the IDs of the student and the book, respectively.
   - `getBorrowedBooks()`: Retrieve an array of books that are currently borrowed from the library.
   - `getAvailableBooks()`: Retrieve an array of books that are currently available in the library.
   - `getBooksBorrowedByStudent(studentId)`: Retrieve an array of books borrowed by a specific student. The `studentId` parameter represents the ID of the student.
   - `checkIfBookIsAvailable(bookId)`: Check if a book with the given ID is available in the library. Return `true` if available, and `false` otherwise.

5. Use the provided InMemory Database implementation to store and retrieve data.

Note: Feel free to add any additional methods or functionalities to enhance the models or the overall project.
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

// Create a database instance
const db = new InMemoryDatabase();

// Create and save some books
const book1 = new Book(db, {
  title: "Book 1",
  author: "Author 1",
  isBorrowed: false,
});
book1.save();

const book2 = new Book(db, {
  title: "Book 2",
  author: "Author 2",
  isBorrowed: true,
});
book2.save();

const book3 = new Book(db, {
  title: "Book 3",
  author: "Author 3",
  isBorrowed: false,
});
book3.save();
// console.log(Book.findAll(db));

// Create and save some students
const student1 = new Student(db, {
  id: 1,
  name: "Student 1",
  grade: "Grade 1",
});
student1.save();

const student2 = new Student(db, {
  id: 2,
  name: "Student 2",
  grade: "Grade 2",
});
student2.save();

const student3 = new Student(db, {
  id: 3,
  name: "Student 3",
  grade: "Grade 3",
});
student3.save();

// console.log(Student.findAll(db));

// Create and save some admins
const admin1 = new Admin(db, {
  id: 1,
  name: "admin 1",
  password: "admin1",
});

admin1.save();

const admin2 = new Admin(db, {
  id: 2,
  name: "admin 2",
  password: "admin2",
});

admin2.save();

// make changes to the admin
admin1.name = "John Doe";
//update the admin
const updatedAdmin = admin1.update({ name: admin1.name });
