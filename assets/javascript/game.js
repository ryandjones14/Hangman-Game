// word bank
let wordBank = ["nintendo", "atari", "sega", "pacman", "pinball", "zelda", "mario", "sonic"];

// scoreboard vars
let wins = 0;
let losses = 0;

// guesses vars
let guess;
let guesses = [];
let guessesLeft = 12;

// random word vars
let randomWord;
let randomWordArray = [];
let blanks = [];

// Random word generator
randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
randomWordArray = randomWord.split("");
index = randomWordArray.length;

// for loop to make a blank list
for (let i = 0; i < index; i++) {
	blanks.push(" _ ");
}

// updates stats
function updateStats() {
	document.getElementById("start").textContent = "";
	document.getElementById("wordBlanks").textContent = blanks.join(" ");
	document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
	document.getElementById("guesses").textContent = "Guesses: " + guesses.join(" ");
}

function clearStats() {
	document.getElementById("wordBlanks").textContent = "";
	document.getElementById("guessesLeft").textContent = "";
	document.getElementById("guesses").textContent = "";
}

// key press function
document.onkeyup = function(event) {
	guess = String.fromCharCode(event.keyCode).toLowerCase();
	updateStats();

	for (i = 0; i < index; i++) {
		if (guess.includes(randomWordArray[i])) {
			blanks[i] = guess;
			document.getElementById("wordBlanks").textContent = blanks.join(" ");
		}
	}

	if (!guess.includes(randomWordArray[i])) {
			guesses.push(guess);
			guessesLeft--;
		}

	if (blanks.toString() === randomWordArray.toString()) {
		document.getElementById("start").textContent = "You Won!";
		clearStats();
		setTimeout(location.reload.bind(location), 1000);
	}

	if (guessesLeft === 0) {
		document.getElementById("start").textContent = "You Lost...";
		clearStats();
		setTimeout(location.reload.bind(location), 1000);
	}
}
