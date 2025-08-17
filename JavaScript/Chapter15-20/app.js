var Array2D=[[]];
Array2D[0][0]=1;
Array2D[0][1]=2;
Array2D[1]=[3,4];
Array2D[2]=[5,6,7];

console.log(Array2D);


var MultiArray = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

for(var i = 0 ;i < 10;i++){
    console.log(i + 1);
}

var num = +prompt("Enter a number to display its multiplication table:");
var length = +prompt("Enter the length of the multiplication table:");

for(var i = 1; i <= length; i++){
    console.log(num + " x " + i + " = " + (num * i));
}

var fruits = ["apple", "banana", "mango", "orange"];

for (var fruit of fruits) {
    console.log( fruit);
}

for (var i = 0; i < fruits.length; i++) {
    console.log("Element " + i + ": " + fruits[i]);
}

for(var i = 0; i < 15; i++){
    console.log(i);
}
for(var i = 10; i > 0; i--){
    console.log(i);
}

for(var i = 0; i < 10; i++){
    console.log(i * 2);
}
for(var i = 1; i < 19; i+=2){
    console.log(i);
}
for(var i = 0; i < 10; i++){
    console.log(i * 2 +"k ");
}

var SearchinArray = function(array, element) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return true;
        }
    }
    return false;
};

var A = ["cake", "apple pie", "cookie" , "chips" , "patties"];
console.log(SearchinArray(A, prompt("Enter a snack to search for:")));

var MaximumInArray = function(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
};

var B = [5, 3, 8, 1, 4];
console.log(MaximumInArray(B));

var MinimumInArray = function(array) {
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
};

var C = [5, 3, 8, 1, 4];
console.log(MinimumInArray(C));

for(var i = 0; i < 100; i++){
    if(i % 5 === 0){
        console.log(i);
    }
}
