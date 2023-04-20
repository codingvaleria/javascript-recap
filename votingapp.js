const prompt = require("prompt-sync")();
const currentPassword = "abcd";

// Problem: Simple Voting Command Line Application

// Description:
// Create a command line application using JavaScript that allows an admin to add candidates, a voter to view a list of the candidates and vote for their favorite candidate, and the admin to display the score of each candidate. The application should be in a loop and only the admin should be able to stop it. The admin should have a password and they should be able to reset it.

// Requirements:

// 1. Display a welcome message to the user when the application is started.
const welcomeMessage = console.log(
    `Welcome to Kura yako voting app`    
)

let choice = prompt(
    `Please select choice to login:
    1. As an admin
    2. As a voter
    ` 
);

// 2. Implement a login feature for the admin using a password.

if (choice === "1") {
    console.log("                WELCOME TO THE ADMIN PORTAL                     ")
}
 let password = prompt("Enter your password: ");

if (password === currentPassword) {
  // 3. Once the admin is logged in, display a menu of options that the admin can choose from.
    console.log("login successful")
}
let action = prompt(
  ` Please select actions you would like to perform
        1. Add new candidates
        2. Display sore of each candidate
        3. Reset your password
          `
);

// 4. Implement the ability for the admin to add new candidates to the list of candidates.
let arrayOfCandidates = ["nitawapea maji", "i'll build hospitals", "nitaongeza bursary", "bei ya unga"]
if (action === "1") {
    console.log(`Here's a list of existing candidates` )
    // listOfCandidates)
    let newCandidate = prompt("Please key in the name of candidate you would like to add:")
    arrayOfCandidates.push(newCandidate)
    // console.log(arrayOfCandidates);
    let i = 1;
    console.log("The updated list of candidates is:");
    while (i <= arrayOfCandidates.length) {
        console.log(`${i}. ${arrayOfCandidates[i]}`)
        i++
    }
    return arrayOfCandidates;
}

// 5. Implement the ability for the admin to reset the password.
// 6. Implement the ability for a voter to view the list of candidates.
// 7. Implement the ability for a voter to vote for their favorite candidate.
// 8. Implement the ability for the admin to display the score of each candidate.
// 9. Implement a loop that keeps the application running until the admin chooses to stop it.
// 10. Add appropriate error handling to handle incorrect input and prevent the application from crashing.
// 11. Implement a command that allows the admin to exit the loop and stop the application.
// 12. Display a farewell message to the user when the application is stopped.

// Note: You can choose to implement the requirements in any order you prefer.
//       consider using "prompt-sync" for getting the user's input
