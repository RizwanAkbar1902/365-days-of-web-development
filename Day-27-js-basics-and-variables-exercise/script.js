// Day 25: JS Alerts, Data Types & Variables Exercise

// 1. Adding Behaviour via Alert
// alert("Welcome to JavaScript ES6 Learning!");

// 2. Data Types Exploration
let message = "Hello, World!"; // String
let count = 42;                // Number
let isCompleted = true;        // Boolean
let unassignedVar;             // Undefined
let emptyObj = null;           // Null

console.log(typeof message);
console.log(typeof count);
console.log(typeof isCompleted);

// 3. Coding Exercise: Swapping Variables (Angela Yu Exercise)
function testVariableSwap() {
    let a = "3";
    let b = "8";

    /*********** Do not change code above ***********/
    // Swapping logic using a temporary variable
    let c = a;
    a = b;
    b = c;
    /*********** Do not change code below ***********/

    console.log("a is " + a); // Expected: 8
    console.log("b is " + b); // Expected: 3
}

testVariableSwap();