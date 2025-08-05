
// Chapter # 04


 var a = 5, b = 6 , c = 10 ;
 var  a , aB , AbC , _Abc , $ ;
// 3. var @a, 1st , var , if , @$;
// 
document.writeln("<h1>Rules of Naming Variables  </h1>");
document.writeln("<p>variable names can only contain letters , digits , underscore , dollar sign</p>");
document.writeln("<p>variable must begin with a alphabets , underscore or dollarsign Example : a , _a , $a</p> ");
document.writeln("<p>variable names are case sensitive</p> ");
document.writeln("<p>variable names should not be JS variables</p>");


// chapter # 05

var a = 5;
var b = 6;
var c = 10;

document.writeln("Sum of a , b , c is : " + (a + b + c));
document.writeln("<br>Subtraction    of a , b , c is : " + (a - b - c));
document.writeln("<br>Multiplication of a , b , c is : " + (a * b * c));
document.writeln("<br>Division of a , b , c is : " + (a / b / c));
document.writeln("<br>Modulus of a , b , c is : " + (a % b % c));

var x ;
document.writeln("x is : " + x);
x = 5;
document.writeln("<br>x is : " + x);
x++;
document.writeln("<br>x is : " + x);
x += 7;
document.writeln("<br>x is : " + x);
x -- ;
document.writeln("<br>x is : " + x);
x %= 3;
document.writeln("<br>x is : " + x);


var price = 600;
var quantity = 5;
var total = price * quantity;
document.writeln("<br>Total is : " + total);

var num = 5;
document.writeln("<br>Table of " + num + " is : ");
for(var i = 0; i < 10; i++){
    document.writeln("<br>" + i * num );
}

var tempCel = 30;
var tempFar = (tempCel * 9/5) + 32;
document.writeln("<br>Temperature in Fahrenheit is : " + tempFar);
var tempFar = 86;
var tempCel = (tempFar - 32) * 5/9;
document.writeln("<br>Temperature in Celsius is : " + tempCel);


var P1 = 100;   
var P2 = 50;
var Q1 = 10;
var Q2 = 20;
var Total = (P1 * Q1) + (P2 * Q2);
document.writeln("<br>Total is : " + Total);


var totalmarks = 500;
var obtainedmarks = 450;
var percentage = (obtainedmarks / totalmarks) * 100;
document.writeln("<br>Percentage is : " + percentage);

var dollar = 1 ;
var riyal = 10;
var pkr = dollar * 104.8 + riyal * 28;
document.writeln("<br>PKR is : " + pkr);

var temp = 2;
temp += 5 * 10 / 2;
document.writeln("<br>Temp is : " + temp);

var Cy = 2025;
var BY = 2013;
var age = Cy - BY;
document.writeln("<br>Age might be  : " + age + "Or " + (age - 1));


var rad = 4;
var area = Math.PI * rad * rad;
document.writeln("<br>Area is : " + area);
var vol = 4/3 * Math.PI * rad * rad * rad;
document.writeln("<br>Volume is : " + vol);


document.writeln("<h1>The Lifetime Supply Calculator</h1>");

var favouriteSnack = "chocolate chip";
var currentAge = 15;
var estimatedMaxAge = 65;
var snacksPerDay = 3;

document.writeln("Favourite Snack: " + favouriteSnack);
document.writeln("<br>Current age: " + currentAge);
document.writeln("<br>Estimated Maximum Age: " + estimatedMaxAge);
document.writeln("<br>Amount of snacks per day: " + snacksPerDay);

var yearsLeft = estimatedMaxAge - currentAge;
var totalSnacks = yearsLeft * 365 * snacksPerDay;


document.writeln("<br>You will need " + totalSnacks + " " + favouriteSnack + " to last you until the ripe old age of " + estimatedMaxAge);

// chapter # 6-9

document.writeln("<h1>Increment and Decrement Operators Demo</h1>");

var a = 10;
document.writeln("The value of a is: " + a);

document.writeln("<br>The value of ++a is: " + (++a));
document.writeln("<br>Now the value of a is: " + a);

document.writeln("<br>The value of a++ is: " + (a++));
document.writeln("<br>Now the value of a is: " + a);

document.writeln("<br>The value of --a is: " + (--a));
document.writeln("<br>Now the value of a is: " + a);

document.writeln("<br>The value of a-- is: " + (a--));
document.writeln("<br>Now the value of a is: " + a);


document.writeln("<h1>Complex Expression Analysis</h1>");

var a = 2, b = 1;
document.writeln("Initial values: a = " + a + ", b = " + b);

document.writeln("<br><br>Step 1: --a");
document.writeln("Before: a = " + a);
--a;
document.writeln("After --a: a = " + a + " (value returned: " + a + ")");

document.writeln("<br><br>Step 2: --a - --b");
document.writeln("Before: a = " + a + ", b = " + b);
var step2 = a - (--b);
document.writeln("After --b: a = " + a + ", b = " + b);
document.writeln("Result of --a - --b: " + step2);

document.writeln("<br><br>Step 3: --a - --b + ++b");
document.writeln("Before: a = " + a + ", b = " + b);
var step3 = step2 + (++b);
document.writeln("After ++b: a = " + a + ", b = " + b);
document.writeln("Result of --a - --b + ++b: " + step3);

document.writeln("<br><br>Step 4: --a - --b + ++b + b--");
document.writeln("Before: a = " + a + ", b = " + b);
var result = step3 + b--;
document.writeln("After b--: a = " + a + ", b = " + b);
document.writeln("Final result: " + result);

document.writeln("<br><br>Final values:");
document.writeln("a = " + a);
document.writeln("<br>b = " + b);
document.writeln("<br>result = " + result);


let name = prompt("Enter your name:");
document.writeln("Hello, " + name + "!");

var num = prompt("Enter a number:");
num = parseInt(num);

if(!isNaN(num)){
    document.writeln("<h1>Table of " + num + "</h1>");
    for(var i = 1; i <= 10; i++){
        document.writeln("<br>" + num + " x " + i + " = " + (num * i));
    }
}else{
    document.writeln("<h1>Table of 5</h1>");
    for(var i = 1; i <= 10; i++){
        document.writeln("<br>5 x " + i + " = " + (5 * i));
    }
}


document.writeln("<h1>Student Marks Calculator</h1>");
var subject1 = prompt("Enter first subject name:");
var subject2 = prompt("Enter second subject name:");
var subject3 = prompt("Enter third subject name:");

var totalMarksPerSubject = 100;
var marks1 = parseInt(prompt("Enter obtained marks for " + subject1 + " (out of 100):"));
var marks2 = parseInt(prompt("Enter obtained marks for " + subject2 + " (out of 100):"));
var marks3 = parseInt(prompt("Enter obtained marks for " + subject3 + " (out of 100):"));
var totalObtainedMarks = marks1 + marks2 + marks3;
var totalPossibleMarks = totalMarksPerSubject * 3; 
var percentage = (totalObtainedMarks / totalPossibleMarks) * 100;

document.writeln("<h2>Subject Details:</h2>");
document.writeln("Subject 1: " + subject1 + " - " + marks1 + "/100");
document.writeln("<br>Subject 2: " + subject2 + " - " + marks2 + "/100");
document.writeln("<br>Subject 3: " + subject3 + " - " + marks3 + "/100");

document.writeln("<h2>Results:</h2>");
document.writeln("Total Obtained Marks: " + totalObtainedMarks + "/" + totalPossibleMarks);
document.writeln("<br>Percentage: " + percentage.toFixed(2) + "%");

alert("Total Marks: " + totalObtainedMarks + "/" + totalPossibleMarks + "\nPercentage: " + percentage.toFixed(2) + "%");




