var FirstName = prompt("Enter your first name:");
var lastName = prompt("Enter your Last Name");
var fullName = FirstName + " " + lastName;
document.writeln("HI," + fullName + " , <br> Welcome to the JavaScript World!")

var PhoneMode = prompt("Enter you favourite phone model");
document.writeln("Your favourite phone model is: " + PhoneMode);
document.writeln("Length of your favourite phone model is: " + PhoneMode.length);

var nationality = "Pakistani";
document.writeln("the letter n is at index: " + nationality.indexOf("n"));

var greeting = "Hello World";
var LastIndexOfL;
for (var i = greeting.length - 1; i >= 0; i--) {
    if (greeting.charAt(i) === "l") {
        LastIndexOfL = i;
        break;
    }
}
document.writeln("The last index of 'l' in the greeting is: " + LastIndexOfL);

document.writeln("The character at index 3 is: " + nationality.charAt(3));

fullName = FirstName.concat(" " + lastName);
document.writeln("Full Name using concat is: " + fullName);

var city = "Hyderabad";
city = city.replace("Hyder", "Islam");
document.writeln("City after replacement is: " + city);

var message = "Ali and Sami are Best Friends . They play cricket and football together";
message = message.replaceAll("and", "&");
document.writeln("Message: " + message);

var num = "473";
document.writeln("Value: " + num + " Type: " + typeof (num));
num = parseInt(num);
document.writeln("Value: " + num + " Type: " + typeof (num));

var userInput = prompt("Enter a String");
document.writeln("UpperCase:" + userInput.toUpperCase());
document.writeln("Title Case : " + userInput.charAt(0).toUpperCase() + userInput.slice(1).toLowerCase());

num = 35.65;
num = num.toString().replace(".", "");

var UserName = prompt("Enter userName");
var IsCorrect = false;
while (UserName === "" || UserName === null) {
    if (UserName.includes("!") || UserName.includes(",") || UserName.includes(".") || UserName.includes("@")) {
        IsCorrect = false;
    }
    UserName = prompt("Invalid input. Please enter a valid userName:");
    if (IsCorrect) {
        break;
    }
}

var arr = ["cake", "apple pie", "cookie", "chip", "patties"]
var userSearch = prompt("Enter a snack to search for:").toLowerCase();
var isFound = false;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] === userSearch) {
        isFound = true;
        break;
    }
}
if (isFound) {
    document.writeln(userSearch + " is available in our bakery.");
} else {
    document.writeln("Sorry, " + userSearch + " is not available in our bakery.");
}

var Password = prompt("Enter your password");

if (Password.length >= 6) {
    if (!isNaN(Password[0])) {
        document.writeln("Password must not start with a number.");
    } else {
        var valid = true;

        for (var i = 0; i < Password.length; i++) {
            var ch = Password[i];
            if (
                !(ch >= 'A' && ch <= 'Z') &&
                !(ch >= 'a' && ch <= 'z') &&
                !(ch >= '0' && ch <= '9')
            ) {
                valid = false;
                break;
            }
        }

        if (valid) {
            document.writeln("Password is valid!");
        } else {
            document.writeln("Password can only contain letters and numbers.");
        }
    }
} else {
    alert("Password must be at least 6 characters long.");
}

var Uni = "Karachi University";
var chars = Uni.split("");
console.log(chars);

var Con = "Pakistan";
document.writeln("Character at last: " + Con.charAt(Con.length - 1));

var st = "The quick brown fox jumps over the lazy dog".toLowerCase();
var count = 0;

for (var i = 0; i <= st.length - 3; i++) {
    if (st.slice(i, i + 3) === "the") count++;
}

document.writeln("Occurrences of 'the': " + count);
