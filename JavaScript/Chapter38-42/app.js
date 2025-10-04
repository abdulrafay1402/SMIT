// Assignment 38-44: FUNCTIONS, SWITCH, WHILE... DO-WHILE LOOPS

// 1. Custom power function
function power(a, b) {
    if (b === 0) return 1;
    return a * power(a, b - 1);
}

// 2. Check leap year
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return year + " is a leap year";
    } else {
        return year + " is not a leap year";
    }
}

// 3. Calculate area of triangle
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateTriangleArea(a, b, c) {
    const S = calculateS(a, b, c);
    const area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
    return area;
}

// 4. Calculate average and percentage
function calculateAverage(marks1, marks2, marks3) {
    return (marks1 + marks2 + marks3) / 3;
}

function calculatePercentage(marks1, marks2, marks3) {
    const totalMarks = 300; // Assuming each subject is out of 100
    return ((marks1 + marks2 + marks3) / totalMarks) * 100;
}

function mainFunction(marks1, marks2, marks3) {
    const avg = calculateAverage(marks1, marks2, marks3);
    const percentage = calculatePercentage(marks1, marks2, marks3);
    
    document.writeln("<h3>Student Results:</h3>");
    document.writeln("Marks: " + marks1 + ", " + marks2 + ", " + marks3 + "<br>");
    document.writeln("Average: " + avg.toFixed(2) + "<br>");
    document.writeln("Percentage: " + percentage.toFixed(2) + "%<br><br>");
}

// 5. Custom indexOf function
function customIndexOf(str, char) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            return i;
        }
    }
    return -1;
}

// 6. Delete all vowels from sentence
function deleteVowels(sentence) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let result = '';
    for (let i = 0; i < sentence.length; i++) {
        if (!vowels.includes(sentence[i])) {
            result += sentence[i];
        }
    }
    return result;
}

// 7. Count vowels in succession using switch
function countSuccessiveVowels(text) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    let pairs = [];
    
    for (let i = 0; i < text.length - 1; i++) {
        let isVowel1 = false;
        let isVowel2 = false;
        
        switch(text[i].toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                isVowel1 = true;
                break;
        }
        
        switch(text[i + 1].toLowerCase()) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                isVowel2 = true;
                break;
        }
        
        if (isVowel1 && isVowel2) {
            count++;
            pairs.push(text[i] + text[i + 1]);
        }
    }
    
    return { count: count, pairs: pairs };
}

// 8. Convert distance to different units
function toMeters(km) {
    return km * 1000;
}

function toFeet(km) {
    return km * 3280.84;
}

function toInches(km) {
    return km * 39370.1;
}

function toCentimeters(km) {
    return km * 100000;
}

// 9. Calculate overtime pay
function calculateOvertimePay(hoursWorked) {
    if (hoursWorked <= 40) {
        return 0;
    }
    const overtimeHours = hoursWorked - 40;
    return overtimeHours * 12;
}

// 10. Currency notes calculator
function calculateNotes(amount) {
    const hundreds = Math.floor(amount / 100);
    const remaining = amount % 100;
    const fifties = Math.floor(remaining / 50);
    const tens = Math.floor((remaining % 50) / 10);
    
    return {
        hundreds: hundreds,
        fifties: fifties,
        tens: tens
    };
}

// Execute all functions
document.writeln("<h3>Question 1:</h3>");
document.writeln("2^3 = " + power(2, 3) + "<br><br>");

document.writeln("<h3>Question 2:</h3>");
document.writeln(isLeapYear(2020) + "<br>");
document.writeln(isLeapYear(2021) + "<br><br>");

document.writeln("<h3>Question 3:</h3>");
document.writeln("Area of triangle (sides 3, 4, 5): " + calculateTriangleArea(3, 4, 5).toFixed(2) + "<br><br>");

document.writeln("<h3>Question 4:</h3>");
mainFunction(85, 90, 78);

document.writeln("<h3>Question 5:</h3>");
document.writeln("Index of 'o' in 'hello': " + customIndexOf('hello', 'o') + "<br><br>");

document.writeln("<h3>Question 6:</h3>");
const testSentence = "This is a test sentence";
document.writeln("Original: " + testSentence + "<br>");
document.writeln("Without vowels: " + deleteVowels(testSentence) + "<br><br>");

document.writeln("<h3>Question 7:</h3>");
const text = "Pleases read this application and give me gratuity";
const result = countSuccessiveVowels(text);
document.writeln("Text: " + text + "<br>");
document.writeln("Successive vowel pairs: " + result.pairs.join(', ') + "<br>");
document.writeln("Count: " + result.count + "<br><br>");

document.writeln("<h3>Question 8:</h3>");
const distance = 5;
document.writeln(distance + " km = " + toMeters(distance) + " meters<br>");
document.writeln(distance + " km = " + toFeet(distance).toFixed(2) + " feet<br>");
document.writeln(distance + " km = " + toInches(distance).toFixed(2) + " inches<br>");
document.writeln(distance + " km = " + toCentimeters(distance) + " centimeters<br><br>");

document.writeln("<h3>Question 9:</h3>");
const hours = 45;
document.writeln("Hours worked: " + hours + "<br>");
document.writeln("Overtime pay: Rs. " + calculateOvertimePay(hours) + "<br><br>");

document.writeln("<h3>Question 10:</h3>");
const withdrawAmount = 470;
const notes = calculateNotes(withdrawAmount);
document.writeln("Amount: " + withdrawAmount + "<br>");
document.writeln("100s: " + notes.hundreds + "<br>");
document.writeln("50s: " + notes.fifties + "<br>");
document.writeln("10s: " + notes.tens + "<br>");