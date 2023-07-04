/* Problem: Convert Celsius to Fahrenheit
 *
 * Description:
 * Write a JavaScript function that takes in an array of Celsius temperatures and
 * returns a new array with the equivalent Fahrenheit temperatures. The formula to
 * convert Celsius to Fahrenheit is F = C * 9/5 + 32. For example, if the input array
 * is [0, 10, 25, 30], the function should return [32, 50, 77, 86]. Call the function
 * with an array of your choice and log the result to the console.
 */

function convertCelsiusToFahrenheit(celsiusTemperatures) {
  // TODO: Write your solution here
  return celsiusTemperatures.map(
    (celsiusTemperature) => (celsiusTemperature * 9) / 5 + 32
  );
}

console.log(convertCelsiusToFahrenheit([0, 10, 25, 30])); // should log [32, 50, 77, 86]
console.log(convertCelsiusToFahrenheit([-40, 0, 100])); // should log [-40, 32, 212]
console.log(convertCelsiusToFahrenheit([15, 20, 35, 40])); // should log [59, 68, 95, 104]
