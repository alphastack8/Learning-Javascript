// Example 1: User access system
let isLoggedIn = true;
let userRole = "admin";

if (isLoggedIn) {
    console.log("User is logged in");
    
    if (userRole === "admin") {
        console.log("Welcome Admin! You have full access");
        console.log("✓ Can delete users");
        console.log("✓ Can edit settings");
    } else if (userRole === "editor") {
        console.log("Welcome Editor! You can edit content");
    } else {
        console.log("Welcome! You can view content");
    }
} else {
    console.log("Please login first");
}

// Example 2: ATM withdrawal system
let balance = 5000;
let withdrawAmount = 2000;
let hasPIN = true;

if (hasPIN) {
    console.log("PIN verified ✓");
    
    if (withdrawAmount <= balance) {
        console.log(`Withdrawing $${withdrawAmount}`);
        balance -= withdrawAmount;
        console.log(`Remaining balance: $${balance}`);
    } else {
        console.log("Insufficient balance!");
    }
} else {
    console.log("Please enter your PIN");
}