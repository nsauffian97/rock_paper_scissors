let choice;
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let declarePlayerWinner = 0;
let declareCompWinner = 0;

//Function where computer will return Rock, Paper, or Scissors
function computerPlay(){
    const choices = ['ROCK', 'PAPER', 'SCISSOR'];
    choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}


//Function where a single round is played. 
function playRound(playerSelection, computerSelection){
    let player = playerSelection.toUpperCase();
    switch (player) {
        case 'ROCK':
            if(computerSelection == 'SCISSOR'){
                playerScore += 1;
                return "You Win! Rock beats Scissors";
            }
            else if(computerSelection == 'ROCK'){
                return "It's a Tie!";
               
            }
            else if(computerSelection == 'PAPER'){
                computerScore += 1;
                return "You Lose! Paper beats Rock";
            
            }
        case 'PAPER':
            if(computerSelection == 'ROCK'){
                playerScore += 1;
                return "You Win! Paper beats Rock";
               
            }
            else if(computerSelection == 'PAPER'){
                return "It's a Tie!";
              
            }
            else if(computerSelection == 'SCISSOR'){
                computerScore += 1;
                return "You Lose! Paper beats Scissor";
              
            }
        case 'SCISSOR':
            if(computerSelection == 'PAPER'){
                playerScore += 1;
                return "You Win! Scissor beat Paper";
               
            }
            else if(computerSelection == 'SCISSOR'){
                return "It's a Tie!"
              
            }
            else if(computerSelection == 'ROCK'){
                computerScore += 1;
                return "You Lose! Scissor beats Rock"
               
            } 
        default:
            return "Player did not choose rock, paper or scissors";
    }
}

function game(){
    if(playerSelection != null){
        computerSelection = computerPlay();
        let result = playRound(playerSelection,computerSelection);
        const results = document.createElement("div");
        results.classList.add('results');
        results.textContent = "Computer chose" + computerSelection;
        results.textContent = "You chose: "+playerSelection;
        results.textContent = result;
        document.body.appendChild(results);
        // console.log("Computer chose " + computerSelection);
        // console.log("You chose: "+playerSelection);
        // console.log(playRound(playerSelection,computerSelection));
    }
    else {
    console.log("Player did not make a choice.");
    }
}


function updateScore(){
    const score = document.createElement("div");
    score.classList.add('score');
    score.textContent = "Player Score: " + playerScore + " Computer Score:" + computerScore;
    document.body.appendChild(score);

    if (playerScore >= 5){
        declarePlayerWinner = 1;
    }
    else if (computerScore >= 5){
        declareCompWinner = 1;
    }
}

function restartScore(){
    playerScore = 0;
    computerScore = 0;
    declarePlayerWinner = 0;
    declareCompWinner = 0;
}

function declareWinner() {
    const winner = document.createElement("div");
        winner.classList.add('winner');
        if(declarePlayerWinner){
            winner.textContent = "Player Won!";
        }
        else if (declareCompWinner){
            winner.textContent = "Computer Won!";
        }
        document.body.appendChild(winner);
        
        let restart = confirm('Do you want to play again?');
        if(restart){
            restartScore();
            window.location.reload();
        }
}

function rockPlay() {
    playerSelection = 'rock';
    if(declarePlayerWinner||declareCompWinner) {
        declareWinner();
    }else {
        game();
        updateScore();
    }
}

function paperPlay() {
    playerSelection = 'paper';
    
    if(declarePlayerWinner||declareCompWinner) {
        declareWinner();
    }else {
        game();
        updateScore();
    }
}

function scissorPlay() {
    playerSelection = 'scissor';
    if(declarePlayerWinner||declareCompWinner) {
        declareWinner();
    }else {
        game();
        updateScore();
    }
}

const rock = document.createElement("button");
rock.innerHTML = "Rock";
rock.addEventListener("click", (e) => {
rockPlay();
});

const paper = document.createElement("button");
paper.innerHTML = "Paper";
paper.addEventListener("click", (e) => {
   paperPlay();
});

const scissor = document.createElement("button");
scissor.innerHTML = "Scissor";
scissor.addEventListener("click", (e) => {
    scissorPlay();
});

const score = document.createElement("div");



document.body.appendChild(rock);
document.body.appendChild(paper);
document.body.appendChild(scissor);
// for(let i = 1; i <= 5; i++){
//     game();
// }
