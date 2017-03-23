var userInput = document.querySelector('input');
var guessBtn = document.querySelector('.guess-btn');
var clearBtn = document.querySelector('.clear-btn');
var displayNum = document.querySelector('.display-guess');
var resetGame = document.querySelector('.reset-btn');
var min = 0;
var max = 100;

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

guessBtn.addEventListener('click', function() {
  var feedback = document.querySelector('.feedback');

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
