// Define an array of scrambled words and their hints
const words = [
  {
    scrambled: "algorithm",
    hint: "A set of instructions for solving a problem",
  },
  {
    scrambled: "function",
    hint: "A piece of reusable code that performs a specific task",
  },
  { scrambled: "variable", hint: "A container for storing data values" },
  {
    scrambled: "debugging",
    hint: "The process of finding and fixing errors in code",
  },
  {
    scrambled: "iteration",
    hint: "Repeating a set of instructions a specified number of times",
  },
];

// Get references to HTML elements
const scrambledWordElement = document.getElementById("scrambledWord");
const guessInputElement = document.getElementById("guessInput");
const checkButtonElement = document.getElementById("checkButton");
const hintButtonElement = document.getElementById("hintButton");

// Initialize variables
let currentWordIndex;

// Function to randomly select and display a word
function selectWord() {
  // Randomly select a word index
  currentWordIndex = Math.floor(Math.random() * words.length);

  // Display the scrambled word
  scrambledWordElement.textContent = scrambleWord(
    words[currentWordIndex].scrambled
  );
}

// Function to scramble a word
function scrambleWord(word) {
  return word
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
}

// Function to show hints
function showHint() {
  alert(words[currentWordIndex].hint);
}

// Function to check the player's guess
function checkGuess() {
  const guess = guessInputElement.value.toLowerCase().trim();
  const correctWord = words[currentWordIndex].scrambled;

  // Check if the guess is correct
  if (guess === correctWord) {
    alert("Congratulations! You decoded the word correctly.");
  } else {
    alert("Sorry, incorrect decoding. Keep trying!");
  }

  // Clear the input field
  guessInputElement.value = "";

  // Select a new word
  selectWord();
}

// Add event listeners
checkButtonElement.addEventListener("click", checkGuess);
hintButtonElement.addEventListener("click", showHint);

// Initial word selection
selectWord();
