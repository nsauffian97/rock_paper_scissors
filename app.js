let choice;
let playerSelection;
let computerSelection;
//Function where computer will return Rock, Paper, or Scissors
function computerPlay(){
    let choices = ['ROCK', 'PAPER', 'SCISSOR'];
    choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}


//Function where a single round is played. 
function playRound(playerSelection, computerSelection){
    let player = playerSelection.toUpperCase();
    switch (player) {
        case 'ROCK':
            if(computerSelection == 'SCISSOR'){
                return "You Win! Rock beats Scissors";
                break;
            }
            else if(computerSelection == 'ROCK'){
                return "It's a Tie!";
                break;
            }
            else if(computerSelection == 'PAPER'){
                return "You Lose! Paper beats Rock";
                break;
            }
        case 'PAPER':
            if(computerSelection == 'ROCK'){
                return "You Win! Paper beats Rock";
                break;
            }
            else if(computerSelection == 'PAPER'){
                return "It's a Tie!";
                break;
            }
            else if(computerSelection == 'SCISSOR'){
                return "You Lose! Paper beats Scissor";
                break;
            }
        case 'SCISSOR':
            if(computerSelection == 'PAPER'){
                return "You Win! Scissor beat Paper";
                break;
            }
            else if(computerSelection == 'SCISSOR'){
                return "It's a Tie!"
                break;
            }
            else if(computerSelection == 'ROCK'){
                return "You Lose! Scissor beats Rock"
                break;
            } 
        default:
            return "Player did not choose rock, paper or scissors";
    }
}

function game(){
    playerSelection = prompt("Rock, Paper, or Scissor?: ");
    if(playerSelection != null){
        computerSelection = computerPlay();
        console.log("Computer chose " + computerSelection);
        console.log("You chose: "+playerSelection);
        console.log(playRound(playerSelection,computerSelection));
    }
    else {
    console.log("Player did not make a choice.");
    }
}


for(let i = 1; i <= 5; i++){
    game();
}
