var userInput = document.querySelector('input');
var guessBtn = document.querySelector('.guess-btn');
var clearBtn = document.querySelector('.clear-btn');
var displayNum = document.querySelector('.display-guess');
var resetGame = document.querySelector('.reset-btn');
var score = document.querySelector('.score');
var min = 0;
var max = 100;
var guesses = 0;
var playerScore = 0;

function randomNum() {
  var newRandom = Math.floor(Math.random() * (max - min)) + min;
  randomNumber = parseInt(newRandom);
  return randomNumber;
}

var randomNumber = randomNum();
console.log(randomNumber);

userInput.addEventListener('keyup', function() {
  if (event.keyCode == 13) {
    guessBtn.click();
  }
})

function scoring() {
  if (guesses >=1 && guesses <= 3) {
    playerScore = playerScore + 10;
  } else if (guesses >= 4 && guesses <=7) {
    playerScore = playerScore + 5;
  } else if (guesses >= 8 && guesses <= 10){
    playerScore = playerScore + 2;
  } else {
    playerScore = playerScore;
  }
}

guessBtn.addEventListener('click', function() {
  var feedback = document.querySelector('.feedback');
  guesses++;
  displayNum.innerText = parseInt(userInput.value);
  if (isNaN(parseInt(userInput.value))) {
    alert("Must enter a number");
    displayNum.innerText = "?";
  }
  if (userInput.value > max){
    alert("Guess between the range below");
  } else if (userInput.value < min) {
    alert ("Guess between the range below");
  } else if (userInput.value < randomNumber) {
    feedback.innerText = "That guess was too low, try again!";
  } else if (userInput.value > randomNumber) {
    feedback.innerText = "That guess was too high, maybe next time!";
  } else {
    feedback.innerText = "Boom!! YOU WIN!";
    min = min - 10;
    max = max + 10;
    randomNumber = randomNum(min, max);
    console.log(randomNumber);
    document.querySelector('.min-view').value = min;
    document.querySelector('.max-view').value = max;
    scoring();
    score.innerText = playerScore;
  }
})

userInput.addEventListener('keyup', function() {
  if (userInput.value === "") {
    disableBtns();
  } else {
    clearBtn.disabled = false;
    resetGame.disabled = false;
  }
})

document.querySelector('.max-view', '.min-view').addEventListener('blur', function() {
  var userMax = parseInt(document.querySelector('.max-view').value);
  max = userMax;
  var userMin = parseInt(document.querySelector('.min-view').value);
  min = userMin;
  randomNum();
  console.log(randomNumber);
})

function clearIt() {
  userInput.value = "";
  displayNum.innerText = "?";
}

function disableBtns() {
  clearBtn.disabled = true;
  resetGame.disabled = true;
}

clearBtn.addEventListener('click', function(){
  clearIt();
  disableBtns();
})

resetGame.addEventListener('click', function() {
  location.reload();
})
