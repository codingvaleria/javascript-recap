// What are functions and why?
// Reusability-They take some type of logic and puts that in a particular piece that can be run every single time needed

// Control flow of execution
// sayHi(); // Functions can be invoked before they are declared
// Creating/declaring  Functions; name; block of code, call
// Function declaration
function sayHi() {
  console.log("Hi");
  console.log("Bye");
}

// Hoisting ;- the ability to call a function before its declaration
// Function expression - Anonymous function

const dataTypes = function () {
  console.log(
    "(numbers, strings, null, undefined, symbols, objects, boolean, bigInt)"
  );
};

dataTypes();

// Calling/Invoking functions
sayHi();

// Function arguments also referred to as generalization
function sum(a, b) {
  console.log(a + b);
}

sum(2, 1);

// Function returns - getting data out of a function
function sum2(a, b) {
  return a + b;
}

sum2(2, 1);

function sayHello(name) {
  console.log(`Hi ${name}`);
}

sayHello('Valeria');

const doMath = function (number, number2) {
    return (number * number2)
//     console.log(number * number)
}
doMath(5, 5)

// Return - returns a value , declares end of fn
//  Without declaring a return value functions will return undefined

let fivebyFive = doMath(5, 5)

// invoking anonymous functions, mostky invoked as a callback function

// const button = document.getElementById('button');
// button.addEventListener('click', function () {
//     console.log('You clicked me');
// })

// Another way is by declaring a varibale and assigning hte function as its value
const fn = function () {
    console.log('How many times did you click me?');
}

//  calling the anonymous function
fn(); 

//  Another way is by IIFE - Immediately Invoked Function Expression
const fn2 = (function (name) {
  console.log("My name is " + name);
})("Alice");

// Function level scope
// Means if a function is defined inside another function, the inner function has access to all the paramters and variables defined in the outer function.

function outer(greeting, msg = "It's a fine day to learn") {
  const innerFunction = function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  };
  return innerFunction("student", "JavaScript");
}

console.log(outer("Hello"));

// can be refactored
function outer2(greeting, msg = "it's a fine day to learn") {
  return function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  };
}

console.log(outer2("Goodmorning")("Student", "Postgres"));

// Closure
// An anonymous function that let out the value of variables defined in their parent function
// Functions inside of other functions

const array = (function (thingToAdd) {
  const base = 3;
  return [
    function () {
      return base + thingToAdd;
    },
    function () {
      return base;
    }
  ];
})(2);

