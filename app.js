let userScore = 0;
let compScore = 0;
const userScore_span = document.querySelector('#user-score');
const compScore_span = document.querySelector('#comp-score');
const scoreBoard_div = document.querySelector('.score');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const spock_div = document.getElementById('spock');
const lizard_div = document.getElementById('lizard');

// Selecting the computers choice

function compChoice() {
  const choices = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
  const randNum = Math.floor(Math.random() * 5);
  return choices[randNum];
}

