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

// // Reversing using loops
// // for
function reverseString(string) {
  // TODO: Write your solution here
  let stringArray = [];
  for (let i = string.length; i >= 0; i--) {
    stringArray.push(string.charAt(i));
  }
  return stringArray.join("");
}
console.log(reverseString(string));

// //  while
function reverseString(string) {
  // TODO: Write your solution here
  let stringArray = [];
  let i = string.length;
  while (i >= 0) {
    stringArray.push(string.charAt(i));
    i--;
  }
  return stringArray.join("");
}
console.log(reverseString(string));
// // do..while
function reverseString(string) {
  // TODO: Write your solution here
  let stringArray = [];
  let i = string.length;

  do {
        stringArray.push(string.charAt(i));
        i--;
      }
  while (i >= 0)
  return stringArray.join("");
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
  let reversedString = str.split("").reverse().join("");
  let isPalindrome =
    str === reversedString
      ? "The string is a palindrome."
      : "The string is not a palindrome";
  return isPalindrome;
}

console.log(palindromeChecker(str));

//  Palindrome using loops
function palindromeChecker(str) {
  // TODO:  Implement the prompt for whether the string is a palindrome
  str = str.toLowerCase();
  let strStartsWith = [];
  let strEndsWith = [];

  for (let i = 0; i < parseInt(str.length / 2); i++) {
    strStartsWith.push(str.charAt(i));
  }
  strStartsWith = strStartsWith.join("");

  for (let i = str.length - 1; i > parseInt((str.length - 1) / 2); i--) {
    strEndsWith.push(str.charAt(i));
  }
  strEndsWith = strEndsWith.join("");

  return strStartsWith === strEndsWith
    ? "The string is a palindrome."
    : "The string is not a palindrome.";
}

console.log(palindromeChecker("RaceCar"));

// Problem 4: Word Frequency
//  *
//  * Description:
//  * Write a JavaScript function that takes in a string as an argument
//  * and returns an object containing the frequency of each word in the string.
//  * For example, if the input string is "hello world world", the function should
//  * return {hello: 1, world: 2}. The function should ignore 
//  * treat uppercase and lowercase letters as equivalent. Call the function
//  * with a string of your choice and log the result to the console.
//  */

function wordFrequency(str) {
  //   // TODO: Write your solution here
  let stringLowerCase = str.toLowerCase();
  let wordsArray = stringLowerCase.split(" ");

  // Count frequency of each word
  let wordsCount = {};

  for (let i = 0; i < wordsArray.length; i++) {
    let key = wordsArray[i];
    let value = wordsCount[key]

    if (value === undefined) {
      wordsCount[key] = 1;
    }
    else {
      wordsCount[key] = value + 1;
    }
  }
  return wordsCount;
}

console.log(wordFrequency("hello world world"));
console.log(wordFrequency("Hello World This is a test Hello world"));

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
 function fizzBuzz() {
    for (let number = 1; number <= 100; number++){
        switch (true) {
          case (number % 3 === 0 && number % 5 === 0):
                console.log("FizzBuzz")
                break;
            case number % 5 === 0:
                console.log("Buzz")
                break;
            case number % 3 === 0:
                console.log("Fizz")
                break;
          default:
            console.log(`${number}`)
            break;
        }
    }
 }
fizzBuzz()

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
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(arraySum([1, 2, 3, 4, 5])); // should log 15

//  Problem 7: Find Maximum Number
//  *
//  * Description:
//  * Write a JavaScript function that takes in an array of numbers as an argument
//  * and returns the largest number in the array. Call the function
//  * with an array of your choice and log the result to the console.
//  */

function findMaxNumber(arr) {
  // TODO: Write your solution here
  sortedArray = arr.sort(function (a, b) {
    return b - a;
  });
  return sortedArray[0];
}

console.log(findMaxNumber([5, 10, 2, 7, 1])); // should log 10
// Find Maximum using loops
function findMaxNumber(arr) {
  //   // TODO: Write your solution here
  let max = arr[0];
  for (let i = 0; i < arr.length; i++){
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max;
}
  console.log(findMaxNumber([5, 10, 2, 7, 1])); // should log 10

// Problem 8: Weird Palindrome
//  *
//  * Description:
//  * Write a JavaScript function that takes in a string as an argument
//  * and returns true if the string is a palindrome (reads the same backwards
//  * as forwards) and false otherwise. The function should ignore whitespace
//  * and treat uppercase and lowercase letters as equivalent. Call the function
//  * with a string of your choice and log the result to the console.
//  */

function isPalindrome(str) {
  // TODO: Write your solution here
  str = str.toLowerCase().replace(/\s/g, '');

  let stringReverse = str.split('').reverse().join('');

  if (str === stringReverse) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isPalindrome("racecar")); // should log true
console.log(isPalindrome("hello")); // should log false
console.log(isPalindrome("A man a plan a canal Panama")); // should log true

// Problem 9: Find Average
//  *
//  * Description:
//  * Write a JavaScript function that takes in an array of numbers as an argument
//  * and returns the average (mean) of the numbers. Call the function with an array
//  * of your choice and log the result to the console.
//  */

function findAverage(arr) {
  // TODO: Write your solution here
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(findAverage([5, 10, 2, 7, 1])); // should log 5
console.log(findAverage([1, 2, 3, 4, 5])); // should log 3
console.log(findAverage([-1, 0, 1])); // should log 0

// Problem 10: Multiplication Table
//  *
//  * Description:
//  * Write a JavaScript function that takes in a number n as an argument
//  * and logs the multiplication table for that number from 1 to 10.
//  * For example, if n is 3, the function should log:
//  *
//  * 3 x 1 = 3
//  * 3 x 2 = 6
//  * 3 x 3 = 9
//  * 3 x 4 = 12
//  * 3 x 5 = 15
//  * 3 x 6 = 18
//  * 3 x 7 = 21
//  * 3 x 8 = 24
//  * 3 x 9 = 27
//  * 3 x 10 = 30
//  *
//  * Call the function with a number of your choice and log the result to the console.
//  */

function multiplicationTable(n) {
  // TODO: Write your solution here
    let i = 1;
    while (i <= 10) {
        let result = i * n;
        console.log(`${n} * ${i} = ${result}`);
        i++;
    }
}

multiplicationTable(5); // should log the multiplication table for 5 from 1 to 10

// Problem 11: Find Duplicates
//  *
//  * Description:
//  * Write a JavaScript function that takes in an array of numbers as an argument
//  * and returns an array of the numbers that appear more than once in the original array.
//  * The returned array should not contain any duplicates.
//  *
//  * For example, if the input array is [1, 2, 3, 4, 5, 2, 4], the function should return [2, 4].
//  *
//  * Call the function with an array of your choice and log the result to the console.
//  */

function findDuplicates(arr) {
  // TODO: Write your solution here
  let duplicateNumbers = [];
  let uniqNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];

    if (uniqNumbers.includes(currentValue)) {
      if (!duplicateNumbers.includes(currentValue)) {
        duplicateNumbers.push(currentValue);
      }
    } else {
      uniqNumbers.push(currentValue);
    }
  }
  return duplicateNumbers;

}

console.log(findDuplicates([1, 2, 3, 4, 5, 2, 4])); // should log [2, 4]
console.log(findDuplicates([1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5])); // should log [1, 2, 3, 4, 5]
console.log(findDuplicates([1, 2, 3, 4, 5])); // should log []

// Problem 12: Capitalize Words
//  *
//  * Description:
//  * Write a JavaScript function that takes in a string and returns a new string
//  * with the first letter of each word capitalized. All other letters in each word
//  * should be lowercase. For example, if the input string is "hello world", the
//  * function should return "Hello World". Call the function with a string of your
//  * choice and log the result to the console.
//  */

function capitalizeWords(str) {
  // TODO: Write your solution here
  let splitWord = str.split(" ");
  let capitalizedArray = splitWord.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })
  console.log(capitalizedArray.join(" "))
}

console.log(capitalizeWords("hello world")); // should log "Hello World"
console.log(capitalizeWords("this is a test")); // should log "This Is A Test"
console.log(capitalizeWords("capitalize ME")); // should log "Capitalize Me"
