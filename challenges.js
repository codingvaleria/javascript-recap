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

function palindromeChecker() {
  // TODO:  Implement the prompt for whether the string is a palindrome
    
  return isPalindrome(str);
}

console.log(palindromeChecker());

