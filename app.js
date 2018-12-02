let userScore = 0;
let compScore = 0;
const userScore_span = document.querySelector('#user-score');
const compScore_span = document.querySelector('#comp-score');
const scoreBoard_div = document.querySelector('.score');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');
const spock_div = document.getElementById('spock');
const lizard_div = document.getElementById('lizard');

// Selecting the computers choice
function getCompChoice() {
  const choices = ['r', 'p', 's', 'sp', 'l'];
  const randNum = Math.floor(Math.random() * 5);
  return choices[randNum];
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rs":
    case "rl":
    case "psp":
    case "pr":
    case "sp":
    case "sl":
    case "spr":
    case "sps":
    case "lsp":
    case "lp":
      win(userChoice, compChoice);
      break;
    case 'rp':
    case 'rsp':
    case 'ps':
    case 'pl':
    case 'sr':
    case 'ssp':
    case 'spp':
    case 'spl':
    case 'lr':
    case 'ls':
      lose(userChoice, compChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
    case 'spsp':
    case 'll':
      draw(userChoice, compChoice);
      break;
  }
}

function convertResult(letter) {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  if (letter === 's') return 'Scissors';
  if (letter === 'sp') return 'Spock';
  return 'Lizard';
} 

function win(userChoice, compChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  if (userChoice === 'r' && compChoice === 's') {
  result_p.innerHTML = `${convertResult(userChoice)}  Crushes  ${convertResult(compChoice)} . You Won!`;
  } else if (userChoice === 'r' && compChoice === 'l') {
    result_p.innerHTML = `${convertResult(userChoice)}  Crushes  ${convertResult(compChoice)} . You Won!`;
  } else if (userChoice === 'p' && compChoice === 'r') {
    result_p.innerHTML = `${convertResult(userChoice)}  Covers  ${convertResult(compChoice)} . You Won!`;
  } else if (userChoice === 'p' && compChoice === 'sp') {
    result_p.innerHTML = `${convertResult(userChoice)}  Disproves  ${convertResult(compChoice)} . You Won!`;
  } else if (userChoice === 's' && compChoice === 'p') {
    result_p.innerHTML = `${convertResult(userChoice)}  Cuts  ${convertResult(compChoice)} . You Won!`;
  } else if (userChoice === 's' && compChoice === 'l') {
    result_p.innerHTML = `${convertResult(userChoice)}  Decapitates  ${convertResult(compChoice)} . You Won!`;
  } else if (userChoice === 'sp' && compChoice === 'r') {
    result_p.innerHTML = `${convertResult(userChoice)}  Vaporizes  ${convertResult(compChoice)} . You Won!`;
  } else if (userChoice === 'sp' && compChoice === 's') {
    result_p.innerHTML = `${convertResult(userChoice)}  Smashes  ${convertResult(compChoice)} . You Won!`;
  } else if (userChoice === 'l' && compChoice === 'sp') {
    result_p.innerHTML = `${convertResult(userChoice)}  Poisons  ${convertResult(compChoice)} . You Won!`;
  } else if (userChoice === 'l' && compChoice === 'p') {
    result_p.innerHTML = `${convertResult(userChoice)}  Eats  ${convertResult(compChoice)} . You Won!`;
  }

}

function lose(userChoice, compChoice) {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = `${convertResult(userChoice)}  Loses to  ${convertResult(compChoice)} . Better Luck Next Time!`;
}

function draw(userChoice, compChoice) {
  result_p.innerHTML = `${convertResult(userChoice)}  Against  ${convertResult(compChoice)} . IT'S A DRAW!`;
}


function main () {
//event listeners
  rock_div.addEventListener('click', function() {
    game('r');
  })

  paper_div.addEventListener('click', function() {
    game('p');
  })

  scissors_div.addEventListener('click', function() {
    game('s');
  })

  spock_div.addEventListener('click', function() {
    game('sp');
  })

  lizard_div.addEventListener('click', function() {
    game('l');
  })
}

main();

