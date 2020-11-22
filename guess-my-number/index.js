'use strict';

const numberToGuessLabel = document.querySelector('.number-to-guess');
const guessedNumber = document.querySelector('.guess-input');
const checkBtn = document.querySelector('.check-btn');
const guessHelp = document.getElementById('guess-help');
const scoreLabel = document.getElementById('score-label');
const startAgainBtn = document.getElementById('start-again');
const higscoreLabel = document.getElementById('highscore');

const lowerHelpMsg = 'You need to guess lower';
const higherHelpMsg = 'You need to guess higher';
const correctGuessMsg = 'You guessed right!';

let numberOfGuesses = 0;
let numberToGuess = randomNumber();
let score = 0;
let highscore = 0

function randomNumber() {
  return Math.floor(Math.random() * (20 - 1 + 1)) + 1;
}



checkBtn.addEventListener('click', checkGuess);
startAgainBtn.addEventListener('click', startAgain);

function checkGuess() {
  let guessedNum = guessedNumber.value;

  if (guessedNum > numberToGuess) {
    guessHelp.textContent = lowerHelpMsg;
    numberOfGuesses++;
  } else if (guessedNum < numberToGuess) {
    guessHelp.textContent = higherHelpMsg;
    numberOfGuesses++;
  } else {
    numberToGuessLabel.textContent = numberToGuess;
    guessHelp.textContent = correctGuessMsg;
    score = score + numberOfGuesses;
    scoreLabel.textContent = score;
    if (score > highscore) {
        highscore = score;
        higscoreLabel.textContent = highscore;

    }
    
  }
}

function startAgain() {
    numberToGuess = randomNumber();
    numberToGuessLabel.textContent = '?';
    guessHelp.textContent = 'Start Guessing...';
    console.log(`number to guess is ${numberToGuess}`);
    guessedNumber.value = '';
  }