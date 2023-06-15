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
   - `save(data)`: Save the book to the database.

 Book attributes:
   - `id` (number): The unique identifier of the book.
   - `title` (string): The title of the book.
   - `author` (string): The author of the book.
   - `isBorrowed` (boolean): Whether the book is borrowed or not.
   - `createdAt` (Date): When this entry was created
   - `updatedAt` (Date): When this entry was last updated
  
*/

class Book {
  constructor(db, id, title, author, isBorrowed, createdAt, updatedAt) {
    this.db = db;
    this.id = id;
    this.title = title;
    this.author = author;
    this.isBorrowed = isBorrowed;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

/*
2. Implement the Student class:
   - `constructor(db)`: Initialize the Student instance.
   - `findById(id)`: Query the database to retrieve the student with the given id.
   - `findAll()`: Retrieve all saved students from the database.
   - `update(data)`: Update the student's attributes with the provided data.
   - `save(data)`: Save the student to the database.


   Student attributes:
   - `id` (number): The unique identifier of the student.
   - `name` (string): The name of the student.
   - `grade` (string): The grade of the student.
   - `createdAt` (Date): When this entry was created
   - `updatedAt` (Date): When this entry was last updated

3. Implement the Admin class:
   - `constructor(db)`: Initialize the Admin instance.
   - `findById(id)`: Query the database to retrieve the admin with the given id.
   - `findAll()`: Retrieve all saved admins from the database.
   - `update(data)`: Update the admin's attributes with the provided data.
   - `save(data)`: Save the admin to the database.
   - `checkPassword(name, password)`: Check if the provided name and password match the admin's credentials. Return `true` if they match, and `false` otherwise.

   Admin attributes:
   - `id` (number): The unique identifier of the admin.
   - `name` (string): The name of the admin.
   - `password` (string): The password of the admin.
   - `createdAt` (Date): When this entry was created
   - `updatedAt` (Date): When this entry was last updated

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
