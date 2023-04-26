const prompt = require("prompt-sync")();
let currentPassword = "abcd";
let arrayOfCandidates = [
            "Alex",
            "Jane",
            "Alice",
            "Mark",
        ];

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

    let passwordPrompts = 0;
    let inputPassword = prompt("Enter your password: ");

    if (inputPassword !== currentPassword) {
      console.log("Login unsuccessful, input password again");

      for (passwordPrompts; passwordPrompts <= 3; passwordPrompts++) {
        passwordPrompts += 1;

        inputPassword = prompt("Enter your password: ");
      }
    }
    //   3. Once the admin is logged in, display a menu of options that the admin can choose from.
    else if (inputPassword === currentPassword) {
      console.log("login successful");
      let action = prompt(
        ` Please select actions you would like to perform
        1. Add new candidates
        2. Display sore of each candidate
        3. Reset your password
          `
      );

      // 4. Implement the ability for the admin to add new candidates to the list of candidates.

      if (action === "1") {
        console.log(`Here's a list of existing candidates`);
        // listOfCandidates)
        let newCandidate = prompt(
          "Please key in the name of candidate you would like to add:"
        );
        arrayOfCandidates.push(newCandidate);
        // console.log(arrayOfCandidates);
        let i = 1;
        console.log("The updated list of candidates is:");
        while (i <= arrayOfCandidates.length) {
          console.log(`${i}. ${arrayOfCandidates[i]}`);
          i++;
        }
        return arrayOfCandidates;
      }
      // 5. Implement the ability for the admin to reset the password.
      else if (action === "3") {
        newPassword = prompt("Set your new password: ");
        currentPassword = newPassword;
        console.log("Password changed successfully");
        // console.log(currentPassword);
      }
    }
    // console.log("Your account is blocked consult your admin");
}
else if (choice === "2") {
// 6. Implement the ability for a voter to view the list of candidates.
  console.log(
    "             WELCOME TO THE KURA YAKO VOTING PORTAL                     "
  );
    
    let i = 1;
    console.log("Here's a list of vying candidates:")
    function candidateList() {
        while (i <= arrayOfCandidates.length) {
        console.log(`${i}. ${arrayOfCandidates[i]}`);
          i++;
        }
    } 
    candidateList();     
}
else {
    console.log("Enter a valid choice")
}
// 7. Implement the ability for a voter to vote for their favorite candidate.
let vote =
  prompt(` To vote for a candidate, key in their corresponding number for a vote,
What candidate are you voting for? `);

let janeCount = 0;
let aliceCount = 0;
let markCount = 0;

function votesCount() {
  if (vote === "1") {
    janeCount = janeCount++;
    console.log("you've voted for Jane");
  } else if (vote === "2") {
    aliceCount = aliceCount++;
    console.log("you've voted for Alice");
  } else if (vote === "3") {
    markCount = markCount++;
    console.log("you've voted for Mark");
  } else {
    console.log("please vote for a contesting candidate");
  }
 }

// 8. Implement the ability for the admin to display the score of each candidate.
console.log(`
Jane: ${janeCount}
Alice: ${aliceCount}
Mark: ${markCount}
`)
// 9. Implement a loop that keeps the application running until the admin chooses to stop it.

// 10. Add appropriate error handling to handle incorrect input and prevent the application from crashing.
// 11. Implement a command that allows the admin to exit the loop and stop the application.
// 12. Display a farewell message to the user when the application is stopped.

// Note: You can choose to implement the requirements in any order you prefer.
//       consider using "prompt-sync" for getting the user's input

