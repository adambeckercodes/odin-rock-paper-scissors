function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "Rock";
  } else if (randomNumber === 1) {
    return "Paper";
  } else {
    return "Scissors";
  }
}

const playerSelection = "Paper";
const computerSelection = getComputerChoice();

// function gameRound(playerSelection, computerSelection) {
//   if (playerSelection === "Rock" && computerSelection === "Paper") {
//     return "You Lose! Paper beats Rock!";
//   } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
//     return "Winner! Rock beats Scissors!";
//   } else if (playerSelection === "Paper" && computerSelection === "Rock") {
//     return "Winner! Paper beats Rock!";
//   } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
//     return "You Lose! Scissors beat Paper!";
//   } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
//     return "You Lose! Scissors beat Rock!";
//   } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
//     return ("Winner! Scissors beat Paper!");
//   } else if (playerSelection === computerSelection) {
//     return "Tie!";
//   }
// }

// function gameRound(playerSelection, computerSelection) {
//   if (
//     (playerSelection === "Rock" && computerSelection === "Scissors") ||
//     (playerSelection === "Paper" && computerSelection === "Rock") ||
//     (playerSelection === "Scissors" && computerSelection === "Paper")
//     ) {
//       return "You win! " + playerSelection + " beats " + computerSelection + "!";
//     } else if (playerSelection === computerSelection) {
//       return "It's a tie!";
//     } else {
//       return "You lose! " + computerSelection + " beats " + playerSelection + "!";
//     }
// }

function gameRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return "You win! " + playerSelection + " beats " + computerSelection + "!";
  } else if (
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors")
  ) {
    return "You lose! " + computerSelection + " beats " + playerSelection + "!";
  } else {
    return "It's a tie!";
  }
}

console.log(getComputerChoice());
console.log(playerSelection);

const result = (gameRound(playerSelection, computerSelection));
console.log(result);