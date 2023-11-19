const GREEN = "#9FBB73";
const YELLOW = "#F1EB90";
const RED = "#EC8F5E";

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

let rounds = 0;
let wins = 0;
let draws = 0;
let losses = 0;

const playerChoiceDiv = document.querySelector(".player-choice");
const computerChoiceDiv = document.querySelector(".computer-choice");

function printChoices(player, computer) {
    playerChoiceDiv.textContent = player.toUpperCase();
    computerChoiceDiv.textContent = computer.toUpperCase();
}

const infoResult = document.querySelector(".info-result");

function printResult(res) {
    if (res === -1) {
        infoResult.textContent = "You lose!";
        infoResult.style.color = RED;
        losses++;
    }
    if (res === 0) {
        infoResult.textContent = "It's a draw!";
        infoResult.style.color = YELLOW;
        draws++;
    }
    if (res === 1) {
        infoResult.textContent = "You win!";
        infoResult.style.color = GREEN;
        wins++;
    }
}

const winsCountDiv = document.querySelector(".w-count");
const drawsCountDiv = document.querySelector(".d-count");
const lossesCountDiv = document.querySelector(".l-count");

function updateScores() {
    winsCountDiv.textContent = wins;
    drawsCountDiv.textContent = draws;
    lossesCountDiv.textContent = losses;
}

const finalResultDiv = document.createElement("div");
finalResultDiv.className = "final-result";

const mainDiv = document.querySelector(".main");

function addFinalResult() {
    if (wins === losses) {
        finalResultDiv.textContent = "It's a draw!";
        finalResultDiv.style.color = YELLOW;
    }
    if (wins > losses) {
        finalResultDiv.textContent = "You win!";
        finalResultDiv.style.color = GREEN;
    }
    if (wins < losses) {
        finalResultDiv.textContent = "You lose!";
        finalResultDiv.style.color = RED;
    }
    mainDiv.appendChild(finalResultDiv);
}

let playerChoice = "";

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", () => {
    if (wins <= 5 || losses <= 5) {
        playerChoice = "rock";
        computerChoice = getComputerChoice();
        printChoices(playerChoice, computerChoice);
        let result = playRound(playerChoice, computerChoice);
        printResult(result);
        updateScores();
        if (wins === 5 || losses === 5) {
            addFinalResult();
        }
    }
});

paperButton.addEventListener("click", () => {
    if (wins <= 5 || losses <= 5) {
        playerChoice = "paper";
        computerChoice = getComputerChoice();
        printChoices(playerChoice, computerChoice);
        let result = playRound(playerChoice, computerChoice);
        printResult(result);
        updateScores();
        if (wins === 5 || losses === 5) {
            addFinalResult();
        }
    }
});

scissorsButton.addEventListener("click", () => {
    if (wins <= 5 || losses <= 5) {
        playerChoice = "scissors";
        computerChoice = getComputerChoice();
        printChoices(playerChoice, computerChoice);
        let result = playRound(playerChoice, computerChoice);
        printResult(result);
        updateScores();
        if (wins === 5 || losses === 5) {
            addFinalResult();
        }
    }
});

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     let draws = 0;
//     for (let i = 0; i < 5; i++) {
//         let playerSelection = prompt("Rock, Paper or Scissors?", getComputerChoice());
//         let computerSelection = getComputerChoice();
//         let result = playRound(playerSelection, computerSelection);
//         console.log(`---------- Round ${i + 1} ----------`);
//         console.log(`${playerSelection} VS ${computerSelection}`);
//         switch (result) {
//             case -1:
//                 console.log("You lose!");
//                 computerScore++;
//                 break;
//             case 0:
//                 console.log("It's a draw!");
//                 draws++;
//                 break;
//             case 1:
//                 console.log("You win!");
//                 playerScore++;
//         }
//         console.log(`Score: ${playerScore} ${draws} ${computerScore}`);
//     }
//     console.log("--------------------");
//     console.log(`Final score: ${playerScore} ${draws} ${computerScore}`);
//     if (playerScore === computerScore) {
//         console.log("It's a draw!");
//     }
//     if (playerScore > computerScore) {
//         console.log("You win!");
//     }
//     if (playerScore < computerScore) {
//         console.log("You lose!");
//     }
// }

// game();