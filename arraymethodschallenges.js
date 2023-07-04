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

function filterLongWords(words, maxLength) {
  // TODO: Write your solution here
  return words.filter((word) => word.length <= maxLength);
}

console.log(filterLongWords(["apple", "banana", "grape", "kiwi"], 5)); // should log ["apple", "grape", "kiwi"]
console.log(
  filterLongWords(["programming", "javascript", "code", "developer"], 7)
); // should log ["code"]
console.log(filterLongWords(["hello", "world"], 10)); // should log ["hello", "world"]
