//  Creating objects - They represent real entites
// Object literal

let alien = {
    name: "Valeria",
    technology: "JavaScript",
    "age": 20,
    laptop: {
        cpu: 'i7',
        ram: 4,
        brand: 'Asus'
    }
}

console.log(alien)
// Accessing properites
// Use dot operation
console.log(alien.name)
console.log(alien.technology)
console.log(alien.age)


// using bracket notation
console.log(alien['name'])
console.log(alien['technology'])
console.log(alien["age"])

console.log(alien.laptop)
console.log(alien.laptop.brand.length)

// delete
console.log(delete alien.laptop)
console.log(alien)

// print properties of an object one by one

for (let key in alien) {
    console.log(key);
    console.log(key, alien[key])// fetch value
   
}

// Fetch all properties of laptop
for (let key in alien.laptop) {
  console.log(alien.laptop[key]);
}

// Arrays
// Accessing elements in an array
// using bracket notation


// Nested arrays
// Array Methods
//  Destructive methods
// push method - end of an array.
const superheroes = ["Catwoman", "Storm", "Jessica Jones"];

superheroes.push("Wonder Woman");
// => 4

superheroes;
// => ["Catwoman", "Storm", "Jessica Jones", "Wonder Woman"]

// unshift - add to the beginning of an array.
const cities = ["New York", "San Francisco"];

cities.unshift("Boston", "Chicago");

cities;
// => ["Boston", "Chicago", "New York", "San Francisco"]
//  Non - destructive methods
//  Spread operator
const coolCities = ["New York", "San Francisco"]
 
const copyOfCoolCities = [...coolCities]

// pop - remove last element
const days = ["Mon", "Tue", "Wed", "Thurs"]
days.pop()

// shift - remove element from first index

const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

daysOfTheWeek.shift();
// => "Mon"

days;
// => [Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

// Slice 