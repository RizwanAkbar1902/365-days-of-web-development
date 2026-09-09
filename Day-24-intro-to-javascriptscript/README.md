// Day 24: JavaScript Basics - Variables & Data Types
// Author: Rizwan Akbar

// 1. Variable Declarations (var vs let vs const)
const studentName = "Rizwan Akbar"; // String (Immutable reference)
let currentAge = 20;               // Number
var isEnrolled = true;             // Boolean (Legacy declaration)

// 2. Core Primitive Data Types
let totalScore = 98.5;             // Number (Floating-point)
let graduationYear;                // Undefined (Declared but unassigned)
let emptyValue = null;             // Null (Intentional absence of value)
let uniqueId = Symbol("id");       // Symbol

// 3. Reassignment with 'let'
let learningTrack = "Frontend";
learningTrack = "Full Stack Web Development"; // Valid reassignment

// 4. Console Outputs & Type Checking
console.log("Student Name:", studentName, "| Type:", typeof studentName);
console.log("Current Age:", currentAge, "| Type:", typeof currentAge);
console.log("Is Enrolled:", isEnrolled, "| Type:", typeof isEnrolled);
console.log("Graduation Year:", graduationYear, "| Type:", typeof graduationYear);
console.log("Empty Value:", emptyValue, "| Type:", typeof emptyValue); // returns 'object' (JS quirk)
console.log("Learning Track:", learningTrack);