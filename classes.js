// Object Orientation
// This helps us avoid passing arguments to every instance.

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //methods
  sayHello() {
    console.log(`Hello, my name is ${this.name}.`);
  }

  sayAge() {
    console.log(`I am ${this.age} years old.`);
  }

  haveBirthday(age) {
    console.log("Its my birthday!");
    this.age += 1;
  }
}

let morgan = new Person("Morgan", 24);
console.log(morgan.sayHello());
console.log(morgan.sayAge());
console.log(morgan.haveBirthday());
console.log(morgan.sayAge());
console.log(morgan);

// class instances are unique
// this acts a reference to the object it is inside
// we can access instance properties using the variable object

class Square {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }

  area() {
    return this.sideLength * this.sideLength;
  }
}

const square1 = new Square(5);
square1; // Square { sideLength: 5 }
square1.area(); // 25

// Private Properties
// in normal situations, properties are accessible outside the class
class Transaction {
  constructor(amount, date, memo) {
    this.amount = amount;
    this.date = date;
    this.memo = memo;
  }
}

const deposit = new Transaction(100.24, "06/06/2023", "Grocery store");
deposit.amount; //100.24
deposit.amount = 10000.24;
deposit.amount; // 10000.24;

// to make methods and properties private, prepend #
// They cannot be accessed or changed from outside the class.
class Transaction2 {
  // declare private fields
  #amount;
  #date;
  #memo;
  constructor(amount, date, memo) {
    // assign values to private fields
    this.#amount = amount;
    this.#date = date;
    this.#memo = memo;
  }
}
const transaction2 = new Transaction2(100.24, "03/04/2018", "Grocery Shopping");
transaction2.amount; // undefined;

// Confirm  if i have some methods private
class Transaction3 {
  // declare private fields
  #amount;

  constructor(amount, date, memo) {
    // assign values to private fields
    this.#amount = amount;
    this.date = date;
    this.memo = memo;
  }
}
const transaction3 = new Transaction3(100.24, "03/04/2018", "Grocery Shopping");
transaction3.amount; // undefined;

class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

class Dinner {
  #dessert;
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }
}

class Cat {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return `${this.name} says meow`;
  }
}
class Dog {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    return `${this.name} says woof`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name;
    this.sex = sex;
  }
  speak() {
    if (this.sex === "male") {
      return `It's me ! ${this.name} the parrot`;
    } else {
      return `${this.name} says sqawk!`;
    }
  }
}
