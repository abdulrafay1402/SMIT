// Chapter 31
var currentDate = new Date();
console.log("Current Date: " + currentDate);

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log("Current MONTH: " + monthNames[currentDate.getMonth()]);

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log("Current DAY: " + dayNames[currentDate.getDay()]);

// Weekend check (Fun day)
if (currentDate.getDay() === 0 || currentDate.getDay() === 6) {
    console.log("It's Fun day");
}

// First / last half of month
if (currentDate.getDate() < 16) {
    console.log("First fifteen days of the month");
} else {
    console.log("Last days of the month");
}

// Chapter 32
console.log("Current Date: " + currentDate);
console.log("Elapsed milliseconds since January 1, 1970: " + currentDate.getTime());
console.log("Elapsed minutes since January 1, 1970: " + (currentDate.getTime() / (1000 * 60)));

if (currentDate.getHours() < 12) {
    console.log("It's AM");
} else {
    console.log("It's PM");
}

var laterDate = new Date("December 31, 2020");
console.log("Later Date: " + laterDate);

var RamazanDate = new Date("Feb 14, 2026");
var LeftRamazanDays = Math.ceil((RamazanDate - currentDate) / (1000 * 60 * 60 * 24));
console.log(LeftRamazanDays + " days left until Ramazan");

var referenceDate = new Date("Dec 5, 2015");
var diff = currentDate - referenceDate;
console.log("On reference date " + referenceDate + ", " + Math.floor(diff / (1000 * 60)) + " minutes had passed since beginning of 2015");

var currentDateTime = new Date();
console.log("Current Date: " + currentDateTime);    
currentDateTime.setHours(currentDateTime.getHours() - 1);
console.log("1 hour ago, it was " + currentDateTime);

var hundredYearsAgo = new Date();
hundredYearsAgo.setFullYear(hundredYearsAgo.getFullYear() - 100);
alert("Current date:"+new Date() + "\n"+"100 years back, it was " + hundredYearsAgo);

var userAge = prompt("Enter your age:");
var birthYear = currentDate.getFullYear() - parseInt(userAge);
console.log("Your age is: " + userAge);
console.log("Your birth year is: " + birthYear);

var customerName = "John Doe";
var currentMonth = monthNames[currentDate.getMonth()];
var numberOfUnits = 410;
var currentRate = 16;
var netAmount = numberOfUnits * currentRate;
var latePaymentSurcharge = 350;
var grossAmount = netAmount + latePaymentSurcharge;
console.log("K-Electric Bill");
console.log("Customer Name: " + customerName);
console.log("Current Month: " + currentMonth);
console.log("Number of units: " + numberOfUnits);
console.log("Current rate: " + currentRate);
console.log("Net Amount Payable (within Due Date): " + netAmount);
console.log("Late Payment Surcharge: " + latePaymentSurcharge);
console.log("Gross Amount Payable (after Due Date): " + grossAmount);
