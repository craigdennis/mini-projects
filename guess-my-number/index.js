'use strict';

const numberToGuessLabel = document.querySelector('.number-to-guess');
const guessedNumber = document.querySelector('.guess-input');
const checkBtn = document.querySelector('.check-btn');
const guessHelp = document.getElementById('guess-help');
const scoreLabel = document.getElementById('score-label');
const startAgainBtn = document.getElementById('start-again');
const highscoreLabel = document.getElementById('highscore');

const lowerHelpMsg = 'You need to guess lower';
const higherHelpMsg = 'You need to guess higher';
const correctGuessMsg = 'You guessed right!';

let numberToGuess = randomNumber();
let score = 20;
let highscore = 0;

function randomNumber() {
  return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}

//Event listeners

checkBtn.addEventListener('click', checkGuess);
startAgainBtn.addEventListener('click', startAgain);

//functions

function checkGuess() {
  let guessedNum = guessedNumber.value;

  if (guessedNum > numberToGuess) {
    updateUI(lowerHelpMsg);
  } else if (guessedNum < numberToGuess) {
    updateUI(higherHelpMsg);
  } else {
    numberToGuessLabel.textContent = numberToGuess;
    updateUI(correctGuessMsg);
    if (score > highscore) {
      highscore = score;
      highscoreLabel.textContent = highscore;
    }
  }
}

function startAgain() {
  numberToGuess = randomNumber();
  numberToGuessLabel.textContent = '?';
  guessHelp.textContent = 'Start Guessing...';
  console.log(`number to guess is ${numberToGuess}`);
  guessedNumber.value = '';
  score = 20;
  scoreLabel.textContent = 0;
}

function updateUI(msg) {
  guessHelp.textContent = msg;
  score--;
  scoreLabel.textContent = score;
}
