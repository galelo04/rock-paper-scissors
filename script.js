let playerScore = 0;
let computerScore= 0;
let gameEnd = false;
function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:return "rock";
        case 1:return "paper";
        case 2:return "scissors";
    }
}
function playRound(event) {
    if (event.target.tagName !== 'BUTTON') return;
    const computerChoice = getComputerChoice();
    const playerChoice = event.target.id;
    const roundResult = document.querySelector(".roundResult");
    const playerScoreDis = document.querySelector(".playerScore");
    const computerScoreDis = document.querySelector(".computerScore");
    if(playerChoice==="rock"){
        if(computerChoice==="rock")
            roundResult.textContent = "draw";
        else if (computerChoice==="paper")
            roundResult.textContent =  "You lose! Paper beats Rock";
        else
        roundResult.textContent =  "You win! Rock beats Scissors";
    }
    else if (playerChoice==="paper"){
        if(computerChoice==="rock")
            roundResult.textContent =  "You win! Paper beats Rock";
        else if (computerChoice==="paper")
            roundResult.textContent =  "draw";
        else
        roundResult.textContent =  "You lose! Scissors beats Paper";
    }
    else{
        if(computerChoice==="rock")
            roundResult.textContent =  "You lose! Rock beats Scissors";
        else if (computerChoice==="paper")
            roundResult.textContent =  "You win! Scissors beats Paper";
        else
        roundResult.textContent =  "draw";
    }
    if(roundResult.textContent.includes("win"))
    
        playerScore++;
    
    else if(roundResult.textContent.includes("lose"))
        computerScore++;

    playerScoreDis.textContent=playerScore;
    computerScoreDis.textContent=computerScore;
    if(playerScore==5 || computerScore==5){
        const parent = document.querySelector("body");
        const winStatment = document.createElement("div");
        winStatment.style.fontSize ="40px";
        if(playerScore==5){
            winStatment.style.color = "blue";
            winStatment.textContent = "You Win!"; 
        }
        else if(computerScore==5){
            winStatment.style.color = "red";
            winStatment.textContent = "You Lose!";
        }
        parent.appendChild(winStatment);
    }
}
const but = document.querySelector(".choices");

but.addEventListener('click',playRound);

