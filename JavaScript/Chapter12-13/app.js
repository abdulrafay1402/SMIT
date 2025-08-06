// chapter 12-13

var char = prompt("Enter a character: ");
if (char.length === 1) {
    if (char >= 'a' && char <= 'z') {
        console.log("Lowercase letter");
    } else if (char >= 'A' && char <= 'Z') {
        console.log("Uppercase letter");
    } else {
        console.log("Not an alphabet character");
    }
} else {
    console.log("Please enter a single character.");
}

var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");

if (num1 === num2) {
    console.log("Both numbers are equal.");
} else if (num1 > num2) {
    console.log("First number is greater than second number.");
} else {
    console.log("First number is less than second number.");
}

var num = prompt("Enter a number: ");
if(num > 0) {
    console.log("Positive number");
} else if(num < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");    
}

var char = prompt("Enter a character: ");
if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||
   char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
    console.log("True");
} else {
    console.log("False");
}

var password = prompt("Enter your password: ");
if (password === null || password.trim() === "") {
    console.log("Please enter a valid password.");
} else if (password == "abc123") {
    console.log("Correct password");
} else {
    console.log("Incorrect password");
}

var greeting ;
var hours = 13;
if (hours < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}

var time = prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM): ");

if (time >= 0 && time < 1200) {
    console.log("Good morning");
} else if (time >= 1200 && time < 1700) {
    console.log("Good afternoon");
} else if (time >= 1700 && time < 2100) {
    console.log("Good evening");
} else if (time >= 2100 && time < 2400) {
    console.log("Good night");
}