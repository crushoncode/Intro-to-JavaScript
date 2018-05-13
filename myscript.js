
// ✦ create variables and display them

/* 1. Create two empty variables named animalName and animalNoise
2. Assign them appropriate values.
3. Display them each using alert() */

var animalName;
var animalNoise;

animalName = "Cat";
animalNOise = "Neoh-ong";
alert('animalName');

var message = 'Say "Hello" to my little friend.';
var warning = "Don't swim here.  There are sharks!";

// ✦ include arithmetical operators

/* 1. Create 3 variables:
1st variable named ten with value 10 inside
2nd variable named three with value 3
3rd variable named multipleOfNumbers that will be equal to 1st variable multiplied by the 2nd variable.
2. As a result, display the value of multipleOfNumbers. */

var sumOfNumbers = 1 + 3;
alert(sumOfNumbers);

var num1 = 10;
var num2 = 3;
var multipleOfNumbers = num1 * num2;
alert(multipleOfNumbers);

// ✦ create a function 

function functionName(argument) {
    // Performing an operation
    var double = argument * 2;
    // Returning a value
    return double;
};

functionName(10);
console.log(functionName(10));

/* 1. Create a function to add multiple numbers.
Name it add and pass in two arguments (num1 and num2). To pass multiple arguments into function we separate them with a comma.
This function should return us a sum of num1 and num2.
Call the function passing 2 numbers that you prefer as arguments.
Log the result to see it. (Console.log())
2. Create a function to subtract numbers from each other.
Name it subtract and pass in two arguments (num1 and num2)
This function should return us a subtraction of num1 and num2.
Call the function passing 2 numbers that you prefer as arguments.
Log the result to see it. (Console.log())
3. Instead of numbers to pass as arguments, create variables that store those numbers and pass them as an arguments to your function. Call your function and log your result. */

function add(num1, num2) {
    var result = num1 + num2;
    return result;
};
add(1, 3);
console.log(add(1, 3));

function substract(num1, num2) {
var result = num1 - num2;
    return result; 
};

substract(5,2);
console.log(substract(5,2));


var num1 = 5;
var num2 = 2;

substract(num1, num2)
console.log(substract(num1, num2))
