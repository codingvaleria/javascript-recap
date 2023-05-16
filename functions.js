// What are functions and why?
// Reusability-They take some type of logic and puts that in a particular piece that can be run every single time needed

// Control flow of execution
// sayHi(); // Functions can be invoked before they are declared
// Creating/declaring  Functions; name; block of code, call
function sayHi() {
  console.log("Hi");
  console.log("Bye");
}

// Hoisting ;- the ability to call a function before its declaration
// Function initialization - Anonymous function
const dataTypes = function () {
  console.log(
    "(numbers, strings, null, undefined, symbols, objects, boolean, bigInt)"
  );
};

dataTypes();

// Calling/Invoking functions
sayHi();

// Function arguments
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

let fivebyFive = doMath(5,5)