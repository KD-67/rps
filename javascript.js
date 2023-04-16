// 0-ROCK; 1-PAPER; 2-SCISSORS

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt("Choose rock paper or scissors");

    playerChoice = playerChoice.toUpperCase();
    
    if (playerChoice === "ROCK"){
        playerChoice = 0;
    } else if (playerChoice === "PAPER"){
        playerChoice = 1;
    } else if (playerChoice === "SCISSORS"){
        playerChoice = 2;
    } else {
        console.log("Please enter either 'rock', paper', or 'scissors'.")
    }

    return playerChoice;
}


function playRound(x, y){
   x = getPlayerChoice();
   y = getComputerChoice();
    
    if (y === x) {
        return ["It's a tie!", x, y];
    } else if (y === 0 && x === 1){
        return ["You win! Paper beats rock!", x, y];
    } else if (y === 0 && x === 2){
        return ["You lose! Rock beats scissors!", x, y];
    } else if (y === 1 && x === 0){
        return ["You lose! Paper beats rock!", x, y];
    } else if (y === 1 && x === 2){
        return ["You win! Scissors beats paper!", x, y];
    } else if (y === 2 && x === 0){
        return ["You win! Rock beats scissors!", x, y];
    } else if (y === 2 && x === 1){
        return ["You lose! Scissors beats paper!", x, y];
    } else {
        return null;
    }

}
 
console.log(playRound());
