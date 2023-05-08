//  Creating objects - They represent real entites
// Object literal

let alien = {
  name: "Valeria",
  technology: "JavaScript",
  age: 20,
  laptop: {
    cpu: "i7",
    ram: 4,
    brand: "Asus",
  },
};

console.log(alien);
// Accessing properites
// Use dot operation
console.log(alien.name);
console.log(alien.technology);
console.log(alien.age);

// using bracket notation
console.log(alien["name"]);
console.log(alien["technology"]);
console.log(alien["age"]);

console.log(alien.laptop);
console.log(alien.laptop.brand.length);

// delete
console.log(delete alien.laptop);
console.log(alien);

// print properties of an object one by one

for (let key in alien) {
  console.log(key);
  console.log(key, alien[key]); // fetch value
}

// Fetch all properties of laptop
for (let key in alien.laptop) {
  console.log(alien.laptop[key]);
}

//  Looping over over Objects
let user = {
  name: 'John',
  age: 20,
  occupation : 'Teacher',
}
// Looping over to get property names
let propertyNames = Object.keys(user);
for (let propertyName of propertyNames) {
  console.log(propertyName);
}

//  Looping over to get property values
let propertyValues = Object.values(user);
for (let propertyValue of propertyValues) {
  console.log(propertyValue);
}

// Looping over to get both values and keys
let entries = Object.entries(user);
for (let entry of entries) {
  console.log(`${entry[0]}: ${entry[1]}`);
}

// or
for (let [key, val] of entries) {
  console.log(`${key}: ${val}`);
}

let oneBook = {
  title: 'Eloquent JavaScript',
  author: 'Marijn Haverbeke',
  publisher : 'No starch press'
}

for (let key in oneBook){
  console.log(key)
}

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

// Remove properties from an object
let cat = {
  name: "Rose",
  age: 6,
  color: "white",
  owner: "Eeeks",
}

console.log(delete cat.owner);
// => true
console.log(cat)
// => { name: 'Rose', age: 6, color: 'white' }

// Copying and Merging Objects
let developer1 = {};
developer1.name = "Edward";
developer1["stack"] = "javaScript";
console.log(developer1);

let developer2 = { ...developer1, name: "Valeria", experience: 6 };
console.log(developer2);

let developer3 = Object.assign(developer1, developer2);
console.log(developer3);

let shallowArr = [123, "bob", true, null, undefined];

let object = { name: "Alice", age: 20, gender: "female" };
console.log(typeof object);
let deepArr = [
  123,
  "bob",
  true,
  ["Hank", "Brent", "Lacy"],
  { Rouleau: "Dog River", Wilcox: "Woolerton" },
];


let s = 'steve';
let g = s;
s = 'new value'
console.log(s,g)

let arr = shallowArr;
shallowArr[0] = 456;
console.log(arr, shallowArr);

//  Shallow copy Methods
// 1. Array.from(arr)
arr = Array.from(shallowArr);
shallowArr[0] = 456;
console.log(shallowArr);
console.log(arr);

// 2. spread operator
arr = [...shallowArr];
console.log(arr);

// 3. concat
arr = [].concat(shallowArr);
console.log(arr);

// 4 arr.slice(0)
arr = shallowArr.slice(0);
console.log(arr)

// 5. Object.create({}, obj)
let newObject = Object.create({}, object);
console.log(newObject);

// 6. Object.assign({}, obj)
newObject = Object.assign({}, object);
console.log(newObject);

// Deep copy methods
let deepObj = {
  characters: ["Wanda", "Davis", "Emma", "Karen"],
  places: ["Corner Gas", "Ruby", "Foo Mart"],
  grad68: false,
  seasons: 5,
};

// 1. JSON.parse(JSON.stringify())
let object2 = { ...deepObj }
console.log(deepObj);
console.log(object2);

//  Reference vs Value

object2.places[0] = 'Ottawa'; // Changes both objects because the array is a reference point in memory.
object2.places = ['Ottawa', 'calcutta'] // creating a new ref;
console.log(deepObj);
console.log(object2);

// solution to above

let otherObj = JSON.parse(JSON.stringify(deepObj));
otherObj.places[0] = 'Shanghai';
console.log(otherObj, deepObj);