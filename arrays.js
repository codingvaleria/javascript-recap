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
const coolCities = ["New York", "San Francisco"];

const copyOfCoolCities = [...coolCities];

// pop - remove last element
const days = ["Mon", "Tue", "Wed", "Thurs"];
days.pop();

// shift - remove element from first index

const daysOfTheWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

daysOfTheWeek.shift();
// => "Mon"

days;
// => [Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

// Slice
let dayOfTheWeek = ["Mon", "Tue", "Wed", "Thurs", "Fri"];
dayOfTheWeek.slice(2, 4); // [ 'Wed', 'Thurs' ] // two arguments give a range

dayOfTheWeek.slice(3); // [ 'Thurs', 'Fri' ] // one argument gives how many items to remove

// Splice
// Syntax (index start count,no.of positions, argument to replace)
let users = ["val", "boss", "jb", "O'Bee", "Mark", "Alice"];

// One argument ; removes items according to the number in argument and returns a new array with the removed elements

users.splice(1);

//  With two arguments ; the first index indicates the starting position and the second dictates how many elements to remove from the array.

const masiku = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
masiku.splice(2, 3); // => ["Wed", "Thu", "Fri"]
masiku; // => ["Mon", "Tue", "Sat", "Sun"]

// With three arguments
const cards = [
  "Ace of Spades",
  "Jack of Clubs",
  "Nine of Clubs",
  "Nine of Diamonds",
  "Three of Hearts",
];

cards.splice(2, 1, "Ace of Clubs");
// => ["Nine of Clubs"]

cards;
// => ["Ace of Spades", "Jack of Clubs", "Ace of Clubs", "Nine of Diamonds", "Three of Hearts"]

// We can also use it to insert any number of elements within an array by passing 0 as second argument
const books = ["the bluest eye", "Kindred", "The grass dancer"];

books.splice(2, 0, "Giovanni's room", "The color purple"); // => []

books; // => ["The Bluest Eye", "Kindred", "Giovanni’s Room", "The Color Purple", "The Grass Dancer"]

// iterating through arrays
//  for ...of

let booksList = ["Eloquent Javascript", 'Javascript: The Good parts', 'Learn JavaScript Visually', 'You don\t know js', 'JavaScript: The Definitive Guide']
for (let book of booksList) {
  console.log(book);
}

// //  The every method

// function isPositive(item) {
//   return item > 0;
// }

// const numbers = [3, 4, 5, 6, 7];

// const res = numbers.every(isPositive);

// console.log(res);

// // some method

