// Syntax
if (condition) {
    // runs if true
} else {
    // runs if false
}

// Example 1: Even or odd
let number = 7;
if (number % 2 === 0) {
    console.log(`${number} is even`);
} else {
    console.log(`${number} is odd`);
}
// Output: 7 is odd

// Example 2: Pass or fail
let marks = 65;
if (marks >= 60) {
    console.log("You passed! 🎉");
} else {
    console.log("You failed! 📚");
}
// Output: You passed! 🎉

// Example 3: Real-world - Discount eligibility
let isMember = true;
let purchaseAmount = 100;

if (isMember) {
    let discount = purchaseAmount * 0.2;
    console.log(`Member discount: $${discount}`);
} else {
    console.log("Join membership for 20% off!");
}