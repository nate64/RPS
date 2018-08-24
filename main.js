var Rock = document.getElementById('Rock')
var Paper = document.getElementById('Paper')
var Scissors = document.getElementById('Scissors')
var userChoice
var userScore = 0
var compScore = 0
var compChoice
var draw = 0
var compare
var rPs = ['Rock', 'Paper', 'Scissors']

Rock.addEventListener('click', function() {
  compChoice = rPs[Math.floor(Math.random() * rPs.length)];
  userChoice = 'Rock'
  compare(userChoice, compChoice)
})

Paper.addEventListener('click', function() {
  compChoice = rPs[Math.floor(Math.random() * rPs.length)];
  userChoice = 'Paper'
  compare(userChoice, compChoice)
})

Scissors.addEventListener('click', function() {
  compChoice = rPs[Math.floor(Math.random() * rPs.length)];
  userChoice = 'Scissors'
  compare(userChoice, compChoice)
})

function compare(userChoice, compChoice){
  switch(userChoice) {
    
    case "Rock":
      console.log()
      if (compChoice === 'Paper') {
        alert('Computer Wins This Round.')
        compScore += 1
        document.getElementById('compScore').innerHTML = "Computer: " + compScore
      } else if (compChoice == userChoice) {
        alert("It's A Draw")
        draw += 1
        document.getElementById('draw').innerHTML = "Draw: " + draw
      } else {
        alert("You Win This Round")
        userScore += 1
        document.getElementById('userScoreScore').innerHTML = "Player 1: " + userScore
      }
        break;
  
    case "Scissors":
    debugger
      console.log()
      if (compChoice === 'Rock') {
        alert('Computer Wins This Round.')
        compScore += 1
        document.getElementById('compScore').innerHTML = "Computer Score: " + compScore
      } else if (compChoice === userChoice) {
        alert("It's a Draw")
        draw += 1
      } else {
        alert("You Win This Round")
        userScore += 1
        //inner html here??
      }
        break;

    case "Paper":
    debugger
      console.log()
      if (compChoice === 'Scissors') {
        alert('Computer Wins This Round')
        compScore += 1
        document.getElementById('compScore').innerHTML = "Computer Score: " + compScore
      } else if (compChoice === userChoice) {
        alert("It's a Draw")
        draw += 1
      } else {
        alert('You Win This Round')
        userScore += 1
      }
    }

    
      // break;
  }
  
  




// document.getElementById('draw').innerHTML = "Draws: " + draw
// h2.innerHTML = userScore[e.target.id]
// / alert('You Chose ' + userChoice + ' And The Computer Chose: ' + compChoice)
// h2.innerHTML = userScore.target.id
// function render() {
//   $wins.innerHTML = 'Wins: ' + score.win
//   $losses.innerHTML = 'Losses: ' + score.lose
//   $ties.innerHTML = 'Ties: ' + score.tie
// }



