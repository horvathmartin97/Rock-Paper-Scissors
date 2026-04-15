function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  if (player === computer) {
    return `It's a tie! Both chose ${player}`;
  }

  if (player === "rock" && computer === "scissors") {
    return "You Win! Rock beats Scissors";
  }

  if (player === "paper" && computer === "rock") {
    return "You Win! Paper beats Rock";
  }

  if (player === "scissors" && computer === "paper") {
    return "You Win! Scissors beats Paper";
  }

  return `You Lose! ${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${player.charAt(0).toUpperCase() + player.slice(1)}`;
}
const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
