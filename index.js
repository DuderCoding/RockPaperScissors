

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
    } else if (computerSelection == "ROCK" && playerSelection == "SCISSORS"){
        return "You Lose! Rock beats Scissors";
    } else if (computerSelection == "PAPER" && playerSelection == "ROCK"){
        return "You Lose! Paper beats Rock";
    } else if (computerSelection == "SCISSORS" && playerSelection == "PAPER"){
        return "You Lose! Scissors beats paper";
    } else if (playerSelection == computerSelection) {
        return `Draw you both picked: ${playerSelection}`;
    }
}

function game(){
    let gamesWon = 0;
    let gamesLost = 0;
    for(let i=0;i<5;i++){
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice().toUpperCase();
        let result = playRound(playerSelection,computerSelection);
        console.log(`Round result: ${result}`);
        if(result.includes("Win")){
            gamesWon++;
        } else if(result.includes("Lose")){
            gamesLost++;
        }
    }
    if(gamesWon>gamesLost){
        return "You won!";
    } else if(gamesWon<gamesLost){
        return "You lost!";
    } else {
        return "You drew";
    }
}
console.log(game());