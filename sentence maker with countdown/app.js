"[there was once a [noun] that [verb] a javascript application]"
var questions = 1;
var questionsLeft = " [ You have " + questions + " questions left ]";
var noun = prompt("Enter a noun" + questionsLeft);
var sentence = "<h2>There was a " + noun;
questionsLeft = " [ This is the last questions left ] ";
verb = prompt("Enter a verb" + questionsLeft);
sentence += " that " + verb;
sentence += " a javascript application";
document.write(sentence);
