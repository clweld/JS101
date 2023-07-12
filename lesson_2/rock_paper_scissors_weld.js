const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const WINNING_PLAYS = {
  scissors: ['paper', 'lizard'],
  paper: ['rock', 'spock'],
  rock: ['lizard', 'scissors'],
  lizard: ['spock', 'paper'],
  spock: ['scissors', 'rock']
};
const OUTCOME = ['win', 'lose', 'tie'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function startGame() {
  prompt("Let's play a game of Rock, Paper, Scissors, Lizard, Spock!");
}

function lineBreak() {
  console.log('----------------------------------------------------');
}

function getUserChoice() {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}.` +
  '\n You may type: "r" or rock, "p" or paper, "sc" or scissors, "l" or lizard,  "sp" or spock.');
  let userChoice = readline.question().toLowerCase();
  return userChoice;
}

function shortInput(userChoice) {
  switch (userChoice) {
    case 'r':
      return 'rock';
    case 'p':
      return 'paper';
    case 'sc':
      return 'scissors';
    case 'l':
      return 'lizard';
    case 'sp':
      return 'spock';
  }
  return userChoice;
}

function invalidChoice(userChoice) {
  while (!VALID_CHOICES.includes(userChoice)) {
    prompt('That is not a valid choice, try again.');
    userChoice = readline.question();
  }
  return userChoice;
}

function getCompChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  return computerChoice;
}

function displayChoices(userChoice, computerChoice) {
  prompt(`You chose ${userChoice} and the computer chose ${computerChoice}.`);
}

function determineWinner(userChoice, computerChoice) {
  if (WINNING_PLAYS[userChoice].includes(computerChoice)) {
    prompt(`You ${OUTCOME[0]}! :)`);
    return OUTCOME[0];
  } else if (WINNING_PLAYS[computerChoice].includes(userChoice)) {
    prompt(`You ${OUTCOME[1]}! :(`);
    return OUTCOME[1];
  } else {
    prompt(`It's a ${OUTCOME[2]}! :|`);
    return OUTCOME[2];
  }
}

function incrementWins() {
  // not finished with part 3
}

function playAgain(answer) {
  prompt('Would you like to play again? (y/n)');
  answer = readline.question();
  return answer;
}

function invalidAnswer(answer) {
  while (answer.trimStart() === ''        ||
        (answer[0].toLowerCase() !== 'y' &&
         answer[0].toLowerCase() !== 'n')) {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
}

function endGame(answer) {
  if (answer[0] === 'n') {
    prompt('Thanks for playing!');
    return true;
  }
}


startGame();

while (true) {

  lineBreak();

  let userChoice = getUserChoice();

  userChoice = shortInput(userChoice);

  userChoice = invalidChoice(userChoice);

  let computerChoice = getCompChoice();

  displayChoices(userChoice, computerChoice);

  determineWinner(userChoice, computerChoice);

  let answer = playAgain();

  invalidAnswer(answer);

  if (endGame(answer)) {
    break;
  }
}