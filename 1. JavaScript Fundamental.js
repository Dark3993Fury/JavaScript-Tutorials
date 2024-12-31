// JavaScript Fundamentals: Basic Syntax and Statements

// =======================
// 1. VARIABLES
// =======================
// Variables are containers for storing data. There are three ways to declare variables: var, let, and const.

// (a) Using "var" (function-scoped, can be redeclared)
var age = 25; // Declaring a variable
console.log("Age using var:", age);

// (b) Using "let" (block-scoped, cannot be redeclared)
let name = "Alice"; // Declaring a block-scoped variable
console.log("Name using let:", name);

// (c) Using "const" (block-scoped, immutable)
const birthYear = 1998; // Declaring a constant
console.log("Birth Year using const:", birthYear);

// =======================
// 2. DATA TYPES
// =======================
// JavaScript supports different data types, such as string, number, boolean, object, and array.

// (a) String (text data)
let greeting = "Hello, World!";
console.log("String example:", greeting);

// (b) Number (integer or decimal)
let temperature = 36.6;
console.log("Number example:", temperature);

// (c) Boolean (true or false)
let isJavaScriptFun = true;
console.log("Boolean example:", isJavaScriptFun);

// (d) Object (key-value pairs)
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};
console.log("Object example:", person);

// (e) Array (ordered list of values)
let colors = ["red", "blue", "green"];
console.log("Array example:", colors);

// =======================
// 3. OPERATORS
// =======================
// Operators are used to perform operations on variables and values.

// (a) Arithmetic Operators
let x = 10;
let y = 3;
console.log("Addition:", x + y);
console.log("Subtraction:", x - y);
console.log("Multiplication:", x * y);
console.log("Division:", x / y);
console.log("Modulus (Remainder):", x % y);

// (b) Relational (Comparison) Operators
console.log("Equal to:", x == y); // false
console.log("Not equal to:", x != y); // true
console.log("Greater than:", x > y); // true
console.log("Less than or equal to:", x <= y); // false

// (c) Logical Operators
let a = true;
let b = false;
console.log("Logical AND:", a && b); // false
console.log("Logical OR:", a || b); // true
console.log("Logical NOT:", !a); // false

// =======================
// PRACTICAL EXAMPLES
// =======================

// Example 1: Calculate the area of a rectangle
let length = 5;
let width = 4;
let area = length * width;
console.log("Area of the rectangle:", area);

// Example 2: Check if a number is even or odd
let number = 7;
if (number % 2 === 0) {
  console.log(number + " is even.");
} else {
  console.log(number + " is odd.");
}

// Example 3: Manipulating an object
person.job = "Software Developer"; // Adding a new property
console.log("Updated Person Object:", person);

// Example 4: Loop through an array
for (let i = 0; i < colors.length; i++) {
  console.log("Color:", colors[i]);
}

// Example 5: Logical conditions
if (isJavaScriptFun && age > 20) {
  console.log("JavaScript is fun and you are over 20!");
}

// JavaScript Fundamentals: Control Structures and Functions

// =======================
// 1. CONTROL STRUCTURES
// =======================

// (a) CONDITIONALS

// Using "if" and "else"
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 75) {
  console.log("Grade: B");
} else {
  console.log("Grade: C");
}

// Using "switch"
let day = 3; // Represents Wednesday
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Invalid day");
}

// (b) LOOPS

// Using "for" loop
for (let i = 1; i <= 5; i++) {
  console.log("Number:", i);
}

// Using "while" loop
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++;
}

// Using "do-while" loop
let num = 5;
do {
  console.log("Number is:", num);
  num--;
} while (num > 0);

// =======================
// 2. FUNCTIONS
// =======================

// (a) Function Declarations
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("Alice");

// (b) Function Expressions
const square = function (x) {
  return x * x;
};
console.log("Square of 4:", square(4));

// (c) Arrow Functions
const multiply = (a, b) => a * b;
console.log("Multiplication result:", multiply(3, 7));

// (d) Parameters and Return Values
function calculateArea(length, width) {
  return length * width;
}
let area = calculateArea(6, 4);
console.log("Area of rectangle:", area);

// (e) Scope

// Example of Block Scope
{
  let blockScopedVariable = "I am block scoped";
  console.log(blockScopedVariable);
}
// console.log(blockScopedVariable); // This would throw an error

// (f) Closures
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable:", outerVariable);
    console.log("Inner Variable:", innerVariable);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside"); // Demonstrates closure

// =======================
// PRACTICAL EXAMPLES
// =======================

// Example 1: Using a loop to calculate the sum of numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log("Sum of numbers from 1 to 10:", sum);

// Example 2: Using a function to find the maximum value in an array
function findMax(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
console.log("Max value in [2, 8, 1, 5]:", findMax([2, 8, 1, 5]));

// Example 3: A program to greet based on the time of day
const greetBasedOnTime = (hour) => {
  if (hour < 12) {
    console.log("Good Morning");
  } else if (hour < 18) {
    console.log("Good Afternoon");
  } else {
    console.log("Good Evening");
  }
};
greetBasedOnTime(14);

// =======================
// CONCLUSION
// =======================
// This section introduced fundamentals of JavaScript with examples.

