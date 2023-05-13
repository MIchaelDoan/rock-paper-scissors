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
    

    if(playerSelection !== "ROCK" && playerSelection !== "PAPER" && playerSelection !=="SCISSORS"){
        alert("Please enter in ROCK, PAPER or SCISSORS");
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

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    switch(button.id){
        case "rock":
            //playRound("ROCK",getComputerChoice());
            alert("Rock");
            break;
        case "paper":
            //playRound("PAPER",getComputerChoice());
            break;
        case "scissors":
            //playRound("SCISSORS",getComputerChoice());
            break;
    }
    
  });
});
