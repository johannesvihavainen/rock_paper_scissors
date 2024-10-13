function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    function getHumanChoice() {
        let userChoice = prompt("What is your choice?").toLowerCase();
        return userChoice;
    }
    function getComputerChoice() {
        let choice;
        let randomNumber = Math.floor(Math.random() * 10);

        if (randomNumber <= 4) {
            choice = "rock";
            return choice;
        }
        else if (randomNumber > 4 && randomNumber <= 7) {
            choice = "paper";
            return choice;
        }
        else {
            choice = "scissors";
            return choice;
        }
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats scissors!");
            humanScore++;
            console.log(`Human score is ${humanScore} and Computer score is ${computerScore}`);
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock!");
            humanScore++;
            console.log(`Human score is ${humanScore} and Computer score is ${computerScore}`);
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper!");
            humanScore++;
            console.log(`Human score is ${humanScore} and Computer score is ${computerScore}`);
        }
        else if (humanChoice === "rock" && computerChoice === "rock") {
            console.log("It's a tie!!!");
            console.log(`Human score is ${humanScore} and Computer score is ${computerScore}`);
        }
        else if (humanChoice === "paper" && computerChoice === "paper") {
            console.log("It's a tie!!!");
            console.log(`Human score is ${humanScore} and Computer score is ${computerScore}`);
        }
        else if (humanChoice === "scissors" && computerChoice === "scissors") {
            console.log("It's a tie!!!");
            console.log(`Human score is ${humanScore} and Computer score is ${computerScore}`);
        }
        else if (computerChoice === "rock" && humanChoice === "scissors") {
            console.log("The computer won! Rock beats scissors!");
            computerScore++;
            console.log(`Human score is ${humanScore} and Computer score is ${computerScore}`);
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            console.log("The computer won! Paper beats Rock!");
            computerScore++;
            console.log(`Human score is ${humanScore} and Computer score is ${computerScore}`);
        }
        else if (computerChoice === "scissors" && humanChoice === "paper") {
            console.log("The computer won! Scissors beats Paper!");
            computerScore++;
            console.log(`Human score is ${humanScore} and Computer score is ${computerScore}`);
        }

    }
    playRound(humanSelection, computerSelection);
}

let i = 0;
do {
    playGame();
    i++
} while (i < 5)
console.log("The game is over!")