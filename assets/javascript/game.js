// Create variables and arrays

var wordBank = ["football", "baseball", "basketball", "soccer"];

var wins = 0;

var losses = 0;

var guessesLeft = 10;

var guess;

var guesses = [];

var startKey;

var resetKey;

var wordChoice;

var num;

var letters;

var output = [];

function gameStats() {
	document.getElementById("wins").textContent = "Wins: " + wins;
	document.getElementById("losses").textContent = "Losses: " + losses;
	document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
	document.getElementById("start").textContent = "Start guessing!";
	document.getElementById("guesses").textContent = "Guesses: " + guesses;
}

// Create a way for the user to interact

document.onkeyup = function(event) {
	startKey = event.key;
	if (startKey === "Enter") {
		gameStats();

// Random word picker

		wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
		letters = wordChoice.split("");
		num = letters.length;
		console.log(letters);
		console.log("num: " + num);
		console.log("Word choice: " + wordChoice);
		document.getElementById("wordChoice").textContent = "Current Word: " + wordChoice;


	// // for loop to a a blank space for each letter in the word
 //    for(var i = 0; i < num; i++) {
 //      output.push("_")
 //      console.log(output)
 //    }
     
 //    // HTML       
 //    document.getElementById("wordBlankd").innerHTML = output.join(" ");




// user starts guessing
		document.onkeyup = function(event) {
			guess = event.key;
			guesses.push(guess);
			console.log("User guess: " + guess);
			guessesLeft--;
			gameStats();
			//document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
			//document.getElementById("guesses").textContent = "Guesses picked: " + guesses;

// if guesses left = 0, add 1 to loss
			if (guessesLeft === 0) {
				losses++
				guessesLeft = 10;
				gameStats();
				//document.getElementById("losses").textContent = "Losses: " + losses;
				//document.getElementById("guessesLeft").textContent = "Guesses Left: " + guessesLeft;
			}


				if (losses === 1 || wins === 1) {
					document.getElementById("start").textContent = "Would you like to play again? Press 'space'!";
					document.onkeyup = function(event) {
						resetKey = event.key;
						if (resetKey === " ") {
							location.reload();
						}
					}
				}
		}
	}
}