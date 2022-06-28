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
    const guess = letterInput.value;
    console.log(guess);
    letterInput.value = "";
});