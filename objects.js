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
