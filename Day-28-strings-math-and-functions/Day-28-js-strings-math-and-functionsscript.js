// Day 28: JavaScript Strings, Arithmetic & Functions Practice
// 365 Days of Web Development

// ==========================================
// 1. String Manipulation & Casing Challenge
// ==========================================
let sampleText = "hello world";

// String Length
console.log("Length:", sampleText.length);

// Slicing Strings
let slicedWord = sampleText.slice(0, 5); // "hello"
console.log("Sliced Word:", slicedWord);

// Capitalize
let userName = "rIzWaN";
let firstChar = userName.slice(0, 1).toUpperCase();
let restOfName = userName.slice(1, userName.length).toLowerCase();
let capitalizedName = firstChar + restOfName;
console.log("Formatted Name:", capitalizedName); // Rizwan

// ==========================================
// 2. Arithmetic & Modulo Operations
// ==========================================
let dogAge = 4;
let humanAge = (dogAge - 2) * 4 + 21; // Dog to Human Age Formula
console.log("Human Equivalent Age:", humanAge);

// Modulo Operator (Remainder)
let remainder = 10 % 3;
console.log("10 % 3 =", remainder); // 1

// Increment & Decrement
let counter = 5;
counter++;
console.log("Incremented Counter:", counter); // 6
counter--;
console.log("Decremented Counter:", counter); // 5

// ==========================================
// 3. Functions (Creating, Calling, Parameters)
// ==========================================
// Basic Function
function greetUser() {
    console.log("Welcome to JavaScript function basics!");
}
greetUser();

// Function with Parameters and Arguments (Milk Bottle Example)
function getMilk(money, costPerBottle) {
    let bottles = Math.floor(money / costPerBottle);
    let change = money % costPerBottle;
    
    console.log("Buy " + bottles + " bottles of milk.");
    console.log("Remaining change: $" + change);
    return change;
}

getMilk(10, 3); // 3 bottles, $1 change