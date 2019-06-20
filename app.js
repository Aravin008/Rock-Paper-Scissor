// Cache the DOM elements required for query selector.
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    return choices[Math.floor(Math.random() * 3)];
}

function wins(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice}${smallUserWord} beats ${computerChoice}${smallCompWord}. You win!.`;
    // Lets animate the border of element clicked with greeen
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow')}, 300);
}

function loses(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice}${smallUserWord} loses to ${computerChoice}${smallCompWord}. You lost!.`;
    // animate
    userChoice_div.classList.add('red-glow');
    setTimeout(function() {userChoice_div.classList.remove('red-glow')}, 300);
}

function draws(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${userChoice}${smallUserWord} equals ${computerChoice}${smallCompWord}. Its a draw!.`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {userChoice_div.classList.remove('gray-glow')}, 300);
}

function game(userChoice) {
    let choices = ['rock', 'paper', 'scissor'];
    let computerChoice = getComputerChoice();

    switch(userChoice[0] + computerChoice[0]){
        case 'rs':
        case 'pr':
        case 'sp':  wins(userChoice, computerChoice);
                    break;
        case 'rp':
        case 'ps':
        case 'sr':  loses(userChoice, computerChoice);
                    break;
        case 'rr':
        case 'pp':
        case 'ss':  draws(userChoice, computerChoice);
                    break;
    }
    console.log("user choice " + userChoice + " computer choice " + computerChoice);
}

function main() {
rock_div.addEventListener('click', () => game("rock"));
paper_div.addEventListener('click', () => game("paper"));
scissor_div.addEventListener('click', () => game("scissor"));
}

main();