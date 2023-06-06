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

