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

// Method Types
// instance methods- Ara available to every instance of a class and act as behaviours of each instance.
// static - class level methods; only accessible to the class itself

class CommonMath {
  static triple(number) {
    return number * number * number;
  }

  static findHypotenuse(a, b) {
    return Math.sqrt(a * a + b * b);
  }
}

const num = CommonMath.triple(3);
CommonMath.findHypotenuse(5, 4);

// getter
class Square2 {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }
  // get keyword converts a method to a pseudo-property
  get area() {
    return this.sideLength * this.sideLength;
  }
}

const square2 = new Square2(5);
console.log(square2.sideLength);
square2.area(); // TypeError; area is no longer a method but a property
square2.area; // 25 ;

// setter - used to create a reassignabble pseudo-property.
class square5 {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }

  get area() {
    return this.sideLength * this.sideLength;
  }

  set area(newArea) {
    this.sideLength = Math.sqrt(newArea);
  }
}

const square4 = new square5(5);
square4.sideLength; // => 5
square4.area; // => 25
square4.area = 64;
square4.sideLength; // => 8
square4.area; // => 64

// Using get and set with private fields
class Square6 {
  #sideLength;
  constructor(sideLength) {
    if (sideLength > 0) {
      this.#sideLength = sideLength;
    } else {
      throw new Error("A square's side length must be a positive value");
    }
  }

  get sideLength() {
    this.#sideLength;
  }

  set sideLength(sideLength) {
    if (sideLength > 0) {
      this.#sideLength = sideLength;
    } else {
      throw new Error("A square's side length must be a positive value");
    }
  }
}

// Inheritance
// Allows to have a base class where other classes can inherit from
// Reduces duplicate code.

class Animal {
  constructor(name, breed, age) {
    this["name"] = name;
    this.breed = breed;
    this.age = age;
    this.favFood = [];
  }

  introduce() {
    return `Hi my name is ${this.name}`;
  }

  addFood = (food) => {
    this.favFood.push(food);
  };

  loopThroughFoods() {
    console.log(this);
    this.favFood.forEach(this.logFood);
  }

  logFood = (food) => {
    console.log(this);
    console.log(`Hi my name is ${this.name} and I love to eat ${food}`);
  };
}

class Cat extends Animal {
  speak() {
    return "meow";
  }
}

let rose = new Cat("rose", "domestic longhair", 9);
let loci = new Cat("loci", "Birman", 5);
rose.addFood("Fish");
rose.addFood("chicken");
rose.addFood("houseplants");
console.log(rose);

class Dog extends Animal {
  speak() {
    return "woof";
  }
}

let boofer = new Dog("boofer", "Bulldog", 5);
console.log(boofer);

class Bird extends Animal {
  // adopting special properties on instatiation
  constructor(name, breed, age) {
    super(name, breed, age);
    this.canFly = true;
  }
}

const bird = new Bird("bubbles", "chicken", "2");
bird.addFood("chickmash");
console.log(bird);
