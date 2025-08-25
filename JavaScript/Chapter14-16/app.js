var student = [];
student[0] = "Huxaifa"
student[1] = "Ali"
document.writeln(student[0] + "<br>");
document.writeln(student[1] + "<br>");

var students = [{ name: "huzaifa", age: 20 }, { name: "Ali", age: 22 } , {name :"xaryab" ,age : 19 }];

var stringArr = ["abc" , "bcd" , "efg"];
var NumberArr = [1,3,5,7];
var boolArr = [true, false, true];
var mixArr= ["abdulrafay" , 19 , "nuces" ,"software Engineering"]

var Qualifications = ["SSC" , "HSC" ,"BSC" , "BS" ,"BCOM" , "MS" , "MPHIL", "PHD"]

document.writeln("<h1>Qualifications</h1>");
for(var qua of Qualifications) {
    document.writeln(qua + "<br>");
}

var Names = ["Ahmed" , "Ali" , "Xaryab"]
var Scores = [400 , 500 , 300]

for(var i = 0; i < Names.length; i++) {
    document.writeln(Names[i] + " : " + Scores[i] + "<br>");
}


let colors = ["Red", "Green", "Blue", "Yellow", "Orange"];
document.writeln("Initial Array: " + colors + "<br>");


let colorBeg = prompt("Enter a color to add at the beginning:");
colors.unshift(colorBeg);
document.writeln("After adding at beginning: " + colors + "<br>");


let colorEnd = prompt("Enter a color to add at the end:");
colors.push(colorEnd);
document.writeln("After adding at end: " + colors + "<br>");


let color1 = prompt("Enter first color to add at the beginning:");
let color2 = prompt("Enter second color to add at the beginning:");
colors.unshift(color1, color2);
document.writeln("After adding two colors at beginning: " + colors + "<br>");


colors.shift();
document.writeln("After deleting first color: " + colors + "<br>");


colors.pop();
document.writeln("After deleting last color: " + colors + "<br>");

let indexAdd = +prompt("At which index do you want to add a color?");
let colorAtIndex = prompt("Enter the color name to add:");
colors.splice(indexAdd, 0, colorAtIndex);
document.writeln("After adding at index " + indexAdd + ": " + colors + "<br>");


let indexDel = +prompt("At which index do you want to delete color(s)?");
let numDel = +prompt("How many colors do you want to delete?");
colors.splice(indexDel, numDel);
document.writeln("After deleting " + numDel + " color(s) from index " + indexDel + ": " + colors + "<br>");

var StudentScore = [100 , 120 , 150 , 80 , 50 , 10]
Array.sort(StudentScore);
document.writeln("Sorted Scores: " + StudentScore + "<br>");

var CitiesList = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawar" , "Multan"]

var selectedCities =[]

for(var i = 0; i < CitiesList.length; i++) {
    if(CitiesList[i].startsWith("K")) {
        selectedCities.push(CitiesList[i]);
    }
}
document.writeln("Selected Cities: " + selectedCities + "<br>");

var arr = ["This", "is", "my", "cat"];
document.writeln(arr.join(" "));

var arr = ["keyBoard" , "mouse" , "monitor" , "CPU"]
for( var i= 0; i< arr.length; i++ ){
    arr.shift();
}


stack = [];
stack.push("Keyboard");
stack.push("Mouse");
stack.push("printer");
stack.push("monitor");
while(stack.length > 0) {
    console.log("Popped value:", stack.pop());
}

let manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
    document.writeln("<select>");
    for (let i = 0; i < manufacturers.length; i++) {
      document.writeln("<option>" + manufacturers[i] + "</option>");
    }
    document.writeln("</select>");

