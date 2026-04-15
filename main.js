function computerPlay() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();


  switch(true){
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

function game(){
  let playerScore = 0
  let computerScore = 0
  const playerChoices = ["rock", "paper", "scissors"]
  
  for(let i = 1; i <= 5; i++){
    let playerInput = prompt("Pick one weapon(Rock, Paper or Scissors): ").toLowerCase()
  
    while(true){
      if(playerChoices.includes(playerInput)){
        break; 
      }
  
      playerInput = prompt("Wrong input. Pick a valid weapon(Rock, Paper or Scissors): ").toLowerCase()
    }

    const computerSelection = computerPlay()
    let gameResult = playRound(playerInput, computerSelection) //* [true, "You win!"] || [false, "You lose!"] || "tie"

    if(gameResult[0]){
      playerScore += 1
    }else if(gameResult === "tie"){
      continue
    }else{
      computerScore += 1
    }

  }

  if(playerScore === computerScore){
      return "It was a Tie!"
    }else if(playerScore > computerScore){
      return `You win! You won ${playerScore} games`
    }else{
      return `Computer wins! Computer won ${computerScore} games`
    }
}
console.log(game())