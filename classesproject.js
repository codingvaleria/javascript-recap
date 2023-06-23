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
    // console.log(entry);
    this.lastIds[tableName] = nextId;
    return nextId;
  }
}

let db = new InMemoryDatabase();
// console.log(db);
// console.log(db.select(1));
// console.log(db.selectById(2));
// console.log(db.update());
// console.log(db.insert());

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

  save() {
    let newBookObj = this.db.insert("books", {
      title: this.title,
      author: this.author,
      isBorrowed: this.isBorrowed,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    });
    return newBookObj;
  }

  static findById(db, id) {
    let bookObj = db.selectById("books", id);
    return bookObj;
  }

  static findAll(db) {
    let booksObjects = db.select("books");
    return booksObjects;
  }

  update(data) {
    let updatedBook = this.db.update("books", data.id, data);
    if (updatedBook === true) {
      return Book.findById(db, data.id);
    } else {
      return null;
    }
  }
}

let newBook = {
  id: 1,
  title: "Book 1",
  author: "book1author",
  isBorrowed: "false",
  createdAt: null,
  updatedAt: null,
};

let book1 = new Book(
  db,
  newBook.id,
  newBook.title,
  newBook.author,
  newBook.isBorrowed,
  newBook.createdAt,
  newBook.updatedAt
);

let newBook2 = {
  id: 2,
  title: "Book 2",
  author: "book2author",
  isBorrowed: true,
  createdAt: null,
  updatedAt: null,
};

let book2 = new Book(
  db,
  newBook2.id,
  newBook2.title,
  newBook2.author,
  newBook2.isBorrowed,
  newBook2.createdAt,
  newBook2.updatedAt
);

let data = {
  id: 2,
  title: "Rich dad, poor dad",
  author: "Michael Jensen",
  isBorrowed: false,
  createdAt: null,
  updatedAt: null,
};

book1.save();
book2.save();
console.log(book2);
console.log(Book.findById(db, 2));
console.log(db);
console.log(Book.findAll(db));
console.log(book.update(data));
