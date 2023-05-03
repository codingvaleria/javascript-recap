// //  Creating objects - They represent real entites
// // Object literal

// let alien = {
//   name: "Valeria",
//   technology: "JavaScript",
//   age: 20,
//   laptop: {
//     cpu: "i7",
//     ram: 4,
//     brand: "Asus",
//   },
// };

// console.log(alien);
// // Accessing properites
// // Use dot operation
// console.log(alien.name);
// console.log(alien.technology);
// console.log(alien.age);

// // using bracket notation
// console.log(alien["name"]);
// console.log(alien["technology"]);
// console.log(alien["age"]);

// console.log(alien.laptop);
// console.log(alien.laptop.brand.length);

// // delete
// console.log(delete alien.laptop);
// console.log(alien);

// // print properties of an object one by one

// for (let key in alien) {
//   console.log(key);
//   console.log(key, alien[key]); // fetch value
// }

// // Fetch all properties of laptop
// for (let key in alien.laptop) {
//   console.log(alien.laptop[key]);
// }

// //  Looping over over Objects
// let user = {
//   name: 'John',
//   age: 20,
//   occupation : 'Teacher',
// }
// // Looping over to get property names
// let propertyNames = Object.keys(user);
// for (let propertyName of propertyNames) {
//   console.log(propertyName);
// }

// //  Looping over to get property values
// let propertyValues = Object.values(user);
// for (let propertyValue of propertyValues) {
//   console.log(propertyValue);
// }

// // Looping over to get both values and keys
// let entries = Object.entries(user);
// for (let entry of entries) {
//   console.log(`${entry[0]}: ${entry[1]}`);
// }

// // or
// for (let [key, val] of entries) {
//   console.log(`${key}: ${val}`);
// }

// Non destructively update objects

let tuesdayMenu = { cheesePlate: { soft: "Chèvre", semiSoft: "Gruyère", hard: "Manchego" }, fries: "Sweet potato", salad: "Caesar" }

function nondestructivelyUpdateObject(obj, key, value) {
  const newObj = { ...obj };
  
  newObj[key] = value;

  return newObj;
}

const sundayMenu = nondestructivelyUpdateObject(tuesdayMenu, "fries", "Shoestring");

console.log(tuesdayMenu.fries);
//=> "Sweet potato"

console.log(sundayMenu.fries);
//=> "Shoestring"

// Refactoring the above code
function nondestructivelyUpdateObject(obj, key, value) {
  return {
    ...obj,
    [key]: value,
  };
}


