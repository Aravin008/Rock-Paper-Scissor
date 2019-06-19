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
    userScore++;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice}${smallUserWord} beats ${computerChoice}${smallCompWord}. You win!.`;
}

function loses(userChoice, computerChoice) {
    computerScore++;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice}${smallUserWord} loses to ${computerChoice}${smallCompWord}. You lost!.`;
}

function draws(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${userChoice}${smallUserWord} equals ${computerChoice}${smallCompWord}. Its a draw!.`;
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