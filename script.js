let humanScore = 0;
let computerScore= 0;
function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:return "rock";
        case 1:return "paper";
        case 2:return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Enter your choice\n Rock - Paper - scissors").toLowerCase();
    while(choice!=="rock" && choice!=="paper" && choice!=="scissors"){
        choice = prompt("Enter a proper choice\n Rock - Paper - scissors").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice , computerChoice) {
    if(humanChoice==="rock"){
        if(computerChoice==="rock")
            return "draw";
        else if (computerChoice==="paper")
            return "You lose! Paper beats Rock";
        else
            return "You win! Rock beats Scissors";
    }
    else if (humanChoice==="paper"){
        if(computerChoice==="rock")
            return "You win! Paper beats Rock";
        else if (computerChoice==="paper")
            return "draw";
        else
            return "You lose! Scissors beats Paper";
    }
    else{
        if(computerChoice==="rock")
            return "You lose! Rock beats Scissors";
        else if (computerChoice==="paper")
            return "You win! Scissors beats Paper";
        else
            return "draw";
    }
}

function playGame()
{
    while(humanScore<3 && computerScore<3) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(humanSelection,computerSelection);
        if(roundResult.includes("win"))
            humanScore++;
        else if(roundResult.includes("lose"))
            computerScore++;
        console.log(roundResult);
        console.log("Current Scores -> You : ",humanScore,"/ Computer : ",computerScore);
    }
    if(humanScore===3)
        console.log("You win the game");
    else
        console.log("You lost the game");
}

playGame();
