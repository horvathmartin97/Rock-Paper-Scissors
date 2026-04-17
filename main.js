function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function changeToLowerCase(str){
  if(str){
    return str.toLowerCase()
  }

  return false
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection
  const computer = computerSelection


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
  let numberOfRounds = 5
  const playerChoices = ["rock", "paper", "scissors"]
  let playerConfirmation = confirm("You are playing a game of Rock, Paper, Scissors against the computer, Are you ready?")
  
  if(!playerConfirmation){
    return "Game cancelled"
  }
  
  for(let i = 1; i <= 5; i++){
    let playerInput = changeToLowerCase(prompt(`You have ${numberOfRounds} rounds, Pick one weapon(Rock, Paper or Scissors): `))

    if(!playerInput){
      return "Game cancelled"
    }
  
    while(true){
      if(playerChoices.includes(playerInput)){
        break; 
      }

      if(!playerInput){
        return "Game cancelled"
      }
  
      playerInput = changeToLowerCase(prompt("Wrong Input, Pick one weapon(Rock, Paper or Scissors): "))
    }

    const computerSelection = computerPlay()
    let gameResult = playRound(playerInput, computerSelection) 

    if(gameResult[0]){
      playerScore += 1
      numberOfRounds -= 1
    }else if(gameResult === "tie"){
      numberOfRounds -= 1
      continue
    }else{
      computerScore += 1
      numberOfRounds -= 1
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