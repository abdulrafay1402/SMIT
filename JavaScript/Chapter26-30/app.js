var number = +prompt("Enter a number:");
document.writeln("Number: " + number + "<br>");
document.writeln("Round off value: " + Math.round(number) + "<br>");
document.writeln("Floor value: " + Math.floor(number) + "<br>");
document.writeln("Ceil value: " + Math.ceil(number) + "<br>");

var number = +prompt("Enter negative number:");
document.writeln("Number: " + number + "<br>");
document.writeln("Round off value: " + Math.round(number) + "<br>");
document.writeln("Floor value: " + Math.floor(number) + "<br>");
document.writeln("Ceil value: " + Math.ceil(number) + "<br>");

var number = +prompt("Enter a number to find absolute value:");
document.writeln("The absolute value of " + number + " is " + Math.abs(number) + "<br>");

var diceRoll = Math.floor(Math.random() * 6) + 1;
console.log("Dice rolled: " + diceRoll);

var toss = Math.random() < 0.5 ? "Heads" : "Tails";
console.log("Coin tossed: " + toss);

console.log("Random number between 1 and 100: " + Math.floor(Math.random() * 100) + 1);

var weight = prompt("Enter your weight in kilograms:");
document.writeln("Weight: " + parseFloat(weight) + "<br>");

var num = Math.floor(Math.random() * 10) + 1;
if(prompt("Guess the number (between 1 and 10):") == num) {
    document.writeln("Congratulations! You guessed the right number: " + num + "<br>");
} else {
    document.writeln("Sorry! The correct number was: " + num + "<br>");
}