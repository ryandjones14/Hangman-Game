// word bank
var wordBank = ["nintendo", "atari", "sega", "pacman"];
// scoreboard vars
var wins = 0;
var losses = 0;
// guesses vars
var guess;
var guesses = [];
var guessesLeft = 12;
// random word vars
var randomWord;
var randomWordArray = [];
var blanks = [];

randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randomWord);
randomWordArray = randomWord.split("");
console.log(randomWordArray);
index = randomWordArray.length;
console.log(index);

for (i = 0; i < index; i++) {
	blanks.push(" _ ");
}

console.log("blanks: " + blanks);

function updateStats() {

document.getElementById("wordBlanks").textContent = blanks;
document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
document.getElementById("guesses").textContent = "Guesses: " + guesses;
}

function checkGuess(input) {
	for (i = 0; i < index; i++) {
		if (guess.includes(randomWordArray[i])) {
			blanks[i] = guess;
			document.getElementById("wordBlanks").textContent = blanks;
		}

	} 

	if (!guess.includes(randomWordArray[i])) {
			guesses.push(guess);
			guessesLeft--;
			console.log("guesses left: " + guessesLeft);
			console.log("Guesses: " + guesses);
		}

	if (blanks.toString() === randomWordArray.toString()) {
		alert("You won!");
		location.reload();
	}

	if (guessesLeft === 0) {
		alert("Try again");
		location.reload();
	}
}

document.onkeyup = function(event) {
	guess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("Guess: " + guess);
	checkGuess(guess);
	updateStats();
}