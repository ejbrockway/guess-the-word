const lettersAppear = document.querySelector(".guessed-letters");
const textButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remianingGuesses = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const emptyParagraph = document.querySelector(".form-element");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

//Display symmbols as place holders for letters//
const placeHolder = function (word) {
    const placeHolderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeHolderLetters.push("●");
    };
    wordInProgress.innerText = placeHolderLetters.join("");
};

placeHolder(word);


textButton.addEventListener("click", function (e) {
    e.preventdefault();
    message.innerText = "";

    const guess = letterInput.value;
    const goodGuess = validateInput(guess);
    
    if (goodGuess){
        makeGuess(guess);
    };

    letterInput.value = "";
});

const validateInput = function(input) {
    const acceptedLetter = /[a-zA-Z]/;

    if (input.length === 0) {
        message.innerText = "Please enter letter.";

    } else if (input.length > 1) {
        message.innerText = "Only use one letter at a time.";

     } else if (!input.match(acceptedLetter)) {
        message.innerText = "Pick a letter from A to Z!";

     } else {
        return input;
     }

};

const makeGuess = function (guess) {
    guess = toUpperCase();

    if (guessedLetters.includes(guess)) {
        message.innerText = "Try again, we've seen this letter before.";

    } else {
        guessedLetters.push(guess);
        console.log (guessedLetters);
    }
};