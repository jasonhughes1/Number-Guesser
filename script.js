
var input = document.getElementById('input1');
var guessButton = document.querySelector('.buttonOne')
var clearButton = document.querySelector('.buttonTwo')
var resetButton =document.querySelector('.buttonThree')
var output = document.getElementById ('output');
var number = document.getElementById ('number');
var highlow = document.getElementById ('highlow');
var newMin = document.querySelector('.newmin')
var newMax = document.querySelector('.newmax')
var min = parseInt(newMin.value);
var max = parseInt(newMax.value);
var saveButton = document.querySelector('.save')
var computerChoice = computerNumber();

function computerNumber() {
   return Math.floor((Math.random() * (max - min) + min));
}

console.log(computerChoice);
guessButton.addEventListener('click', function() {
  var playerGuess = parseInt (input.value);

  if (isNaN(playerGuess)){
    alert("Not A Number!")
    output.innerText = "You have not guessed a number."
  } else if (playerGuess > max) {
    number.innerText = playerGuess
    alert("Thats above the maximum number!");
    output.innerText = "Out of range, too high"
    highlow.innerText="HIGH"
  } else if (playerGuess < min) {
    number.innerText = playerGuess
    alert("Thats below the minimum number!");
    output.innerText = ""
    highlow.innerText =""
  } else if (playerGuess > computerChoice) {
    output.innerText = "Your last guess was"
    number.innerText = playerGuess
    highlow.innerText = "Good guess, but too high! ";
  } else if (playerGuess < computerChoice) {
    output.innerText = "Your last guess was"
    number.innerText = playerGuess
    highlow.innerText = "Good guess, but too low!  ";
  } else {
    computerChoice = computerNumber();
    console.log(computerChoice);
    output.innerText = 'BOOM! GOT IT!'
    number.innerText = playerGuess
    highlow.innerText = "Keep playing, your range has increased!"
    max += 10;
    min -= 10;
    console.log('min', min, 'max', max);
    newMax.value = max
    newMin.value= min
  }
})


function clearFields() {
  input.value=""
  number.innerText=""
  highlow.innerText="";
}

clearButton.addEventListener ('click', function() {
  clearFields();
  clearBtn();
})


resetButton.addEventListener ('click', function() {
  computerChoice = computerNumber();
  console.log(computerChoice);
  output.innerText=""
  input.value=""
  number.innerText=""
  highlow.innerText="";
  newMin.value = 1;
  newMax.value = 100;
})
function clearBtn () {
  clearButton.disabled = true;
}

function dealWithButtons() {
  if (input.value === "") {
    clearBtn();
  } else {
    clearButton.disabled = false;
  }
}

input.addEventListener('input', dealWithButtons);

function resetBtn () {
  resetButton.disabled = true;
}

input.addEventListener ('input', function(){
  if (input.value === "") {
    resetBtn();
  } else {
    resetButton.disabled = false;
  }
})
saveButton.addEventListener('click', function() {
  min = parseInt(newMin.value);
  max = parseInt(newMax.value);
  computerChoice = computerNumber(min, max);
  console.log(computerChoice, min, max);
})
