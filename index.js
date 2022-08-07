

function getComputerChoice() {
    let computerDecision = Math.floor(Math.random()*3+1);
    
    if (computerDecision == 1){
        return "Rock";
    } else if (computerDecision == 2) {
        return "Scissors";
    } else if (computerDecision == 3) {
        return "Paper";
    }
}

function getPlayerChoice() {
    return prompt("Choose Rock, Paper or Scissors");
}


let computerSelection = getComputerChoice();

console.log(getPlayerChoice());
