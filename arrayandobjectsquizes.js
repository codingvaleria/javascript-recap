// Problem 1: Object to Array Conversion
//  *
//  * Description:
//  * Write a JavaScript function that takes in an object and returns an array of arrays.
//  * Each sub-array should have two elements: the first element should be the key from
//  * the object, and the second element should be the corresponding value. For example,
//  * if the input object is {name: "John", age: 25, city: "New York"}, the function
//  * should return [["name", "John"], ["age", 25], ["city", "New York"]]. Call the function
//  * with an object of your choice and log the result to the console.
//  */

function objectToArray(obj) {
  // TODO: Write your solution here
    let array = Object.entries(obj);
    return array;   
}

console.log(objectToArray({ name: "John", age: 25, city: "New York" }));
// should log [["name", "John"], ["age", 25], ["city", "New York"]]
