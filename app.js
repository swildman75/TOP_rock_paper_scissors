// set variables to manipulate
const computerChoiceDisplay = document.querySelector('#computer_choice');
const userChoiceDisplay = document.querySelector('#user_choice');
const resultDisplay = document.querySelector('#result');
const userScoreDisplay = document.querySelector('#userScore');
const computerScoreDisplay = document.querySelector('#computerScore');
const possibleChoices = document.querySelectorAll('input');
let userChoice;
let computerChoice;
let result;
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.textContent = userChoice;
  generateComputerChoice();
  getResult();
}))

// function to pick a random computer choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);

  if (randomNumber === 0) {
    computerChoice = 'rock';
  }
  if (randomNumber === 1) {
    computerChoice = 'paper';
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors';
  }
  computerChoiceDisplay.textContent = computerChoice;
}

// function to see who won the result
function getResult() {
  if (userChoice === computerChoice) {
    result = "It's a draw!!";
  }
  else if (userChoice === 'rock' && computerChoice === 'scissors') {
    userScore++;
    result = "You win this round, great job!!";
  }
  else if (userChoice === 'paper' && computerChoice === 'rock') {
    userScore++;
    result = "You win this round, great job!!";
  }
  else if (userChoice === 'scissors' && computerChoice === 'paper') {
    userScore++;
    result = "You win this round, great job!!";
  }
  else if (userChoice === 'rock' && computerChoice === 'paper') {
    computerScore++;
    result = "You lose this round, maybe next time!!";
  }
  else if (userChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    result = "You lose this round, maybe next time!!";
  }
  else if (userChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    result = "You lose this round, maybe next time!!";
  }
  resultDisplay.textContent = result;
  userScoreDisplay.textContent = userScore;
  computerScoreDisplay.textContent = computerScore;
}
