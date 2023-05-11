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

// Problem 2: Array Intersection
//  *
//  * Description:
//  * Write a JavaScript function that takes in two arrays and returns a new array that contains
//  * only the elements that are present in both input arrays (i.e., the intersection of the
//  * two arrays). For example, if the input arrays are [1, 2, 3] and [2, 3, 4], the function
//  * should return [2, 3]. Call the function with two arrays of your choice and log the result
//  * to the console.
//  */

function arrayIntersection(arr1, arr2) {
  // TODO: Write your solution here
  let intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      intersection.push(arr1[i]);
    }
  }
  return intersection;
}

console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // should log [2, 3]
console.log(
  arrayIntersection(["apple", "banana", "orange"], ["banana", "pear"])
); // should log ["banana"]

//  Problem 3: Object Difference
//  *
//  * Description:
//  * Write a JavaScript function that takes in two objects and returns a new object that includes
//  * only the properties that are present in the first object but not in the second object. For
//  * example, if the first object is {a: 1, b: 2, c: 3} and the second object is {b: 2}, the
//  * function should return {a: 1, c: 3}. Call the function with two objects of your choice
//  * and log the result to the console.
//  */

function objectDifference(obj1, obj2) {
  // TODO: Write your solution here
  let uniqueproperties = {};

  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key)) {
      uniqueproperties[key] = obj1[key];
    }
  }
  return uniqueproperties;
}

console.log(objectDifference({ a: 1, b: 2, c: 3 }, { b: 2 })); // should log {a: 1, c: 3}
console.log(objectDifference({ x: "foo", y: "bar" }, { y: "baz", z: "qux" })); // should log {x: "foo"}
