"[pronoun], started programming at the age of [age] in [where were you when you started programming]"
var pronoun = prompt("Enter the pronoun to use");
var age = prompt("Enter the age you started programming");
var location = prompt("where were you when you started programming");
var sentence = pronoun + " started programming at the age of " + parseInt(age) + " in " + location;
document.write(sentence);