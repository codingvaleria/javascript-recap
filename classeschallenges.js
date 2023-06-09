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
