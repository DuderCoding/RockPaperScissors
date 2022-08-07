

function getComputerChoice() {
    let computerDecision = Math.floor(Math.random()*3+1);
    
    if (computerDecision == 1){
        return "ROCK";
    } else if (computerDecision == 2) {
        return "SCISSORS";
    } else if (computerDecision == 3) {
        return "PAPER";
    }
}

function getPlayerChoice() {
    return prompt("Choose Rock, Paper or Scissors");
}

function playRound(playerSelection,computerSelection){
    if (playerSelection == "ROCK" && computerSelection == "SCISSORS"){
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK"){
        return "You Win! Paper beats Rock";
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER"){
        return "You Win! Scissors beats paper";
    } else if (playerSelection == computerSelection) {
        return `Draw ${playerSelection}`;
    } else {
        return "You lose!";
    }
}

function game(){
    for(let i=0;i<5;i++){
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice().toUpperCase();
        let result = playRound(playerSelection,computerSelection);
        console.log(result);
    }
}

game();