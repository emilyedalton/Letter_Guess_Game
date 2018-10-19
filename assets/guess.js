
   
    var letters = ["a", "b", "c", "d", "f", "g", "h", "i"]
    var wins = 0; 
    var losses = 0; 
    var guesses = 10; 
    var randomLetter = letters[Math.floor(Math.random()*letters.length)];
    console.log("this is your ramdom letter:  " + randomLetter);
    var reSet;
    var userGuess;
    var guessArray = []
    // window.addEventListener("keypress", display);
    
    // reSet = document.getElementById("reSet")
    // document.addEventListener("click",reset);

// function gameInit(){
      
    document.onkeypress = function(event){
        var userGuess = event.key;
        console.log("your guess was" + " " + userGuess);
        guessArray.push(userGuess);
        console.log ("this is your new array" + guessArray)
        //during the time that losses do not ammount to 1 
        while(losses< 1 && wins < 1){
        //if the user guess input equals the  random letter increment the wins by 1 and congratulate
        if(userGuess === randomLetter){
            wins++;
            alert("CORRECT");
        console.log("you have this many wins" + " "+ wins);
            break;
        // if input incorrect decrement the number of guesses 
        }else{
            guesses--; 
        console.log("you have this many guesses left"+ "  " + guesses);
        }
        // once guesses are equal to zero 
        if (guesses === 0)
        losses++;
        console.log("you have lost this many times: " + " " + losses);
        break;
        }
    

    

//should return new random letter
     

// function reset(){
    

//     var randomLetter = letters[Math.floor(Math.random()*letters.length)];
//     console.log("this is your ramdom letter:  " + randomLetter);
//     var reSet;
// }

//  function display(){

document.getElementById("letterTrack").textContent = " " + guessArray;
}

