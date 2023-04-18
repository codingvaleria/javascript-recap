// if
let weather = "rain"

if (weather == "rain") {
    console.log("The weather is rainy")
}

// if else
let num1 = 6;
let num2 = 14;

if (num1 > num2) {
    console.log("num1 is greater");
} else {
    console.log("num2 is greater");
}

// Odd or even
let num = 41;
let result

if (num % 2 === 0) {
    result = "Even"
}
else {
    result = "Odd"
}

console.log(result);

// Ternary operator

result = num % 2 === 0 ? "Even" : "Odd"
console.log(result);

// else if
firstNumber = 40;
secondNumber = 45;
thirdNumber = 5;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
  console.log("firstNumber is greatest");
} else if (secondNumber > thirdNumber) {
  console.log("secondNumber is greatest");
} else {
  console.log("thirdNumber is greatest");
}


let day = "Holiday";

if (day === "Monday") {
    console.log("Set alarm at 7.00am")
}
else if (day === "Tuesday" || day === "Wednesday" || day === "Thursday") {
    console.log("Set alarm at 4.00a.m")
}
else if (day === "Friday") {
    console.log("Set alarm for 9.00a.m")
}
else if (day === "Sunday" || day === "Saturday") {
    console.log("Set alarm for 8.00a.m")
}
else {
    console.log("Enter a valid day")
}

// Switch statement

switch (day) {
    case 'Monday':
        console.log("7a.m");
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        console.log("9a.m")
        break;
    case 'Friday':
        console.log("9.00am")
        break;
    case "Sunday":
    case "Saturday":
        console.log("8.00a.m")
        break;
    default:
        console.log("let's sleep all day")
}