// word bank
var wordBank = ["nintendo", "atari", "sega", "pacman", "pinball"];

// scoreboard vars
var wins = 0;
var losses = 0;

// guesses vars
var guess;
var guesses = [];
var guessesLeft = 13;

// random word vars
var randomWord;
var randomWordArray = [];
var blanks = [];

// Random word generator
randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randomWord);
randomWordArray = randomWord.split("");
console.log(randomWordArray);
index = randomWordArray.length;
console.log(index);

// for loop to make a blank list
for (i = 0; i < index; i++) {
	blanks.push(" _ ");
}

console.log("blanks: " + blanks);

// updates stats
function updateStats() {

document.getElementById("wordBlanks").textContent = blanks.join(" ");
document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
document.getElementById("guesses").textContent = "Guesses: " + guesses.join(" ");
}


// checks letter
function checkGuess(input) {
	for (i = 0; i < index; i++) {
		if (guess.includes(randomWordArray[i])) {
			blanks[i] = guess;
			document.getElementById("wordBlanks").textContent = blanks.join(" ");
		}

	}

	if (!guess.includes(randomWordArray[i])) {
			guesses.push(guess);
			guessesLeft--;
			console.log("guesses left: " + guessesLeft);
			console.log("Guesses: " + guesses);
		}

	if (blanks.toString() === randomWordArray.toString()) {
		document.getElementById("start").textContent = "You Won!";
		setTimeout(location.reload.bind(location), 3000);
	}

	if (guessesLeft === 0) {
		document.getElementById("start").textContent = "You Lost...";
		setTimeout(location.reload.bind(location), 3000);
	}
}

// key press function
document.onkeyup = function(event) {
	guess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log("Guess: " + guess);
	checkGuess(guess);
	updateStats();
}