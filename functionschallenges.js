// // Problem: Calculate Discount
// //  *
// //  * Description:
// //  * Write a JavaScript function that takes in the original price of a product
// //  * and a discount percentage as parameters. The function should calculate the
// //  * discounted price and return it. The discounted price is calculated by
// //  * subtracting the discount amount from the original price. For example,
// //  * if the original price is $100 and the discount percentage is 20%,
// //  * the discounted price would be $80. Round the result to two decimal places.
// //  */

// function calculateDiscountedPrice(originalPrice, discountPercentage) {
//   // TODO: Write your solution here
//   let discountedPrice =
//     originalPrice - originalPrice * (discountPercentage / 100);
//   let result = discountedPrice * 100;
//   return (Math.round(result) / 100).toFixed(2); // discountedPrice.toFixed(2);
// }

// console.log(calculateDiscountedPrice(100, 20)); // should log 80.00
// console.log(calculateDiscountedPrice(50, 10)); // should log 45.00
// console.log(calculateDiscountedPrice(75.5, 15)); // should log 64.18
// console.log(calculateDiscountedPrice(100, 33.33333)); // should log 64.18

// // Problem 2 : Calculate Final Price
// //  *
// //  * Description:
// //  * Write a JavaScript function that takes in the original price of a product,
// //  * an optional discount percentage, and an optional tax percentage as parameters.
// //  * The function should calculate the final price of the product after applying
// //  * the discount (if provided) and adding the tax (if provided). If no discount is
// //  * provided, the default discount percentage should be 0%. If no tax is provided,
// //  * the default tax percentage should be 0%.
// //  *
// //  * Implement the function calculateFinalPrice(originalPrice, discountPercentage = 0, taxPercentage = 0)
// //  * to calculate the final price of the product. Round the result to two decimal places.
// //  */

// function calculateFinalPrice(
//   originalPrice,
//   discountPercentage = 0,
//   taxPercentage = 0
// ) {
//   // TODO: Write your solution here
//   let discountedPrice =
//     originalPrice -
//     originalPrice * (discountPercentage / 100) +
//     (taxPercentage / 100) * originalPrice;
//   return discountedPrice.toFixed(2);
// }

// console.log(calculateFinalPrice(100)); // should log 100
// console.log(calculateFinalPrice(100, 10)); // should log 90
// console.log(calculateFinalPrice(100, 10, 8)); // should log 97.2

// // Problem 3: Filter Products
// //  *
// //  * Description:
// //  * You have an array of product objects with the following structure:
// //  *
// //  * {
// //  *   name: 'Product Name',
// //  *   price: 9.99,
// //  *   category: 'Category'
// //  * }
// //  *
// //  * Implement a JavaScript function filterProducts(products, category) that
// //  * takes in an array of product objects and a category as parameters. The
// //  * function should filter the products based on the given category and return
// //  * an array containing only the products belonging to that category.
// //  */

// function filterProducts(products, category) {
//   // TODO: Write your solution here
//   let categorizedArray = [];
//   for (let i = 0; i < products.length; i++) {
//     if (products[i].category === category) {
//       categorizedArray.push(products[i]);
//     }
//   }
//   return categorizedArray;
// }

// // Nested array example
// let nestedArray = [[{ student: ["name"] }]];
// nestedArray[0][0].student[0];

// const products = [
//   { name: "Product 1", price: 9.99, category: "Electronics" },
//   { name: "Product 2", price: 19.99, category: "Clothing" },
//   { name: "Product 3", price: 14.99, category: "Electronics" },
//   { name: "Product 4", price: 29.99, category: "Home" },
//   { name: "Product 5", price: 39.99, category: "Electronics" },
// ];

// filterProducts;
// console.log(filterProducts(products, "Electronics")); // should log an array with products 1, 3, and 5
// console.log(filterProducts(products, "Clothing")); // should log an array with product 2
// console.log(filterProducts(products, "Home")); // should log an array with product 4

// // Problem: Validate Password
// //  *
// //  * Description:
// //  * Write JavaScript functions to validate a password based on the following criteria:
// //  *
// //  * 1. isLengthValid(password): This function should take a password as a parameter
// //  *    and return true if the password is at least 8 characters long, and false otherwise.
// //  *
// //  * 2. hasUppercaseLetter(password): This function should take a password as a
// //  *    parameter and return true if the password contains at least one uppercase
// //  *    letter, and false otherwise.
// //  *
// //  * 3. hasLowercaseLetter(password): This function should take a password as a
// //  *    parameter and return true if the password contains at least one lowercase
// //  *    letter, and false otherwise.
// //  *
// //  * 4. hasNumericDigit(password): This function should take a password as a
// //  *    parameter and return true if the password contains at least one numeric digit, and false otherwise.
// //  *
// //  * Write a main function validatePassword(password) that calls these helper
// //  * functions to validate the password based on all the criteria. The main function
// //  * should return true if the password is valid, and false otherwise.
// //  */

// function isLengthValid(password) {
//   return password.length >= 8;
// }

// function hasUppercaseLetter(password) {
//   return password !== password.toLowerCase();
// }

// function hasLowercaseLetter(password) {
//   return password !== password.toUpperCase();
// }

// function hasNumericDigit(password) {
//   for (let i = 0; i < password.length; i++) {
//     // if (password[i] >= "0" && password[i] <= "9") {
//     //   }
//     //   checking if the element is a digit
//     // if (parseInt(password[i]) !== isNaN) {
//     if (!isNaN(parseInt(password[i]))) {
//       return true;
//     }
//   }
// }

// function validatePassword(password) {
//   // TODO: Write your solution here
//   if (
//     isLengthValid(password) &&
//     // if (isLengthValid(password)) // consider this as the return value not condition after evaluation
//     hasLowercaseLetter(password) &&
//     hasUppercaseLetter(password) &&
//     hasNumericDigit(password)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(validatePassword("Abcdefg1")); // should log true
// console.log(validatePassword("12345678")); // should log false
// console.log(validatePassword("Password123")); // should log true

// //  Problem: Filter Unique Values
// //  *
// //  * Description:
// //  * Write a JavaScript function called `isUnique` that takes in an array
// //  * and a value as parameters. The function should return true if the value
// //  * is unique in the array (i.e., it appears only once), and false otherwise.
// //  *
// //  * Use this function to implement another function called `filterUniqueValues`
// //  * that takes in an array and returns a new array with only the unique values
// //  * from the original array. The function should preserve the order of the unique
// //  * values as they appear in the original array.
// //  */

// function isUnique(array, value) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === value) {
//       count++;
//     }
//   }

//   if (count === 1) {
//     return true; // is unique
//   } else {
//     return false;
//   }
// }

// function filterUniqueValues(array) {
//   // TODO: Write your solution here
//   let uniqueValues = [];
//   for (let i = 0; i < array.length; i++) {
//     let result = isUnique(array, array[i]);
//     if (result === true) {
//       uniqueValues.push(array[i]);
//     }
//   }
//   return uniqueValues;
// }

// const nums = [1, 2, 3, 4, 4, 5, 2, 6, 1];
// const fruits = ["apple", "banana", "apple", "orange", "banana", "grape"];

// console.log(filterUniqueValues(nums)); // should log [3, 5, 6]
// console.log(filterUniqueValues(fruits)); // should log ["orange", "grape"]

// // Problem: Calculate Factorial
// //  *
// //  * Description:
// //  * Write a JavaScript function that takes in a positive integer as a parameter
// //  * and calculates its factorial. The factorial of a number is the product of
// //  * all positive integers less than or equal to the number. For example, the
// //  * factorial of 5 (denoted as 5!) is calculated as 5 * 4 * 3 * 2 * 1 = 120.
// //  *
// //  * Implement the function calculateFactorial(num) to calculate the factorial
// //  * of the given number. If the input number is 0, the function should return 1.
// //  *
// //  * NOTE: You should not use a loop to solve this problem.
// //  */

// function calculateFactorial(num) {
//   let factorial = 1;
//   // TODO: Write your solution here
//   if (num < 0) {
//     return false;
//   } else if (num === 0) {
//     return 1;
//   } else {
//     for (let i = 1; i <= num; i++) {
//       factorial = factorial * i;
//     }
//   }
//   return factorial;
// }

// console.log(calculateFactorial(5)); // should log 120
// console.log(calculateFactorial(0)); // should log 1
// console.log(calculateFactorial(10)); // should log 3628800

// // Problem: Array Transformation
// //  *
// //  * Description:
// //  * Write a JavaScript function that takes in an array of numbers and a
// //  * callback function as parameters. The function should transform each element of the
// //  * array using the callback function and return a new array with the transformed elements.
// //  *
// //  * Implement the function transformArray(array, callback) to transform the array
// //  * by applying the callback function to each element. The callback function
// //  * should accept an element as a parameter and return the transformed value.
// //  */

// function transformArray(array, callback) {
//   // TODO: Write your solution here
//   let result2 = [];
//   for (let i = 0; i < array.length; i++) {
//     let callbackResult = callback(array[i]);
//     result2.push(callbackResult);
//   }
//   return result2;
// }

// function double(number) {
//   return number * 2;
// }

// function square(number) {
//   return number * number;
// }

// const numbers = [1, 2, 3, 4, 5];

// console.log(transformArray(numbers, double)); // should log [2, 4, 6, 8, 10]
// console.log(transformArray(numbers, square)); // should log [1, 4, 9, 16, 25]

//  Problem: Filter Numbers
//  *
//  * Description:
//  * Write a JavaScript function called `filterNumbers` that takes in an array of
//  * numbers and an array of predicate functions as parameters. The function should
//  * filter the numbers based on the predicate functions and return a new array
//  * containing only the numbers for which all predicates return false.
//  *
//  * Implement the function `filterNumbers(numbers, predicates)` to filter the
//  * numbers array using the predicate functions. The predicate functions should
//  * accept a number as a parameter and return a boolean value indicating whether
//  * the number satisfies the predicate condition.
//  */

function filterNumbers(numbers, predicates) {
  // TODO: Write your solution here
  // access the array of numbers
  // pick out a number and passit to every function in the predicate array
  //  if the number returns false in both predicate tests, the number should be pushed to the resultisFalse array.
  // return the return is false array.

  let i = 0;
  let resultisFalse = [];

  while (i < numbers.length) {
    // Do a predicate check
    let currentNumber = numbers[i];
    console.log(currentNumber);
    i++;
    let j = 0;
    let allPredicatesEqualFalse = true;
    while (j < predicates.length) {
      let returnedValue = predicates[j](currentNumber);
      if (returnedValue === true) {
        allPredicatesEqualFalse = false;
      }
      j++;
    }
    if (allPredicatesEqualFalse === true) {
      resultisFalse.push(currentNumber);
    }
  }
  return resultisFalse;
}

function isEven(number) {
  return number % 2 === 0;
}

function isPositive(number) {
  return number > 0;
}

const nums2 = [-1, 2, 3, 4, -5, 6, 7, -8];
const predicates = [isEven, isPositive];

console.log(filterNumbers(nums2, predicates)); // should log [-1, -5]

// //  * Problem: Modify Age and Undo
// //  *
// //  * Description:
// //  * Write a JavaScript function called `modifyAgeAndUndo` that takes in an array
// //  * of objects, where each object has a property `age` and a function `modifyAge`.
// //  * The `modifyAge` function should accept a number as a parameter and modify the
// //  * `age` property of the object. The `modifyAgeAndUndo` function should modify the
// //  * `age` property of each object in the array and also add a new function `undoModify` to each object.
// //  * The `undoModify` function should reset the `age` property of the object to its original value.
// //  *
// //  * Implement the function `modifyAgeAndUndo(objects)` to modify the `age` property
// //  * of each object and add the `undoModify` function.
// //  *
// //  * Return a new array containing the modified objects.
// //  */

// function modifyAgeAndUndo(objects) {
//   // TODO: Write your solution here
//   let modifiedObjects = [];

//   for (let i = 0; i < objects.length; i++) {
//     // console.log(objects[i]);
//     objects.modifyAge = function newAge(newAge) {
//       this.age = newAge;
//       console.log(objects.modifyAge);
//       objects.undoModify = function undoModifyAge() {
//         this.age = objects.age;
//       };
//       console.log(objects.undoModify);
//       // modifiedObjects.push(objects);
//       modifiedObjects.push(objects[i]);
//     };

//     console.log(modifiedObjects);
//   }
//   // return modifiedObjects;
// }

// const person1 = {
//   name: "John",
//   age: 30,
//   modifyAge(newAge) {
//     this.age = newAge;
//   },
// };

// const person2 = {
//   name: "Alice",
//   age: 25,
//   modifyAge(newAge) {
//     this.age = newAge;
//   },
// };

// const objects = [person1, person2];

// const modifiedObjects = modifyAgeAndUndo(objects);

// console.log(modifiedObjects[0].age); // should log the modified age value for person1
// console.log(modifiedObjects[1].age); // should log the modified age value for person2

// modifiedObjects[0].undoModify();
// modifiedObjects[1].undoModify();

// console.log(modifiedObjects[0].age); // should log the original age value for person1
// console.log(modifiedObjects[1].age); // should log the original age value for person2
