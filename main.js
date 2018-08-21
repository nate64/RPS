// Basic Objectives:
// A user selects rock, paper, or scissors
// Computer randomly chooses
// hint: have your choices in an array and randomly choose 
// Display the user and computers choice on the screen
// Display the winner
//Rock Paper Scissors against the computer


var Rock = document.getElementById('Rock')
var Paper = document.getElementById('Paper')
var Scissors = document.getElementById('Scissors')
var userChoice
var userScore
var compScore
var compChoice
var draw
//var compare

var rPs = ['Rock', 'Paper', 'Scissors']

Rock.addEventListener('click', function() {
  var compChoice = rPs[Math.floor(Math.random() * rPs.length)];
  userChoice = 'Rock'
  alert('You Chose ' + userChoice + ' And The Computer Chose: ' + compChoice)
  //you win or lose statement
})

Paper.addEventListener('click', function() {
  var compChoice = rPs[Math.floor(Math.random() * rPs.length)];
  userChoice = 'Paper'
  alert('You Chose ' + userChoice + ' And The Computer Chose: ' + compChoice)
  //you win or lose statement
})

Scissors.addEventListener('click', function() {
  var compChoice = rPs[Math.floor(Math.random() * rPs.length)];
  userChoice = 'Scissors'
  alert('You Chose ' + userChoice + ' And The Computer Chose: ' + compChoice)
  //you win or lose statement
})

//rock beats scissor
//scissor beats paper
//paper beats rock
switch(userChoice) {

  case 'Rock':
    userChoice == 'Rock' && compChoice == 'Paper'
      compScore += 1
      alert ('Computer Wins this Round.')
      //break;

  case 'Rock':
    userChoice == 'Rock' && compChoice == 'Scissors'
      userScore += 1
      alert ('You Win This Round!')
      //break;

  case 'Paper':
    userChoice == 'Paper' && compChoice == 'Scissors'
      compScore += 1
      alert ('Computer Wins this Round.')
      //break;

  case 'Paper':
    userChoice == 'Paper' && compChoice == 'Rock'
      userScore += 1
      alert ('You Win This Round!')
      //break;

  case 'Scissors':
    userChoice == 'Scissors' && compChoice == 'Rock'
      compScore += 1
      alert ('Computer Wins this Round.')
      //break;

  case 'Scissors':
    userChoice == 'Scissors' && compChoice == 'Paper'
      userScore +=1
      alert ('You Win This Round!')
    //break;

  //default:
    userChoice === compChoice
      draw += 1
     alert ("It's a Draw")
}

// var userScore = document.getElementById('fluff')
// h2.innerHTML = userScore[e.target.id]

document.getElementById('userScore').innerHTML = userScore





// function clearEverything() {
//   input.value = ''
//   label.innerHTML = ''
//   list.innerHTML = null
// }

// clear.addEventListener('click', clearEverything)

// input.addEventListener('keyup', function(e) {
//   label.innerHTML = e.target.value
// })

// btn.addEventListener('click', function() {
//   var value = input.value
//   var li = document.createElement('li')
//   li.innerHTML = value
//   list.append(li)
//   console.log(value)
//   input.value = ''
//   label.innerHTML = ''
//   input.focus()
// })

