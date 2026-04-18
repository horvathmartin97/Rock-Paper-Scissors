function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}


function playRound(playerSelection, computerSelection) {
  const player = playerSelection
  const computer = computerSelection


  switch (true) {
    case (player === computer):
      return "tie"

    case (player === "rock" && computer === "scissors"):
      return [true, "You win!"]

    case (player === "paper" && computer === "rock"):
      return [true, "You win!"]

    case (player === "scissors" && computer === "paper"):
      return [true, "You win!"]

    default:
      return [false, "You lose"]
  }
}

function getPlayerChoice(playerScore, computerScore, numberOfRounds) {

  const playerChoices = ["rock", "paper", "scissors"];
  while (true) {
    const input = prompt(`You have ${numberOfRounds} rounds and your score is ${playerScore} and computer score is ${computerScore}. Pick one weapon (Paper, Rock, Scissors). `)
    if (input === null) {
      return null;
    }
    const choice = input.trim().toLowerCase()
    if (choice === "") {
      alert("Empty Input not allowed")
      continue;
    }

    if (playerChoices.includes(input)) {
      return choice;
    }
    alert("Wrong input! Pick a weapon (Rock, Paper, SCissors)");
  }
  

}

function game() {
  let playerScore = 0
  let computerScore = 0
  let numberOfRounds = 5
  const playerChoices = ["rock", "paper", "scissors"]
  let playerConfirmation = confirm("You are playing a game of Rock, Paper, Scissors against the computer, Are you ready?")

  if (!playerConfirmation) {
    return "Game cancelled"
  }

  for (let i = 1; i <= 5; i++) {
    let playerInput = getPlayerChoice(playerScore, computerScore, numberOfRounds);
    if (playerInput === null) {
      const isConfirmed = confirm ("Are you sure you wanna quit the game?");
      if(isConfirmed){
        alert("Game cancelled");
        return;
      }
      continue;
    }

    const computerSelection = computerPlay()
    let gameResult = playRound(playerInput, computerSelection)

    if (gameResult[0]) {
      playerScore += 1
      numberOfRounds -= 1
    } else if (gameResult === "tie") {
      numberOfRounds -= 1
      continue
    } else {
      computerScore += 1
      numberOfRounds -= 1
    }

  }

  if (playerScore === computerScore) {
    return alert("It was a Tie!")
  } else if (playerScore > computerScore) {
    return alert(`You win! You won ${playerScore} games`)
  } else {
    return alert(`Computer wins! Computer won ${computerScore} games`)
  }
}
game()