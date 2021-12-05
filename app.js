/*
Rock Paper Scissor - Developed by Nurul Sauffian
Date: 11/14

Updates: 12/5 - Refactored to created DIVs for UI development

*/

let choice;
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let declarePlayerWinner = 0;
let declareCompWinner = 0;
let result;

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

//where a round of the game is played
function game(){
    if(playerSelection != null){
        computerSelection = computerPlay();
        result = playRound(playerSelection,computerSelection);
        results.textContent = result;
        computerChoice.textContent = "Computer chose: " + computerSelection;
        playArea.appendChild(results);  
        playArea.appendChild(computerChoice);
    }
    else {
    console.log("Player did not make a choice.");
    }
}

// Updating Score and declare winner when a score reached 5 points
function updateScore(){
    pScore.textContent = "Your Score: " + playerScore ;
    cScore.textContent = "Computer Score: " + computerScore ;
    if (playerScore >= 5){
        declarePlayerWinner = 1;
        declareWinner();
    }
    else if (computerScore >= 5){
        declareCompWinner = 1;
        declareWinner();
    }
}

// function to restart the scores
function restartScore(){
    playerScore = 0;
    computerScore = 0;
    declarePlayerWinner = 0;
    declareCompWinner = 0;
}

//function to declare the winner and display dialog box to confirm replay
function declareWinner() {
        if(declarePlayerWinner){
           swal("Congrats! You Won! Do you want to play again?",
           {buttons: {reset:"Bring it on!", noreset:"Nah, I'm good."}})
           .then((value) => {
               switch(value){
                    case "reset":
                        restartScore();
                        window.location.reload();
                        break;
                    case "noreset":
                        swal("Thanks for Playing!");
               }
           });
        }
        else if (declareCompWinner){
            swal("Sorry, Computer won this time! Do you want to try again?",
           {buttons: {reset:"Bring it on!", noreset:"Nah, I'm good."}})
           .then((value) => {
               switch(value){
                    case "reset":
                        restartScore();
                        window.location.reload();
                        break;
                    case "noreset":
                        swal("Thanks for Playing!");
               }
           });
        }
}

// function to play with rock
function rockPlay() {
    playerSelection = 'rock';
    if(declarePlayerWinner||declareCompWinner) {
        declareWinner();
    }else {
        game();
        updateScore();
    }
}

// function to play with paper
function paperPlay() {
    playerSelection = 'paper';
    
    if(declarePlayerWinner||declareCompWinner) {
        declareWinner();
    }else {
        game();
        updateScore();
    }
}

// function to play with scissor
function scissorPlay() {
    playerSelection = 'scissor';
    if(declarePlayerWinner||declareCompWinner) {
        declareWinner();
    }else {
        game();
        updateScore();
    }
}

// create the score-container div
const score = document.createElement("div");
score.setAttribute("class","score-container");

// create the player-score div that will be in the score-container div
const pScore = document.createElement("div");
pScore.setAttribute("class","player-score");
pScore.textContent = "Your Score: " + playerScore ;

//create the computer-score div that will be in the score-container div
const cScore = document.createElement("div");
cScore.setAttribute("class","computer-score");
cScore.textContent = "Computer Score: " + computerScore ;

// create the play-container div
const playArea = document.createElement("div");
playArea.setAttribute("class","play-container");

// create the computer-result div that will be a child of play-container
const computerChoice = document.createElement("div");
computerChoice.setAttribute("class","computer-result");

// create the results that will be a child of play-container
const results = document.createElement("div");
results.setAttribute("class","results")

//creating options div to contain choice buttons
const options = document.createElement("div");
options.setAttribute("class","options");

//creating the rock button and play the round on click
const rock = document.createElement("button");
rock.setAttribute("class","rock-button");
rock.innerHTML = "Rock";
rock.addEventListener("click", (e) => {
rockPlay();
});

//creating the paper button and play the round on click
const paper = document.createElement("button");
paper.setAttribute("class","paper-button");
paper.innerHTML = "Paper";
paper.addEventListener("click", (e) => {
   paperPlay();
});

//creating the scissor button and play the round on click
const scissor = document.createElement("button");
scissor.setAttribute("class","scissor-button");
scissor.innerHTML = "Scissor";
scissor.addEventListener("click", (e) => {
    scissorPlay();
});

//creating the branches and appending it to the main document
options.appendChild(rock);
options.appendChild(paper);
options.appendChild(scissor);
score.appendChild(pScore);
score.appendChild(cScore);
playArea.appendChild(computerChoice);
playArea.appendChild(results);
document.body.appendChild(score);
document.body.appendChild(options);
document.body.appendChild(playArea);