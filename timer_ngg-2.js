let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

	// the first three constants are each made to store a reference to the results paragraph in HTML, used to insert paragraphs later on in the code

	// 30 Second Function

var timer = 30;
var min = 60
var sec = 30;

function startTimer() {
					sec = parseInt(timer%60);

					if(timer === 0) {
						setGameOver();
					}

					document.getElementById("demo").innerHTML = "Time Left: " + sec.toString();
					timer--;
					} else { setTimeout(function() {
					lastResult.textContent = "Time's up! Game over!";
					lastResult.style.backgroundColor = 'red';	
						startTimer();
					}, 1000);
					} 

function checkGuess() {
					let userGuess = Number(guessField.value);
					if (guessCount ===1) {
						guesses.textContent = 'Previous guesses:';
					}
					guesses.textContent += userGuess + ' ';
					startTimer();
						

					if (userGuess === randomNumber) {
					lastResult.textContent = 'Boom! Got-Em!!';
					lastResult.style.backgroundColor = 'green';
					lowOrHi.textContent = '';
					setGameOver();

					} else if (guessCount === 10) {
					lastResult.textContent = '!!!Game Over!!!';
					lowOrHi.textContent = '';
					setGameOver();


					} else {
					lastResult.textContent = 'Nope!';
					lastResult.style.backgroundColor = 'red';
					if(userGuess < randomNumber) {
						lowOrHi.textContent = 'Last guess was too low!';
					} else if (userGuess > randomNumber) {
						lowOrHi.textContent = 'Last guess was too high!';
						}
					}

					guessCount++;
					guessField.value = '';
					guessField.focus();
				}

					guessSubmit.addEventListener('click', checkGuess);
					guessSubmit.addEventListener('click', startTimer);

function setGameOver() {
						guessField.disabled = true;
						guessSubmit.disabled = true;
						resetButton = document.createElement('button');
						resetButton.textContent = 'Start New Game';
						document.body.appendChild(resetButton);
						resetButton.addEventListener('click', resetGame);
						resetButton.addEventListener('enter', resetGame);
					}

function resetGame() {
						guessCount = 1;

						const resetParas = document.querySelectorAll('.resultParas p');
						for (let i = 0; i < resetParas.length ; i++) {
						resetParas[i].textContent = '';
						}

						resetButton.parentNode.removeChild(resetButton);

						guessField.disabled = false;
						guessSubmit.disabled = false;
						guessField.value = '';
						guessField.focus();

						lastResult.style.backgroundColor = 'white';

						randomNumber = Math.floor(Math.random() * 100) + 1; 
					}