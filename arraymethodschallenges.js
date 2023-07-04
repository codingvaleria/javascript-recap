/* Problem: Convert Celsius to Fahrenheit
 *
 * Description:
 * Write a JavaScript function that takes in an array of Celsius temperatures and
 * returns a new array with the equivalent Fahrenheit temperatures. The formula to
 * convert Celsius to Fahrenheit is F = C * 9/5 + 32. For example, if the input array
 * is [0, 10, 25, 30], the function should return [32, 50, 77, 86]. Call the function
 * with an array of your choice and log the result to the console.
 */

// function convertCelsiusToFahrenheit(celsiusTemperatures) {
//   // TODO: Write your solution here
//   return celsiusTemperatures.map(
//     (celsiusTemperature) => (celsiusTemperature * 9) / 5 + 32
//   );
// }

// console.log(convertCelsiusToFahrenheit([0, 10, 25, 30])); // should log [32, 50, 77, 86]
// console.log(convertCelsiusToFahrenheit([-40, 0, 100])); // should log [-40, 32, 212]
// console.log(convertCelsiusToFahrenheit([15, 20, 35, 40])); // should log [59, 68, 95, 104]

/*Problem: Filter Long Words
 *
 * Description:
 * Write a JavaScript function that takes in an array of words and a number
 * `maxLength`. The function should return a new array containing only the words
 * that have a length less than or equal to `maxLength`. For example, if the input
 * array is ["apple", "banana", "grape", "kiwi"] and `maxLength` is 5, the function
 * should return ["apple", "grape", "kiwi"]. Call the function with an array and a
 * `maxLength` of your choice and log the result to the console.
 */

// function filterLongWords(words, maxLength) {
//   // TODO: Write your solution here
//   return words.filter((word) => word.length <= maxLength);
// }

// console.log(filterLongWords(["apple", "banana", "grape", "kiwi"], 5)); // should log ["apple", "grape", "kiwi"]
// console.log(
//   filterLongWords(["programming", "javascript", "code", "developer"], 7)
// ); // should log ["code"]
// console.log(filterLongWords(["hello", "world"], 10)); // should log ["hello", "world"]

/**
 * Date: 2023-07-03
 *
 * Problem: Check Pass/Fail Status
 *
 * Description:
 * Write a JavaScript function that takes in an array of exam scores and a passing
 * threshold. The function should return true if all the scores in the array are
 * equal to or greater than the passing threshold, and false otherwise. Call the
 * function with an array of your choice and a passing threshold, and log the result
 * to the console.
 */

// function checkPassFailStatus(scores, passingThreshold) {
//   // TODO: Write your solution here
//   return scores.every((score) => score > passingThreshold);
// }

// console.log(checkPassFailStatus([80, 90, 75, 85], 70)); // should log true
// console.log(checkPassFailStatus([60, 55, 70, 65], 65)); // should log false
// console.log(checkPassFailStatus([90, 95, 88, 92], 90)); // should log false

/* Problem: Check Array Inclusion
 *
 * Description:
 * Write a JavaScript function that takes in two arrays, `mainArray` and `subArray`,
 * and checks if all the elements of `subArray` are included in `mainArray`. The function
 * should return true if `mainArray` includes all the elements of `subArray`, and false
 * otherwise. Use the `includes` method for array elements comparison. Call the function
 * with two arrays of your choice and log the result to the console.
 */

// function checkArrayInclusion(mainArray, subArray) {
//   // TODO: Write your solution here
//   return mainArray.some((e) => subArray.includes(e));
// }

// console.log(checkArrayInclusion([1, 2, 3, 4, 5], [2, 3])); // should log true
// console.log(checkArrayInclusion([1, 2, 3, 4, 5], [6, 7])); // should log false
// console.log(
//   checkArrayInclusion(["apple", "banana", "orange"], ["banana", "orange"])
// ); // should log true

/* Problem: Check Even Number Presence
 *
 * Description:
 * Write a JavaScript function that takes in an array of numbers and returns true
 * if at least one of the numbers is an even number, and false otherwise. Call the function with
 * an array of your choice and log the result to the console.
 */

// function checkEvenNumberPresence(numbers) {
//   // TODO: Write your solution here
//   return numbers.some((number) => number % 2 === 0);
// }

// console.log(checkEvenNumberPresence([1, 3, 5, 7, 9])); // should log false
// console.log(checkEvenNumberPresence([1, 2, 3, 4, 5])); // should log true
// console.log(checkEvenNumberPresence([2, 4, 6, 8, 10])); // should log true

/*Problem: Calculate Total Value
 *
 * Description:
 * Write a JavaScript function that takes in an object where the keys represent
 * item names and the values represent item prices. The function should calculate
 * and return the total value of all items in the object. Call the function with
 * an object of your choice and log the result to the console.
 */

// function calculateTotalValue(items) {
//   // TODO: Write your solution here
//   const itemValues = Object.values(items);
//   let totalValue = itemValues.reduce((acc, value) => acc + value);
//   return totalValue;
// }

// const items = {
//   apple: 0.5,
//   banana: 0.3,
//   orange: 0.7,
// };

// console.log(calculateTotalValue(items)); // should log 1.5

/* Problem: Calculate Average
 *
 * Description:
 * Write a JavaScript function that takes in an array of numbers and calculates
 * the average value. The function should use the `reduce` method to sum all the
 * numbers in the array and then divide the sum by the number of elements to obtain
 * the average. Call the function with an array of your choice and log the result to
 * the console.
 */

function calculateAverage(numbers) {
  // TODO: Write your solution here
    let sum = numbers.reduce((acc, number) => acc + number);
    return sum / numbers.length;
}

console.log(calculateAverage([1, 2, 3, 4, 5])); // should log 3
console.log(calculateAverage([10, 20, 30, 40, 50])); // should log 30
console.log(calculateAverage([2, 4, 6, 8, 10])); // should log 6
