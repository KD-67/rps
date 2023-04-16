// 0-ROCK; 1-PAPER; 2-SCISSORS

let playerChoice = prompt("Choose rock paper or scissors");
let computerChoice = Math.floor(Math.random() * 3);

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



if (computerChoice === playerChoice) {
    console.log("It's a tie!")
} else if (computerChoice === 0 && playerChoice === 1){
    console.log("You win! Paper beats rock!");
} else if (computerChoice === 0 && playerChoice === 2){
    console.log("You lose! Rock beats scissors!");
} else if (computerChoice === 1 && playerChoice === 0){
    console.log("You lose! Paper beats rock!");
} else if (computerChoice === 1 && playerChoice === 2){
    console.log("You win! Scissors beats paper!");
} else if (computerChoice === 2 && playerChoice === 0){
    console.log("You win! Rock beats scissors!");
} else if (computerChoice === 2 && playerChoice === 1){
    console.log("You lose! Scissors beats paper!");
}