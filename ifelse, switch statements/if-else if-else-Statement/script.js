// Syntax
if (condition1) {
    // runs if condition1 is true
} else if (condition2) {
    // runs if condition1 false AND condition2 true
} else if (condition3) {
    // runs if previous false AND condition3 true
} else {
    // runs if all conditions false
}

// Example 1: Grade calculator
let score = 85;

if (score >= 90) {
    console.log("Grade: A+ 🏆");
} else if (score >= 80) {
    console.log("Grade: A 📚");
} else if (score >= 70) {
    console.log("Grade: B 👍");
} else if (score >= 60) {
    console.log("Grade: C 📖");
} else {
    console.log("Grade: F ❌ Need improvement");
}
// Output: Grade: A 📚

// Example 2: Time of day greeting
let hour = 14; // 2 PM

if (hour < 12) {
    console.log("Good morning! 🌅");
} else if (hour < 17) {
    console.log("Good afternoon! ☀️");
} else if (hour < 21) {
    console.log("Good evening! 🌆");
} else {
    console.log("Good night! 🌙");
}
// Output: Good afternoon! ☀️

// Example 3: Traffic light
let lightColor = "yellow";

if (lightColor === "red") {
    console.log("STOP! 🛑");
} else if (lightColor === "yellow") {
    console.log("READY to stop! ⚠️");
} else if (lightColor === "green") {
    console.log("GO! 🟢");
} else {
    console.log("Invalid color!");
}
// Output: READY to stop! ⚠️