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

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));