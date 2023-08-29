class GuessingGame {
  constructor() {
    this.minRange = null;
    this.maxRange = null;
    this.targetNumber = null;
  }

  setRange(min, max) {
    this.minRange = min;
    this.maxRange = max;
    this.targetNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  checkGuess(guess) {
    if (guess < this.targetNumber) {
      return "Too low!";
    } else if (guess > this.targetNumber) {
      return "Too high!";
    } else {
      return "Correct! You guessed the number.";
    }
  }
}

const game = new GuessingGame();

const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  const guessValue = parseInt(guessInput.value);

  if (isNaN(guessValue)) {
    alert("Please enter a valid number.");
  } else {
    const result = game.checkGuess(guessValue);
    alert(result);
  }
});

// Getting the min and max range values from the user
const min = parseInt(prompt("Enter the minimum range value:"));
const max = parseInt(prompt("Enter the maximum range value:"));

// Setting the range for the game
game.setRange(min, max);
