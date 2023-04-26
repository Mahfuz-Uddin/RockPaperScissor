function getComputerChoice (){
    var choices =['Rock', 'Paper','Scissor']
    let randomChoice = choices[Math.floor(Math.random()*3)]
    return randomChoice
}   

function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost
    
    let score;
  
    // All situations where human draws, set `score` to 0
    if (playerChoice === computerChoice) {
      score = 0
  
    
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
      score = 1
  
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      score = 1
  
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
      score = 1
  
    // Otherwise human loses (aka set score to -1)
    } else {
      score = -1
    }
  
    // return score
    return score
  }

  function showResult(score, playerChoice, computerChoice) {
    // Hint: on a score of -1
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
    
    let result = document.getElementById('result')
    switch (score) {
      case -1:
        result.innerText = `You Lose!`
        break;
      case 0:
        result.innerText = `It's a Draw!`
        break;
      case 1:
        result.innerText = `You Win!`
        break;
    }

  let playerScore = document.getElementById('player-score')
  let hands = document.getElementById('hands')
  playerScore.innerText = `${Number(playerScore.innerText) + score}`
    hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`
}
function onClickRPS(playerChoice) {
    const computerChoice = getComputerChoice()
    const score = getResult(playerChoice.value, computerChoice)
    showResult(score, playerChoice.value, computerChoice)
  }




function playGame() {
    let rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(rpsButton => {
      rpsButton.onclick = () => onClickRPS(rpsButton)
    })
    let endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame()
  }

function endGame() {
    let playerScore = document.getElementById('player-score')
    let hands = document.getElementById('hands')
    let result = document.getElementById('result')
    playerScore.innerText = ''
    hands.innerText = ''
    result.innerText = ''
  }
  
playGame()


