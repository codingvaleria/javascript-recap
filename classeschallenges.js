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
