// 0-ROCK; 1-PAPER; 2-SCISSORS

let wins = 0;
let losses = 0;
let ties = 0;

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function validateInput(x){
    
}

function getPlayerChoice(){
    let playerChoice = prompt("Choose rock paper or scissors");
    while (playerChoice === null){
        playerChoice = prompt("Choose rock paper or scissors");
    }

    playerChoice = playerChoice.toUpperCase();
    
    if (playerChoice === "ROCK"){
        playerChoice = 0;
        return playerChoice;
    } else if (playerChoice === "PAPER"){
        playerChoice = 1;
        return playerChoice;
    } else if (playerChoice === "SCISSORS"){
        playerChoice = 2;
        return playerChoice;
    } else {
        playerChoice = 3;
        return playerChoice;
    }
}


function playRound(x, y){
   x = getPlayerChoice();
   y = getComputerChoice();
  
    
  
    if (y === x) {
        ties ++;
        return ["It's a tie!", x, y];
    } else if (y === 0 && x === 1){
        wins ++;
        return ["You win! Paper beats rock!", x, y];
    } else if (y === 0 && x === 2){
        losses ++;
        return ["You lose! Rock beats scissors!", x, y];
    } else if (y === 1 && x === 0){
        losses ++;
        return ["You lose! Paper beats rock!", x, y];
    } else if (y === 1 && x === 2){
        wins ++;
        return ["You win! Scissors beats paper!", x, y];
    } else if (y === 2 && x === 0){
        wins ++;
        return ["You win! Rock beats scissors!", x, y];
    } else if (y === 2 && x === 1){
        losses ++;
        return ["You lose! Scissors beats paper!", x, y];
    } else {
        playRound();
        return "TRY AGAIN"
    }

}
   

function game(){

    for (let i = 0; i <= 4; i++){
        console.log(playRound());
    }

    if (wins > losses){
        return ["You won the game!", wins, losses, ties];
    } else if (losses > wins){
        return ["You lost the game!", wins, losses, ties];
    } else {
        return ["It was a tie! Do you want to play again?", "wins: " + wins, "losses: " + losses, "ties: " + ties];
    }
}

console.log(game());