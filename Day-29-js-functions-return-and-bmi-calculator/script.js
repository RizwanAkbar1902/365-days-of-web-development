// Day 29: Functions with Outputs & BMI Calculator Challenge
// 365 Days of Web Development

// ==========================================
// 1. Function Return Values (Outputs)
// ==========================================
function calculateRemainingDays(age) {
    const maxAge = 90;
    let yearsRemaining = maxAge - age;
    let daysRemaining = yearsRemaining * 365;
    return daysRemaining;
}

let daysLeft = calculateRemainingDays(20);
console.log("Days remaining until 90:", daysLeft);

// ==========================================
// 2. BMI Calculator Challenge Solution
// ==========================================
// Formula: BMI = weight (kg) / [height (m)]^2
function bmiCalculator(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}

// Example usage
let myBMI = bmiCalculator(65, 1.8); 
console.log("Calculated BMI:", myBMI); // Expected output: 20