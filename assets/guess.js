var letters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guesses = 10;
var randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log("this is your ramdom letter:  " + randomLetter);
var reSet;
var userGuess;
var guessArray = []
// window.addEventListener("keypress", display);

//  reSet = document.getElementById("reSet")
//  document.addEventListener("click",reset);

// function gameInit(){

document.onkeypress = function (event) {
    userGuess = event.key;
    console.log("your guess was" + " " + userGuess);
    guessArray.push(" " + userGuess);
    console.log("this is your new array" + guessArray)
    console.log("you have this many guesses remaining" + " " + guesses);

    //during the time that losses do not ammount to 1 
    // while (losses < 1 && wins < 1) {
    //if the user guess input equals the  random letter increment the wins by 1 and congratulate
    if (userGuess === randomLetter) {
        wins++;
        console.log("you have this many wins" + " " + wins);
        // if input incorrect decrement the number of guesses 
    } else if (userGuess !== randomLetter) {
        guesses--;
        console.log("you have this many guesses left" + "  " + guesses);
    } else if (guesses === 0) {
        losses++;
        console.log("you have lost this many times: " + " " + losses);

    } else {
        wins =0; 
        losses = 0; 
        guessArray = [];

    }


    //should return new random letter


    //  function display(){

    document.getElementById("letterTrack").textContent = " " + guessArray;
    document.getElementById("attempts").textContent = guesses;
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;

}