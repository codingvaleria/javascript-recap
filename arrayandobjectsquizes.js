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

function objectToArray2(obj) {
  let objectKeys = Object.keys(obj);
  let objectValues = Object.values(obj);
  let keyValueArray = [];

  for (let i = 0; i < objectKeys.length && i < objectValues.length; i++) {
    keyValueArray.push([objectKeys[i], objectValues[i]]);
  }
  return keyValueArray;
}
console.log(objectToArray2({ name: "John", age: 25, city: "New York" }));
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

// console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // should log [2, 3]
// console.log(
//   arrayIntersection(["apple", "banana", "orange"], ["banana", "pear"])
// ); // should log ["banana"]

function arrayIntersection2(arr1, arr2) {
  // TODO: Write your solution here
  let intersection = [];

  for (let i = 0; i < arr1.length; i++) {
    let elOne = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      if (elOne === arr2[j]) {
        intersection.push(arr2[j]);
      }
    }
  }
  return intersection;
}

console.log(arrayIntersection2([1, 2, 3], [2, 3, 4])); // should log [2, 3]
console.log(
  arrayIntersection2(["apple", "banana", "orange"], ["banana", "pear"])
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

// Problem: Array Chunking
//  *
//  * Description:
//  * Write a JavaScript function that takes in an array and a chunk size and returns a new array
//  * where each element of the original array is split into subarrays of length chunk size (except
//  * for the last element, which can be shorter). For example, if the input array is [1, 2, 3, 4, 5]
//  * and the chunk size is 2, the function should return [[1, 2], [3, 4], [5]]. Call the function
//  * with an array of your choice and a chunk size of your choice and log the result to the console.
//  */

function arrayChunking(arr, chunkSize) {
  //   // TODO: Write your solution here
  let chunkedArray = [];
  let chunks = [];

  for (let i = 0; i < arr.length; i++) {
    if (chunks.length < chunkSize) {
      chunks.push(arr[i]);
    }
    if (chunks.length === chunkSize) {
      chunkedArray.push(chunks);
      chunks = [];
    }
  }
    if (chunks.length != 0) {
      chunkedArray.push(chunks);
    }
  return chunkedArray;
}

console.log(arrayChunking([1, 2, 3, 4, 5], 2)); // should log [[1, 2], [3, 4], [5]]
console.log(arrayChunking(["apple", "banana", "orange", "pear", "grape"], 3)); // should log [["apple", "banana", "orange"], ["pear", "grape"]]

// Problem: Array to object conversion
// Convert this array into an object of key value pairs
let array = [
  ["name", "John"],
  ["age", 25],
  ["city", "New York"],
];

let object = {}
for (let i = 0; i < array.length; i++) {
  object[array[i][0]] = array[i][1];
}
console.log(object);

  // Problem 5:Object Filter
//  *
//  * Description:
//  * Write a JavaScript function that takes in an object and a callback function. The callback
//  * function takes two arguments: the key and the value of the object. The function should
//  * return a new object that only includes key-value pairs where the value satisfies the
//  * callback function. For example, if the input object is {a: 1, b: 2, c: 3} and the callback
//  * function is (key, value) => value > 1, the function should return {b: 2, c: 3}. Call the
//  * function with an object and a callback function of your choice and log the result to the console.
//  */

// function objectFilter(obj, callback) {
//   // TODO: Write your solution here
// }

// console.log(objectFilter({ a: 1, b: 2, c: 3 }, (key, value) => value > 1));
// // should log {b: 2, c: 3}
// //

// /**

// Problem: Array Flattening
//  *
//  * Description:
//  * Write a JavaScript function that takes in an array of nested arrays and returns a new
//  * array that is flattened (i.e., all elements are at the top level). For example, if the
//  * input array is [1, [2, [3, 4], 5], 6], the function should return [1, 2, 3, 4, 5, 6].
//  * Call the function with an array of your choice and log the result to the console.
//  */

function flattenArray(arr) {
  // TODO: Write your solution here

  let flattenedArray = [];

}

console.log(flattenArray([1, [2, [3, 4], 5], 6])); // should log [1, 2, 3, 4, 5, 6]
console.log(
  flattenArray([
    ["a", "b"],
    ["c", ["d", "e"]],
  ])
); // should log ["a", "b", "c", "d", "e"]

// Problem: Array of Objects Filtering
//  *
//  * Description:
//  * Write a JavaScript function that takes in an array of objects and a key-value pair, and
//  * returns a new array that includes only the objects that have a matching property-value
//  * pair. For example, if the input array is [{name: "Alice", age: 30}, {name: "Bob", age: 25},
//  * {name: "Charlie", age: 40}] and the key-value pair is {age: 30}, the function should
//  * return [{name: "Alice", age: 30}]. Call the function with an array of your choice and
//  * a key-value pair of your choice and log the result to the console.
//  */

function filterArrayOfObjects(arr, keyValue) {
  // TODO: Write your solution here
}

console.log(
  filterArrayOfObjects(
    [
      { name: "Alice", age: 30 },
      { name: "Bob", age: 25 },
      { name: "Charlie", age: 40 },
    ],
    { age: 30 }
  )
); // should log [{name: "Alice", age: 30}]

console.log(
  filterArrayOfObjects(
    [
      { name: "John", country: "USA" },
      { name: "Maria", country: "Brazil" },
      { name: "Elena", country: "Italy" },
    ],
    { country: "Brazil" }
  )
); // should log [{name: "Maria", country: "Brazil"}]
