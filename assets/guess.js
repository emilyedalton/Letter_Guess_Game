var letters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guesses = 10;
var randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log("this is your ramdom letter:  " + randomLetter);
var reSet;
var userGuess;
var guessArray = []
//collects the keystroke that represents the user guess 
document.onkeypress = function (event) {
    userGuess = event.key;
    console.log("your guess was" + " " + userGuess);
//puts the user guess into an array 
    guessArray.push(" " + userGuess);
    console.log("this is your new array" + guessArray)
    console.log("you have this many guesses remaining" + " " + guesses);

    
    //if the user guess input equals the  random letter increment the wins by 1 
    if (userGuess === randomLetter && guesses > 0) {
        wins++;
        console.log("you have this many wins" + " " + wins);
        // else if input does not equal the user guess the number of guesses are larger than zero decrement the number of guesses 
    } else if (userGuess !== randomLetter && guesses > 0) {
        guesses--;
        console.log("you have this many guesses left" + "  " + guesses);
        // else the above conditions are not true, meaning the guess was either correct,  incorrect and remaining guesses are greater than zero  
    } else {
        losses++;
        guesses = 0;
        guessArray = [];
    }


    //function attached to a button with on click event that picks a new random letter , resets guesses and empties guess array should be here. 

    // displays the the letters, attempts, wins, and losses 

    document.getElementById("letterTrack").textContent = " " + guessArray;
    document.getElementById("attempts").textContent = guesses;
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;

}