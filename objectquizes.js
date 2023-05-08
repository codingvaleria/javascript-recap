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
    let person = {};
    person.name = "Valeria";
    person.age = 16;
    person["email"] = "valeria.email@example.com";
    return person;
  };

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
    // obj.address = address;
    // return obj;
  // with destructuring

  return  { ...obj, address: address };

  // shortened spreading
  return { ...obj, address };

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

// Problem 4: Modify a Property of an Object
//  *
//  * Description:
//  * Write a JavaScript function that takes in an object, a string representing the name of a
//  * property, and a new value. The function should modify the value of the property with the
//  * given name to the new value, and return the updated object. Call the function with an object
//  * of your choice, the name of one of its properties, and a new value, and log the resulting
//  * object to the console.
//  */

function modifyObjectProperty(obj, propertyName, newValue) {
  // TODO: Write your solution here
    obj[propertyName] = newValue;
    return obj;
}

console.log(
  modifyObjectProperty(
    { name: "John", age: 30, address: "123 Main St." },
    "age",
    35
  )
); // should log { name: "John", age: 35, address: "123 Main St." }

// solution 2 with destructuring
function modifyObjectProperty(obj, propertyName, newValue) {
  // TODO: Write your solution here
    // const modifiedObject = { ...obj };
    // modifiedObject[propertyName] = newValue;
    // // return modifiedObject

    return {...obj, [propertyName]: newValue };
}

console.log(
  modifyObjectProperty(
    { name: "John", age: 30, address: "123 Main St." },
    "age",
    35
  )
); // should log { name: "John", age: 35, address: "123 Main St." }

// Problem 5: Loop Through Object Properties
//  *
//  * Description:
//  * Write a JavaScript function that takes in an object and logs each of its property names
//  * and values to the console in the format "propertyName: propertyValue". Call the function
//  * with an object of your choice.
//  */

function logObjectProperties(obj) {
  // TODO: Write your solution here
    for (let propertyName in obj) {
        console.log(`${propertyName}: ${obj[propertyName]}`)
    }
  // also use Object.keys()
}

logObjectProperties({ name: "John", age: 30, address: "123 Main St." });
// should log:
// name: John
// age: 30
// address: 123 Main St.

// Problem: Check if an Object Has a Property
//  *
//  * Description:
//  * Write a JavaScript function that takes in an object and a string representing the name of
//  * a property. The function should return true if the object has a property with the given
//  * name, and false otherwise. Call the function with an object of your choice and the name of
//  * one of its properties.
//  */

function objectHasProperty(obj, propertyName) {
  // TODO: Write your solution here
    const objectKeys = Object.keys(obj);
  return objectKeys.includes(propertyName);

}

console.log(
  objectHasProperty({ name: "John", age: 30, address: "123 Main St." }, "name")
); // should log true
console.log(
  objectHasProperty(
    { name: "John", age: 30, address: "123 Main St." },
    "occupation"
  )
); // should log false

// solution 2
function objectHasProperty(obj, propertyName) {
  // TODO: Write your solution here
 return obj.hasOwnProperty(propertyName)
}

console.log(
  objectHasProperty({ name: "John", age: 30, address: "123 Main St." }, "name")
); // should log true
console.log(
  objectHasProperty(
    { name: "John", age: 30, address: "123 Main St." },
    "occupation"
  )
); // should log false

//  Solution 3
function objectHasProperty(obj, propertyName) {
  // TODO: Write your solution here
  return propertyName in obj;
}

console.log(
  objectHasProperty({ name: "John", age: 30, address: "123 Main St." }, "name")
); // should log true
console.log(
  objectHasProperty(
    { name: "John", age: 30, address: "123 Main St." },
    "occupation"
  )
); // should log false

// Problem 7: Merge Two Objects
//  *
//  * Description:
//  * Write a JavaScript function that takes in two objects and returns a new object that is the result of
//  * merging the two objects. If the two objects have a property with the same name, the value in the second
//  * object should overwrite the value in the first object. Call the function with two objects of your choice.
//  */

function mergeObjects(obj1, obj2) {
  // TODO: Write your solution here
  const mergedObject = { ...obj1, ...obj2 };
  return mergedObject;
}

console.log(
  mergeObjects({ name: "John", age: 30 }, { address: "123 Main St.", age: 35 })
);
// should log:
// { name: "John", age: 35, address: "123 Main St." }

//  Solution 2 : Using Object method
function mergeObjects(obj1, obj2) {
  // TODO: Write your solution here
  const mergedObject = Object.assign(obj1,obj2);
  return mergedObject;
}

console.log(
  mergeObjects({ name: "John", age: 30 }, { address: "123 Main St.", age: 35 })
);

// Problem 8: Check if Two Objects are Equal
//  *
//  * Description:
//  * Write a JavaScript function that takes in two objects and returns true if they are equal,
//  * meaning they have the same properties with the same values, and false otherwise. Call the
//  * function with two objects of your choice.
//  */

function areObjectsEqual(obj1, obj2) {
  // TODO: Write your solution here
    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);

    if (obj1Keys.length === obj2Keys.length) {
      return obj1Keys.every(key => obj2.hasOwnProperty(key) &&
        obj2[key] === obj1[key]);
    };
    return false;
}

console.log(
  areObjectsEqual({ name: "John", age: 30 }, { name: "John", age: 30 })
);
// should log: true

console.log(
  areObjectsEqual({ name: "John", age: 30 }, { name: "Jane", age: 25 })
);
// should log: false

// Solution 2
function areObjectsEqual(obj1, obj2) {
  // TODO: Write your solution here
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);

  if (obj1Keys.length === obj2Keys.length) {
    for (let key of obj1Keys) {
      if (obj1[key] === obj2[key]) {
        return true;
      }
    }
  }
  return false;
}

console.log(
  areObjectsEqual({ name: "John", age: 30 }, { name: "John", age: 30 })
);
// should log: true

console.log(
  areObjectsEqual({ name: "John", age: 30 }, { name: "Jane", age: 25 })
);

// Problem 9: Sort an Array of Objects
//  *
//  * Description:
//  * Write a JavaScript function that takes in an array of objects and a string representing the name
//  * of a property. The function should sort the array of objects in ascending order based on the value
//  * of the property with the given name, and return the sorted array. Call the function with an array of
//  * objects of your choice and the name of one of its properties.
//  */

function sortObjectsByProperty(arr, propertyName) {
  // TODO: Write your solution here
  const sortedObject = arr.sort(function (a, b) {
    return a[propertyName] - b[propertyName]
  })
  return sortedObject;
}

console.log(
  sortObjectsByProperty(
    [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 },
      { name: "Jim", age: 40 },
    ],
    "age"
  )
);
// should log:
// [{ name: "Jane", age: 25 }, { name: "John", age: 30 }, { name: "Jim", age: 40 }]

// Problem 10: Create an Object Method
//  *
//  * Description:
//  * Write a JavaScript function that takes in an object and a function. The function should add
//  * the given function as a method to the object, with the name "myMethod". The method should take
//  * no arguments, and should simply log the object to the console. Call the function with an object
//  * of your choice and a function of your choice.
//   */

function addObjectMethod(obj, method) {
  obj.myMethod = method;
}

const myObject = { name: "John", age: 30 };
addObjectMethod(myObject, function () {
  console.log(this);
});
myObject.myMethod(); // should log { name: "John", age: 30, myMethod: ƒ }
