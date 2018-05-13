
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

// ✦ create an if/else statement using comparison operators


var number = 7;
if (number > 7) {
    console.log('High!');
} else if (number < 7) {
    console.log('Low!');
} else {
    console.log('You guessed our number.');
}; 

/* 1. We have 2 functions from the previous task - add and subtract. Let’s tell the machine to decide what action to run depending on the arithmetical operator(+,-,/, * etc). If the operator is ‘+’, we should use the add function, else we should use the subtract function.
Create a variable called operator and let it be equal to ‘-‘.
Create an if/else statement based on what operator we have. If we have an operator equal to ‘+’, we call add function with any two numbers, else the subtract function with any 2 numbers.
Log your result. (Console.log())
2. Create 2 more functions and name them divide and multiply. After that let’s extend our ‘if else’ check that we already created by checking if it is equal to ‘/’, call ‘divide’ function. If it is ‘*’, call multiply function, else log this message: “Sorry, we don’t know this operator” on the console. */

var operator = '-';

if (operator == '+') {
    console.log(add(3,2));
}
    else {
    console.log(substract(3,2));
};

function divide(num1, num2) {
    var result = num1 / num2;
    return result;
};

function multiply(num1, num2) {
    var result = num1 * num2;
    return result;
};

var operator = '/';

if (operator == '/') {
    console.log(divide(6,2));
} else if (operator == '*') {
    console.log(multiply(1,2));
} else {
    console.log("Sorry, we don't know this operator");
};

// ✦ Array excercise 

var randomThings = [2, 'book', 'today is Saturday', 10];
console.log(randomThings.length);

var randomThings = [2, 'book', 'today is Saturday', 10];
var firstItem = randomThings[0];
console.log(firstItem)
var secondItem = randomThings[1];
console.log(secondItem) 

var animals = ['cat', 'dog', 'horse'];
// let's replace 'dog' with 'fish'
animals[1] = 'fish';
console.log(animals); // Now our animals array will be ['cat', 'fish', 'horse']

var animals = ['cat', 'dog', 'horse'];
animals.push('rabbit');
console.log(animals); // animals will be ['cat', 'dog', 'horse', 'rabbit']

/* 1. Create your own array, named favouriteFood, and write in a couple of things you like.
2. Check how many values you have in your array favouriteFood. Log the result (console.log())
3. Get third element from your array favouriteFood and print on the console.
4. Take your array favouriteFood and replace the first value with anything else. Log the whole array to check.(Don’t forget, index positions start from 0!)
5. Let’s extend your list of favouriteFood and add one more value to it. console.log list your favouriteFood and check it. */

// start in lowercase, can do "favouritefood", but better to distinguish with "favouriteFood" 
var favouriteFood = ['kimchi stew', 'dimsum', 'bbq'];
console.log(favouriteFood.length);   

var thirdItem = favouriteFood[2];
console.log(thirdItem);

console.log(favouriteFood[2]);

favouriteFood[0] = 'gamjatang';
console.log(favouriteFood);

favouriteFood.push('soy bean stew');
console.log(favouriteFood)

