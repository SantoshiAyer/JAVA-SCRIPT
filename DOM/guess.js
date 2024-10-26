let randomNumber = parseInt(Math.random() * 100 + 1); // Generate random number between 1 and 100

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p'); // Create a new paragraph element for the new game button

let prevGuess = [];
let numGuess = 1;
let playGame = true; // Control variable for game state

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default form submission
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    });
}

// Validate the user's guess
function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1) {
        alert('Please enter a number greater than 0');
    } else if (guess > 100) {
        alert('Please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game Over. The random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

// Check the user's guess against the random number
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You guessed it right!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`Your guess is too low!`);
    } else if (guess > randomNumber) {
        displayMessage(`Your guess is too high!`);
    }
}

// Display the user's guess
function displayGuess(guess) {
    userInput.value = ''; // Clear the input field
    guessSlot.innerHTML += `${guess}, `; // Add the guess to the displayed guesses
    numGuess++; // Increment the number of guesses
    remaining.innerHTML = `${11 - numGuess} attempts remaining`; // Update attempts remaining
}

// Display feedback messages
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// End the game and disable further input
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', ''); // Disable the input field
    p.classList.add('button'); // Add a class for styling
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`; // Create a new game button
    startOver.appendChild(p); // Append the new game button
    playGame = false; // Update game state
    newGame(); // Set up the new game functionality
}

// Functionality to start a new game
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = parseInt(Math.random() * 100 + 1); // Generate a new random number
        prevGuess = []; // Reset previous guesses
        numGuess = 1; // Reset number of guesses
        guessSlot.innerHTML = ''; // Clear displayed guesses
        remaining.innerHTML = `10 attempts remaining`; // Reset attempts remaining
        userInput.removeAttribute('disabled'); // Re-enable the input field
        startOver.removeChild(p); // Remove the new game button
        playGame = true; // Update game state
    });
}
