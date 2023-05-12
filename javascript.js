// GAME PLAY
// 0-ROCK; 1-PAPER; 2-SCISSORS

let wins = 0;
let losses = 0;
let ties = 0;
let gameOver = false;

const btn_test = document.querySelector('#btn_test');
const page_title = document.querySelector('#page_title')
const btn_r = document.querySelector('#btn_r');
const btn_p = document.querySelector('#btn_p');
const btn_s = document.querySelector('#btn_s');
const btn_reset = document.querySelector('#btn_reset')
const win_counter = document.querySelector('#wins');
const loss_counter = document.querySelector('#losses');
const tie_counter = document.querySelector('#ties');
const winner_counter = document.querySelector('#winner_counter')



//Buttons:

btn_r.addEventListener('click', () => {
    playRound(0, getComputerChoice());
});

btn_p.addEventListener('click', () => {
    playRound(1, getComputerChoice())
});

btn_s.addEventListener('click', () => {
    playRound(2, getComputerChoice())
});

btn_test.addEventListener('click', () => {
    page_title.textContent = "poop";
});

btn_reset.addEventListener('click', () => {
    resetCounters();
});

//Functions:

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
};

function resetCounters(){
    wins = 0;
    losses = 0;
    ties = 0;
    win_counter.innerHTML = wins;
    loss_counter.innerHTML = losses;
    tie_counter.innerHTML = ties;
    winner_counter.innerHTML = "___";
    gameOver = false;
};

function checkWinner() {
    if (wins == 5){
        winner_counter.innerHTML = "player";
        gameOver = true;
    } else if (losses == 5){
        winner_counter.innerHTML = "computer";
        gameOver = true;
    };
};

function playRound(x, y){
    if (gameOver == true){
        return;
    };

    y = getComputerChoice();
  
    if (y === x) {
        ties ++;
        tie_counter.innerHTML = ties;
    } else if (y === 0 && x === 1){
        wins ++;
        win_counter.innerHTML = wins;
    } else if (y === 0 && x === 2){
        losses ++;
        loss_counter.innerHTML = losses;
    } else if (y === 1 && x === 0){
        losses ++;
        loss_counter.innerHTML = losses;
    } else if (y === 1 && x === 2){
        wins ++;
        win_counter.innerHTML = wins;
    } else if (y === 2 && x === 0){
        wins ++;
        win_counter.innerHTML = wins;
    } else if (y === 2 && x === 1){
        losses ++;
        loss_counter.innerHTML = losses;
    };

    checkWinner();
};
   




