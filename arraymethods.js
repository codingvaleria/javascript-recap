/*
 Map
- Executes a given function on every element of an array and returns a new array
*/
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

// return an array of all names
let names = characters.map((character) => character.name);

// return an array of name and height for every character
let minifiedCharacters = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));

// get an array of all the first names
let firstNames = characters.map((character) => character.name.split(" ")[0]);

/* 
Filter Method
-Creates a new array by removing all the elements which return a falsy value.
*/

// Mass > 100
const massGreaterThan100 = characters.filter(
  (character) => character.mass > 100
);

/* Every
executes a callback function on every element of an array and returns true if all elements in the array return true
*/

//All blue eyes
const allBlueEyes = characters.every(
  (character) => character.eye_color === "blue"
);

/* Some
Executes a callback function on every element of an array and returns true if at least one element returns true. if all elements return false then will return false.
*/

/* Reduce
iterate through each to get a total. must include an accumulator
*/

const totalMass = characters.reduce((acc, curr) => acc + curr.mass, 0);
console.log(totalMass);
