/*
 Map
- Executes a given function on every element of an array and returns a new array
*/
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leila Organa",
    height: "150",
    mass: "49",
    eye_color: "black",
    gender: "female",
  },
];

// return an array of all names
let names = characters.map((character) => character.name);
console.log(names);
// return an array of name and height for every character
let minifiedCharacters = characters.map((character) => ({
  name: character.name,
  height: character.height,
}));

// get an array of all the first names
let firstNames = characters.map((character) => character.name.split(" ")[0]);
console.log(firstNames);
