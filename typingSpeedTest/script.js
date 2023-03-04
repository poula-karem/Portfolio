// Array Of Words
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];

// Setting levels
const lvls = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2
};

// Default level
let defaultLevelName = `Normal`; // Change level from here
let defaultLevelSeconds = lvls[defaultLevelName];

//Catch selectors
let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let secondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upcomingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

// Setting level name, seconds, & score
lvlNameSpan.innerHTML = defaultLevelName;
secondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

// Disable paste event
input.onpaste = () => {
    return false
}

// Start game
startButton.onclick = function () {
    this.remove();
    input.focus();
    genWords(); // Generate word function
}

function genWords() {
    let randomWord = words[Math.floor(Math.random() * words.length)]; // Get random from array
    let wordIndex = words.indexOf(randomWord); // Get word index
    words.splice(wordIndex, 1); // Remove word from array
    theWord.innerHTML = randomWord; // Show the random word
    upcomingWords.innerHTML = ``; // Empty upcoming word from array

    // Generate words
    for (let i = 0; i < words.length; i++) {
        // Creat div element
        let div = document.createElement(`div`);
        let txt = document.createTextNode(words[i]);
        div.appendChild(txt);
        upcomingWords.appendChild(div);
    }
    startPlay(); // Call start play function
}

function startPlay() {
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval(() => {
        timeLeftSpan.innerHTML--;
        if (timeLeftSpan.innerHTML === `0`) {
            clearInterval(start);  // Stop Timer
            // Compare words
            if (theWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = ``; // Empty Input Field
                scoreGot.innerHTML++;  // Increase Score
                if (words.length > 0) {
                    genWords(); // Generate word function

                } else {
                    let span = document.createElement("span");
                    span.className = `good`;
                    let spanText = document.createTextNode(`You Win`);
                    span.appendChild(spanText);
                    finishMessage.appendChild(span);
                    upcomingWords.remove(); // Remove Upcoming Words Box
                }
            } else {
                let span = document.createElement("span");
                span.className = `bad`;
                let spanText = document.createTextNode(`Game Over`);
                span.appendChild(spanText);
                finishMessage.appendChild(span);
            }
        }
    }, 1000);
}