// // chapter 9-11
var city = prompt("Enter your city");
city = city.toLowerCase();
if(city == "karachi"){
    document.writeln("Welcome to the City Of Lights");
}

var gender = prompt("Enter Your Gender");
var message = " Hello User";
if(gender === "male") {
    message = "GoodMorning Sir";
}
if(gender === "female") {
    message = "GoodMorning Ma'am";
}
alert(message);

var input = prompt("Enter a Color");
input = input.toLowerCase();
if(input == "red") {
    document.writeln("Must Stop");
}
if(input == "yellow") {
    document.writeln("Ready to Move");
}
if(input == "green") {
    document.writeln("Move Now");
}

var fuel = prompt(" Enter remaining Fuel");
fuel = parseFloat(fuel);
if(fuel < 0.25) {
    document.writeln("Please refill the fuel in the Car");
}


console.log("=== Exercise 5: Testing Conditional Statements ===");

console.log("a. Testing pre-increment operator:");
var a = 4;
if (++a == 5) {
    alert("given condition for variable a is true");
    console.log("✓ Alert displayed: given condition for variable a is true");
} else {
    console.log("✗ No alert displayed");
}

console.log("b. Testing post-increment operator:");
var b = 82;
if (b++ == 83) {
    alert("given condition for variable b is true");
    console.log("✓ Alert displayed: given condition for variable b is true");
} else {
    console.log("✗ No alert displayed (expected - post-increment uses current value)");
}

console.log("c. Testing multiple conditions:");
var c = 12;
if (c == 13) {
    alert("condition 1 is true");
    console.log("✓ Alert displayed: condition 1 is true");
}
if (c == 13) {
    alert("condition 2 is true");
    console.log("✓ Alert displayed: condition 2 is true");
}
if (c < 14) {
    alert("condition 3 is true");
    console.log("✓ Alert displayed: condition 3 is true");
}
if (c == 14) {
    alert("condition 4 is true");
    console.log("✓ Alert displayed: condition 4 is true");
}

console.log("d. Testing arithmetic operations:");
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost == laborCost + materialCost) {
    alert("The cost equals");
    console.log("✓ Alert displayed: The cost equals");
} else {
    console.log("✗ No alert displayed");
}

console.log("e. Testing boolean conditions:");
if (true) {
    alert("True");
    console.log("✓ Alert displayed: True");
}
if (false) {
    alert("False");
    console.log("✓ Alert displayed: False");
} else {
    console.log("✗ No alert displayed for false condition (expected)");
}

if("car" < "cat") {
    alert("car is smaller than cat");
    console.log("✓ Alert displayed: car is smaller than cat");
}

console.log("\n=== Exercise 6: Grade Calculation Program ===");
function calculateGrade() {
    var subject1 = parseFloat(prompt("Enter marks obtained in Subject 1:"));
    var subject2 = parseFloat(prompt("Enter marks obtained in Subject 2:"));
    var subject3 = parseFloat(prompt("Enter marks obtained in Subject 3:"));
    var totalMarks = parseFloat(prompt("Enter total marks:"));

    var marksObtained = subject1 + subject2 + subject3;
    var percentage = (marksObtained / totalMarks) * 100;

    var grade, remarks;

    if (percentage >= 80) {
        grade = "A-one";
        remarks = "Excellent";
    } else if (percentage >= 70) {
        grade = "A";
        remarks = "Good";
    } else if (percentage >= 60) {
        grade = "B";
        remarks = "You need to improve";
    } else {
        grade = "Fail";
        remarks = "Sorry";
    }

    var marksSheet = `
        <div style="border: 2px solid #333; padding: 20px; margin: 20px; background-color: #f9f9f9;">
            <h2 style="text-align: center; color: #333;">Marks Sheet</h2>
            <p><strong>Total marks:</strong> ${totalMarks}</p>
            <p><strong>Marks obtained:</strong> ${marksObtained}</p>
            <p><strong>Percentage:</strong> ${percentage.toFixed(1)}%</p>
            <p><strong>Grade:</strong> ${grade}</p>
            <p><strong>Remarks:</strong> ${remarks}</p>
        </div>
    `;

    document.writeln(marksSheet);

    console.log("=== Marks Sheet ===");
    console.log("Total marks:", totalMarks);
    console.log("Marks obtained:", marksObtained);
    console.log("Percentage:", percentage.toFixed(1) + "%");
    console.log("Grade:", grade);
    console.log("Remarks:", remarks);
}

calculateGrade();


var number = 7;
var guess = parseInt(prompt("Enter your guess (1-10):"));

while(guess !== number) {
    if(guess === number + 1 || guess === number - 1) {
        alert("Close enough to the correct answer!");
    } else if(guess > number) {
        alert("Too High!");
    } else if(guess < number) {
        alert("Too Low!");
    }

    guess = parseInt(prompt("Enter your guess closer to the number:"));
}

document.writeln("Bingo! You guessed right!");


var num = prompt("Enter a number")
num = parseInt(num);
if(num % 3 == 0) document.writeln("Num is Divisible by 3")

var num = prompt("Enter a number");
num = parseInt(num);
if (num & 1) {
    document.writeln("Number is Odd");
} else {
    document.writeln("Number is Even");
}

var temp = prompt("Enter Temperature");
if(temp > 40) {
    document.writeln("It is too hot outside.");
} else if(temp > 30) {
    document.writeln("The Weather today is Normal.");
} else if(temp > 20) {
    document.writeln("Today's Weather is Cool.");
} else if(temp > 10) {
    document.writeln("OMG! Today's weather is so Cool.");
}

var num1 = prompt("Enter First Number");
var num2 = prompt("Enter Second Number");
var operator = prompt("Enter Operator");    

if(operator == "+") {
    document.writeln(num1 + " + " + num2 + " = " + (num1 + num2));
}
if(operator == "-") {
    document.writeln(num1 + " - " + num2 + " = " + (num1 - num2));
}
if(operator == "*") {
    document.writeln(num1 + " * " + num2 + " = " + (num1 * num2));
}
if(operator == "/") {
    document.writeln(num1 + " / " + num2 + " = " + (num1 / num2));
}
if(operator == "%") {
    document.writeln(num1 + " % " + num2 + " = " + (num1 % num2));
}
