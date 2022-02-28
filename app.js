// Rock, Paper, Scissors game for The Odin Project
// Pseudocode =>
// 1 - User chooses between (rock, paper or scisors) case insensitive
// 2 - Computer will randomly choose between rock, paper, and Scissors
// 3 - Compare user choice against computer choice
// 4 - print out who won
// 5 - print out times won marker
// 6 - tie
//     rock beats Scissors
//     paper beats Rock
//     scissors beats paper

// variables for player score and computer score
let playerScore = 0;
let computerScore = 0;


// function to pick computer choice
let computerChoice = (choices) => {
  choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

// prompt player to pick and then turn answer to lower case
let playerChoice = prompt("rock, paper or scissors: ").toLowerCase();

// function to play one round
let playRound = (playerChoice, computerChoice) => {
  if (playerChoice === "rock" && computerChoice === "scissors") {
    playerScore++;
    return `You won, ${playerChoice} beats ${computerChoice}!!`;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerScore++;
    return `You won, ${playerChoice} beats ${computerChoice}!!`;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerScore++;
    return `You won, ${playerChoice} beats ${computerChoice}!!`;
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    computerScore++;
    return `You lost, ${computerChoice} beats ${playerChoice}!!`;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    computerScore++;
    return `You lost, ${computerChoice} beats ${playerChoice}!!`;
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    computerScore++;
    return `You lost, ${computerChoice} beats ${playerChoice}!!`;
  } else if (computerChoice === playerChoice) {
    return "It's a tie!!";
  }
}

// game function
// let game = () => {
//   for (var i = 0; i < 10; i++) {
//     console.log(playRound(playerChoice, computerChoice()));
//   }
// }

let game = () => {
  for (var i = 0; i < 10; i++) {
    if (playerScore <= 5) {
      console.log(playRound(playerChoice, computerChoice()));
    } else if (computerScore <= 5) {
      console.log(playRound(playerChoice, computerChoice()));
    }
    console.log(i);
  }
}
console.log(game());
console.log(playerScore);
console.log(computerScore);
