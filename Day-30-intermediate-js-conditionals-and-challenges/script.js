// Day 30: Intermediate JavaScript - Conditionals, Math & Logic
// 365 Days of Web Development

// ==========================================
// 1. Random Number Generation (Love Calculator)
// ==========================================
function loveCalculator(name1, name2) {
    let loveScore = Math.floor(Math.random() * 100) + 1; // 1 - 100

    if (loveScore > 70) {
        return `${name1} and ${name2}'s score is ${loveScore}%. You love each other like Kanye loves Kanye!`;
    } else if (loveScore > 30 && loveScore <= 70) {
        return `${name1} and ${name2}'s score is ${loveScore}%. Solid connection!`;
    } else {
        return `${name1} and ${name2}'s score is ${loveScore}%. Like oil and water!`;
    }
}

console.log(loveCalculator("Alice", "Bob"));

// ==========================================
// 2. Advanced BMI Calculator (If-Else Interpretation)
// ==========================================
function bmiCalculatorAdvanced(weight, height) {
    let bmi = Math.round(weight / Math.pow(height, 2));

    if (bmi < 18.5) {
        return `Your BMI is ${bmi}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return `Your BMI is ${bmi}, so you have a normal weight.`;
    } else {
        return `Your BMI is ${bmi}, so you are overweight.`;
    }
}

console.log(bmiCalculatorAdvanced(68, 1.75));

// ==========================================
// 3. Leap Year Challenge
// ==========================================
// Rules: Divisible by 4, except divisible by 100, UNLESS also divisible by 400.
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return `${year} is a leap year.`;
            } else {
                return `${year} is not a leap year.`;
            }
        } else {
            return `${year} is a leap year.`;
        }
    } else {
        return `${year} is not a leap year.`;
    }
}

console.log(isLeapYear(2024)); // Leap year
console.log(isLeapYear(1900)); // Not a leap year
console.log(isLeapYear(2000)); // Leap year