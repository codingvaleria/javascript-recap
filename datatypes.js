// Number

let x = 7;
console.log(typeof x)

let num = 7.90
console.log(typeof num)


// String
let y = "hello world";
let w = 'hello'
console.log(typeof y)
console.log(typeof w)

// Boolean 
let answer = true;
console.log(typeof answer)

// undefined
let a;
console.log(typeof a)
    
// BigInt
let bigNumber = 5351726318237463892891232109381n;
console.log(typeof bigNumber)

//  Null
//  will mostly mean is not available

// Array
let myList = ["dave", 9, true, "Alice"]

function hello() {
    console.log("hello")
}

// objects
let character = {
    name: "alice",
    color: "blue",
    speed: 1000,
    fast : true
}

//  Symbol
const s1 = Symbol()
console.log(typeof s1)

 
let favDrink = "Water"
console.log(typeof favDrink)

let favNum = 3
console.log(typeof favNum)

let worseNum = 5.78
console.log(typeof favNum)

numbers = favNum + worseNum
console.log(numbers)
console.log(typeof numbers)


function myFavs() {
    console.log (favNum)
    console.log(worseNum)
    console.log(numbers)
}

myFavs()

let person = {
    name: "john",
    age: 30

}
console.log(typeof person.name)