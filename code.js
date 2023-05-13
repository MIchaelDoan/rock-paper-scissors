function getComputerChoice(){
    let choice = "";
    let randomNum = getRandomInt(3);
    if(randomNum ===0){
        choice = "ROCK";
    }
    else if(randomNum === 1){
        choice = "PAPER";
    }
    else{
        choice = "SCISSORS";
    }
    return choice;
}

function playerSelection(playerChoice){
    playerChoice = playerChoice.toUpperCase();
    return playerChoice;
}

let playerCounter = 0;
let computerCounter = 0;
function playRound(playerSelection, computerSelection){
    
    if(playerCounter == 5){
        return "YOU WIN! YOU BEAT THE COMPUTER";
    }
    else if(computerCounter == 5){
        return "YOU LOSE! THE COMPUTER WON";
    }

    if(computerSelection == playerSelection){

        return "tie";
    
    }
    else if(computerSelection == "ROCK" && playerSelection == "PAPER"){
        playerCounter++;
        return "You win " + playerSelection + " beats " + computerSelection;
        
    }
    else if(computerSelection == "SCISSORS" && playerSelection == "ROCK"){
        playerCounter++;
        return "You win " + playerSelection + " beats " + computerSelection;
        
    }
    else if(computerSelection == "PAPER" && playerSelection == "SCISSORS"){
        playerCounter++;
        return "You win " + playerSelection + " beats " + computerSelection;
    }
    else{
        computerCounter++;
        return "You lose " + computerSelection + " beats " + playerSelection;
    }
}

function first(){
   
    console.log(1);
    
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/*const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click',() => {
        if(button.id == "rock"){
            alert("rock");
        }
    });
}); */

const buttons = document.querySelectorAll('button');
const results = document.querySelector('#results');
const round = document.createElement('p');
const score = document.querySelector('#score');
const playerScore = document.createElement('p');
const computerScore = document.createElement('p2');

function tallyScore(){
            playerScore.textContent = playerCounter;
            computerScore.textContent = computerCounter;
            score.appendChild(playerScore);
            score.appendChild(computerScore);
            results.appendChild(round);
}

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    switch(button.id){
        case "rock":
            round.textContent = playRound(playerSelection(button.id),getComputerChoice());
            tallyScore();
            results.appendChild(round);
            
            break;
        case "paper":
            round.textContent = playRound(playerSelection(button.id),getComputerChoice());
            tallyScore();
            results.appendChild(round);
            
            break;
        case "scissors":
            round.textContent = playRound(playerSelection(button.id),getComputerChoice());
            tallyScore();
            results.appendChild(round);
            
            break;
    }
    
  });
});


