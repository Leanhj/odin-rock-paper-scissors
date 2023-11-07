function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();

    if (player === computerSelection) {
        return 0;
    }

    if (player === "rock") {
        if (computerSelection === "paper") {
            return -1;
        } else {
            return 1;
        }
    }
    
    if (player === "paper") {
        if (computerSelection === "rock") {
            return 1;
        } else {
            return -1;
        }
    }

    if (player === "scissors") {
        if (computerSelection === "rock") {
            return -1;
        } else {
            return 1;
        }
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let draws = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, Paper or Scissors?", getComputerChoice());
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(`---------- Round ${i + 1} ----------`);
        console.log(`${playerSelection} VS ${computerSelection}`);
        switch (result) {
            case -1:
                console.log("You lose!");
                computerScore++;
                break;
            case 0:
                console.log("It's a draw!");
                draws++;
                break;
            case 1:
                console.log("You win!");
                playerScore++;
        }
        console.log(`Score: ${playerScore} ${draws} ${computerScore}`);
    }
    console.log("--------------------");
    console.log(`Final score: ${playerScore} ${draws} ${computerScore}`);
    if (playerScore === computerScore) {
        console.log("It's a draw!");
    }
    if (playerScore > computerScore) {
        console.log("You win!");
    }
    if (playerScore < computerScore) {
        console.log("You lose!");
    }
}

game();