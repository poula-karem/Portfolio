// Image 1
var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDiceIamge1 = "images/dice" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDiceIamge1);

// Image 2
var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceIamge2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDiceIamge2);

if (randomNumber1 > randomNumber2) {
    document.querySelectorAll("p")[0].textContent = "Play 1 Wins! 🚩";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelectorAll("p")[1].textContent = "Player 2 Wins! 🚩";
}
else {
    document.querySelectorAll("p")[0].textContent = "Play 1 Draw!";
    document.querySelectorAll("p")[1].textContent = "Play 2 Draw!";
}