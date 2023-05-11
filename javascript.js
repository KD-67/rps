// GAME PLAY
// 0-ROCK; 1-PAPER; 2-SCISSORS

let wins = 0;
let losses = 0;
let ties = 0;

const btn_test = document.querySelector('#btn_test');
const page_title = document.querySelector('#page_title')
const btn_r = document.querySelector('#btn_r');
const btn_p = document.querySelector('#btn_p');
const btn_s = document.querySelector('#btn_s');
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

//Functions:

function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() * 3);
    return computerChoice;
}

function playRound(x, y){
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
    } 
}
   




