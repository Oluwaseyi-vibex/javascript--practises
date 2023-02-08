var correctGuess = false;
var randomNumber = Math.floor (Math.random() * 6) + 1 ;
var guess = prompt("I am thinking of a number between 1 and 6, which is it");
var guessNumber = parseInt(guess);
if (guessNumber === randomNumber) {
    correctGuess = true;
}
else if (guessNumber < randomNumber ) {
    var guessMore = prompt("Try one more time, The number i was thinking of is greater than " + guessNumber)
    if (guessMore === randomNumber){
        alert("YOU GUESSED IT RIGHT!!!")
    }
    else {
        alert("YOU GUESSED IT WRONG!!! The number was " + randomNumber)
    }
}

else if (guessNumber > randomNumber) {
    var guessLess = prompt("Try one more time, The number i thought of is less than " + guessNumber)
    if (guessLess === randomNumber){
        alert("YOU GUESSED IT RIGHT!!!")
    }
    else {
        alert("YOU GUESSED IT WRONG!!! The number was " + randomNumber)
    }
}












// if (guessNumber === randomNumber) {
//     alert("YOU GUESSED IT RIGHT!!!")
// }
// else {
//     alert("YOU GUESSED IT WRONG!!! The number was " + randomNumber)
// }