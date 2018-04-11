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
	document.getElementById("guesses").innerHTML = "Guesses: " + guesses;
}

function clearStats() {
	document.getElementById("wordBlanks").textContent = "";
	document.getElementById("guessesLeft").textContent = "";
	document.getElementById("guesses").textContent = "";
}

function makeGuess(letter) {
	for (i = 0; i < index; i++) {
		if (letter.includes(randomWordArray[i])) {
			blanks[i] = letter;
			guesses.push(letter);
			document.getElementById("wordBlanks").textContent = blanks.join(" ");
		}
		// updateStats();
	}

	if (!randomWordArray.includes(letter)) {
		let guess = `<span class="wrong">${letter}</span>`;		
		guesses.push(guess);
		guessesLeft--;
		// updateStats();
	}
	updateStats();
};

// key press function
document.onkeyup = function(event) {
	letter = String.fromCharCode(event.keyCode).toLowerCase();

	if (64 < event.keyCode && event.keyCode < 91) {
		makeGuess(letter);
	}
	if (blanks.toString() === randomWordArray.toString()) {
		document.getElementById("start").textContent = `It was ${randomWord}! You Won!`;
		clearStats();
		setTimeout(location.reload.bind(location), 4500);
	}

	if (guessesLeft === 0) {
		document.getElementById("start").textContent = `It was ${randomWord}, you lost...`;
		clearStats();
		setTimeout(location.reload.bind(location), 4500);
	}
}
