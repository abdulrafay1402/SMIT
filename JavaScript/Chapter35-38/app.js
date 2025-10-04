// Assignment 35-38: FUNCTIONS

// 1. Display current date & time
function displayDateTime() {
    const now = new Date();
    document.writelnln("<h3>Question 1:</h3>");
    document.writelnln(now + "<br><br>");
}

// 2. Greet user with full name
function greetUser(firstName, lastName) {
    document.writelnln("<h3>Question 2:</h3>");
    document.writelnln("Hello " + firstName + " " + lastName + "!<br><br>");
}

// 3. Add two numbers
function addNumbers(num1, num2) {
    return num1 + num2;
}

// 4. Calculator
function calculator(num1, num2, operator) {
    let result;
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            return "Invalid operator";
    }
    return result;
}

function square(num) {
    return num * num;
}

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
}

function displayCounting(start, end) {
    document.writelnln("<h3>Question 7:</h3>");
    for (let i = start; i <= end; i++) {
        document.writelnln(i + " ");
    }
    document.writelnln("<br><br>");
}

function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
        return num * num;
    }
    const hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perpendicular));
    return hypotenuse;
}

// 9. Calculate area of rectangle
function calculateRectangleArea(width, height) {
    return width * height;
}

// 10. Check palindrome
function isPalindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str.toLowerCase() === reversed.toLowerCase();
}

// 11. Capitalize first letter of each word
function capitalizeWords(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
}

// 12. Find longest word
function findLongestWord(str) {
    const words = str.split(' ');
    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

// 13. Count letter occurrences
function countLetter(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

// 14. The Geometrizer
function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    document.writeln("The circumference is " + circumference.toFixed(2) + "<br>");
}

function calcArea(radius) {
    const area = Math.PI * radius * radius;
    document.writeln("The area is " + area.toFixed(2) + "<br>");
}

// Execute all functions
displayDateTime();

greetUser("John", "Doe");

document.writeln("<h3>Question 3:</h3>");
const sum = addNumbers(5, 10);
document.writeln("Sum: " + sum + "<br><br>");

document.writeln("<h3>Question 4:</h3>");
document.writeln("10 + 5 = " + calculator(10, 5, '+') + "<br>");
document.writeln("10 - 5 = " + calculator(10, 5, '-') + "<br>");
document.writeln("10 * 5 = " + calculator(10, 5, '*') + "<br>");
document.writeln("10 / 5 = " + calculator(10, 5, '/') + "<br><br>");

document.writeln("<h3>Question 5:</h3>");
document.writeln("Square of 4 = " + square(4) + "<br><br>");

document.writeln("<h3>Question 6:</h3>");
document.writeln("Factorial of 5 = " + factorial(5) + "<br><br>");

displayCounting(1, 10);

document.writeln("<h3>Question 8:</h3>");
document.writeln("Hypotenuse = " + calculateHypotenuse(3, 4) + "<br><br>");

document.writeln("<h3>Question 9:</h3>");
document.writeln("Area (as values): " + calculateRectangleArea(5, 10) + "<br>");
const width = 8, height = 6;
document.writeln("Area (as variables): " + calculateRectangleArea(width, height) + "<br><br>");

document.writeln("<h3>Question 10:</h3>");
document.writeln("Is 'madam' a palindrome? " + isPalindrome('madam') + "<br>");
document.writeln("Is 'hello' a palindrome? " + isPalindrome('hello') + "<br><br>");

document.writeln("<h3>Question 11:</h3>");
const text = 'the quick brown fox';
document.writeln("Original: " + text + "<br>");
document.writeln("Capitalized: " + capitalizeWords(text) + "<br><br>");

document.writeln("<h3>Question 12:</h3>");
const sentence = 'Web Development Tutorial';
document.writeln("String: " + sentence + "<br>");
document.writeln("Longest word: " + findLongestWord(sentence) + "<br><br>");

document.writeln("<h3>Question 13:</h3>");
const testStr = 'JSResourceS.com';
const testLetter = 'o';
document.writeln("String: " + testStr + "<br>");
document.writeln("Letter '" + testLetter + "' appears " + countLetter(testStr, testLetter) + " times<br><br>");

document.writeln("<h3>Question 14:</h3>");
calcCircumference(5);
calcArea(5);