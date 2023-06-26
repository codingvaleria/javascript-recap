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
    const newBookId = this.db.insert("books", {
      title: this.title,
      author: this.author,
      isBorrowed: this.isBorrowed,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    });

    const savedBook = Book.findById(this.db, newBookId);
    if (savedBook) {
      return savedBook;
    }

    return null;
  }

  static findById(db, id) {
    const bookObj = db.selectById("books", id);
    if (bookObj) {
      const book = new Book(
        db,
        bookObj.id,
        bookObj.title,
        bookObj.author,
        bookObj.isBorrowed,
        bookObj.createdAt,
        bookObj.updatedAt
      );
      return book;
    }
    return null;
  }

  static findAll(db) {
    const bookObjects = db.select("books");
    return bookObjects.map(
      (bookObj) =>
        new Book(
          db,
          bookObj.id,
          bookObj.title,
          bookObj.author,
          bookObj.isBorrowed,
          bookObj.createdAt,
          bookObj.updatedAt
        )
    );
  }

  update(data) {
    const updated = this.db.update("books", this.id, data);
    if (updated) {
      const updatedBook = Book.findById(this.db, this.id);
      if (updatedBook) {
        this.db = updatedBook.db;
        return updatedBook;
      }
    }
    return null;
  }
}

const newBook = {
  id: 1,
  title: "Book 1",
  author: "book1author",
  isBorrowed: "false",
  createdAt: null,
  updatedAt: null,
};

const book1 = new Book(
  db,
  newBook.id,
  newBook.title,
  newBook.author,
  newBook.isBorrowed,
  newBook.createdAt,
  newBook.updatedAt
);

const newBook2 = {
  id: 2,
  title: "Book 2",
  author: "book2author",
  isBorrowed: true,
  createdAt: null,
  updatedAt: null,
};

const book2 = new Book(
  db,
  newBook2.id,
  newBook2.title,
  newBook2.author,
  newBook2.isBorrowed,
  newBook2.createdAt,
  newBook2.updatedAt
);

const data = {
  title: "Rich dad, poor dad",
};

book1.save();
book2.save();

console.log(book1);
// console.log(Book.findById(db, 2));
// console.log(Book.findAll(db));
book1.update(data);
console.log(book1);
