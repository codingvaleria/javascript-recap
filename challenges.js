const prompt = require("prompt-sync")();

// Problem 1: Even or odd
// Write a JavaScript program that prompts the user to enter a
//  * number and checks if it is even or odd.
//  * If the number is even, print
//  * "The number is even." If the number is odd, print "The number is odd."
//  */

let number = prompt("Enter a number: ");

function evenOrOdd() {
  //   TODO: write your solution here
  number = number % 2 === 0 ? "The number is even" : "The number is odd";
  return number;
}

console.log(evenOrOdd(number));

// Problem 2: Reverse a String
// Write a JavaScript function that prompts the user for a string
//  * and returns the string reversed. For example, if the input string is
//  * "hello", the function should return "olleh"

let string = prompt("Enter a string: ");
function reverseString(string) {
  // TODO: Write your solution here
  string = string.split("").reverse().join("");
  return string;
}

console.log(reverseString(string));

//  Problem 3: Palindrome Checker
// Write a JavaScript function that prompts the user for a string and
//  * checks if the string is a palindrome. A palindrome is a word, phrase,
//  * number, or other sequence of characters that reads the same forward and
//  * backward. For example, "racecar" is a palindrome. If the string is a
//  * palindrome, the function should return "The string is a palindrome."
//  * Otherwise, it should return "The string is not a palindrome."

let str = prompt("Enter a string: ");
function palindromeChecker(str) {
  // TODO:  Implement the prompt for whether the string is a palindrome
    str = str.toLowerCase();
    let reversedString = str.split('').reverse().join('');
    let isPalindrome = str === reversedString ? "The string is a palindrome." : "The string is not a palindrome";
    return isPalindrome;
}

console.log(palindromeChecker(str));

// Problem 4: Word Frequency
//  *
//  * Description:
//  * Write a JavaScript function that takes in a string as an argument
//  * and returns an object containing the frequency of each word in the string.
//  * For example, if the input string is "hello world world", the function should
//  * return {hello: 1, world: 2}. The function should ignore punctuation and
//  * treat uppercase and lowercase letters as equivalent. Call the function
//  * with a string of your choice and log the result to the console.
//  */

function wordFrequency(str) {
  // TODO: Write your solution here

}

console.log(wordFrequency("Hello, World! This is a test. Hello world!"));

// Problem 5: FizzBuzz
//  *
//  * Description:
//  * Write a JavaScript function that loops through numbers from 1 to 100
//  * and logs "Fizz" for multiples of 3, "Buzz" for multiples of 5, and
//  * "FizzBuzz" for multiples of both 3 and 5. If a number is not a multiple
//  * of either 3 or 5, the function should simply log the number itself.
//  * Call the function.
//  */

function fizzBuzz() {
  // TODO: Write your solution here
  for (let number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log(`${number}`);
    }
  }
}

fizzBuzz();

// Problem 6: Array Sum
//  *
//  * Description:
//  * Write a JavaScript function that takes in an array of numbers as an argument
//  * and returns the sum of all the numbers in the array. Call the function
//  * with an array of your choice and log the result to the console.
//  */

function arraySum(arr) {
  // TODO: Write your solution here
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    
    }
    return sum;
}

console.log(arraySum([1, 2, 3, 4, 5])); // should log 15
