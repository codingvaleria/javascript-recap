// Problem: Simple Voting Command Line Application
// Description:
// Create a command line application using JavaScript that allows an admin to add candidates, a voter to view a list of the candidates and vote for their favorite candidate, and the admin to display the score of each candidate. The application should be in a loop and only the admin should be able to stop it. The admin should have a password and they should be able to reset it.
// Note: You can choose to implement the requirements in any order you prefer.
//       consider using "prompt-sync" for getting the user's input
const prompt = require("prompt-sync")();

let savedPassword = "abcd";
let arrayOfCandidates = ["Alex", "Jane", "Alice", "Mark"];
let votesCount = [0, 0, 0, 0];
let isRunning = true;
let adminMenu = `
Select action from below:
        1. Add new candidates
        2. Display score of each candidate
        3. Reset your password
        4. Stop the application
    `;

function checkPassword() {
  let passwordPrompts = 1;
  for (passwordPrompts; passwordPrompts <= 3; passwordPrompts++) {
    inputPassword = prompt("Enter your password: ");
    if (inputPassword !== savedPassword) {
      console.log("Invalid password try again");
    } else {
      break;
    }
  }
  if (passwordPrompts > 3) {
    console.log("Your account is locked, contact admin");
    return false;
  } else {
    return true;
  }
}

function printCandidates() {
  let i = 1;
  console.log("The list of candidates is:");
  while (i <= arrayOfCandidates.length) {
    console.log(`${i}. ${arrayOfCandidates[i - 1]}`);
    i++;
  }
}

function adminLogic() {
  const isPasswordCorrect = checkPassword();
  //   3. Once the admin is logged in, display a menu of options that the admin can choose from.
  if (isPasswordCorrect === true) {
    console.log("login successful.");
    console.log(adminMenu);
    let action = prompt(`Please select actions you would like to perform :`);
    if (action === "1") {
      console.log(`Here's a list of existing candidates`);
      // listOfCandidates)
      // 4. Implement the ability for the admin to add new candidates to the list of candidates.
      console.log("Please key in the name of candidate you would like to add:");
      let newCandidate = prompt("> ");
      arrayOfCandidates.push(newCandidate);
      printCandidates();
    }
    // 8. Implement the ability for the admin to display the score of each candidate.
    else if (action === "2") {
      let index = 1;
      // let countIndex = 0;
      console.log("The candidates total votes is:");
      while (index <= arrayOfCandidates.length) {
        console.log(
          `${index}. ${arrayOfCandidates[index - 1]} : ${votesCount[index - 1]}`
        );
        index++;
      }
    }
    // 5. Implement the ability for the admin to reset the password.
    else if (action === "3") {
      // inputPassword = prompt("Provide your old password:");
      console.log("Please provide your old password in the next prompt");
      const isPasswordCorrect = checkPassword();
      if (isPasswordCorrect === true) {
        newPassword = prompt("Set your new password: ");
        savedPassword = newPassword;
        console.log("Password changed successfully");
      }
      // 11. Implement a command that allows the admin to exit the loop and stop the application.
      // 12. Display a farewell message to the user when the application is stopped.
    } else if (action === "4") {
      // 10. Add appropriate error handling to handle incorrect input and prevent the application from crashing.
      isRunning = false;
      console.log("Exiting Application...");
    } else {
      let reEnterAction = 0;
      while (reEnterAction < 3) {
        console.log("Please provide correct action");
        console.log(adminMenu);
        action = prompt("> ");
        // Check if choice is among options
        if (
          action !== "1" &&
          action !== "2" &&
          action !== "3" &&
          action !== "4"
        ) {
          reEnterAction++;
        } else {
          break;
        }
      }
      console.log("Exiting Application...");
      isRunning = false;
    }
  }
}

function voterLogic() {
  console.log(
    "             WELCOME TO THE KURA YAKO VOTING PORTAL                     "
  );
  printCandidates();
  // 7. Implement the ability for a voter to vote for their favorite candidate.
  console.log(` To vote for a candidate, key in their corresponding number for a vote,
What candidate are you voting for? `);
  let vote = prompt("> ");
  let voteNumber = parseInt(vote);
  if (
    voteNumber != NaN &&
    voteNumber > 0 &&
    voteNumber <= arrayOfCandidates.length
  ) {
    votesCount[voteNumber - 1]++;
  }
  console.log(votesCount);
}

// 9. Implement a loop that keeps the application running.
function app() {
  while (isRunning) {
    // 1. Display a welcome message to the user when the application is started.
    const welcomeMessage = "     Welcome to Kura yako voting app    ";
    console.log(welcomeMessage);

    console.log(
      `Please select choice to login:
    1. As an admin
    2. As a voter
    `
    );

    let choice = prompt("> ");

    // 2. Implement a login feature for the admin using a password.
    if (choice === "1") {
      console.log(
        "                WELCOME TO THE ADMIN PORTAL                     "
      );
      adminLogic();
    } else if (choice === "2") {
      // 6. Implement the ability for a voter to view the list of candidates.

      voterLogic();
    } else {
      console.log("Enter a valid choice");
    }
  }
}

app();
