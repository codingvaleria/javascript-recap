// Problem 1: Create an Object
//  *
//  * Description:
//  * Write a JavaScript function that creates an object called `person` with three properties:
//  * `name`, `age`, and `email`. The values of these properties should be your own name, age,
//  * and email address, respectively. Return the `person` object. Call the function and log
//  * the resulting object to the console.
//  */

function createPersonObject() {
  // TODO: Write your solution here
  let person = {
    name: "Valeria",
    age: 16,
    email: "valeria.email@example.com",
  };
  return person;
}

console.log(createPersonObject()); // should log { name: "Your Name", age: 20, email: "your.email@example.com"}

//  Problem 2 : Add a Property to an Object
//  *
//  * Description:
//  * Write a JavaScript function that takes in an object and a string. The function should add
//  * a new property to the object with the name "address" and the value of the string argument
//  * passed to the function. Return the updated object. Call the function with an object of your
//  * choice and a string of your choice and log the resulting object to the console.
//  */

function addAddressProperty(obj, address) {
  // TODO: Write your solution here
    obj.address = address;
    return obj;
}

console.log(addAddressProperty({ name: "John", age: 30 }, "123 Main St.")); // should log { name: "John", age: 30, address: "123 Main St." }

// Problem 3: Access a Property of an Object
//  *
//  * Description:
//  * Write a JavaScript function that takes in an object and a string representing the name of
//  * a property. The function should return the value of the property with the given name. Call
//  * the function with an object of your choice and the name of one of its properties, and log
//  * the resulting value to the console.
//  */

function accessObjectProperty(obj, propertyName) {
  // TODO: Write your solution here
    return obj[propertyName];
}

console.log(
  accessObjectProperty(
    { name: "John", age: 30, address: "123 Main St." },
    "name"
  )
); // should log "John"