w// Syntax
do {
    // code to run (always runs at least once)
} while (condition);

// Difference from while:
// while: checks condition FIRST, then runs
// do/while: runs FIRST, then checks condition



// Example 1: Run at least once
let count = 10;
do {
    console.log(`Count: ${count}`);
    count++;
} while(count <= 5);
// Output: Count: 10 (runs once even though condition is false)

// Example 2: Menu system
let choice;
do {
    console.log("=== MENU ===");
    console.log("1. Start Game");
    console.log("2. Settings");
    console.log("3. Exit");
    choice = parseInt(prompt("Enter your choice:"));
    
    switch(choice) {
        case 1:
            console.log("Game started! ");
            break;
        case 2:
            console.log("Settings opened ");
            break;
        case 3:
            console.log("Goodbye! ");
            break;
        default:
            console.log("Invalid choice!");
    }
} while(choice !== 3);

// Example 3: Input validation
let age;
do {
    age = parseInt(prompt("Enter your age (18-100):"));
    if(isNaN(age) || age < 18 || age > 100) {
        console.log("Invalid age! Please enter between 18 and 100");
    }
} while(isNaN(age) || age < 18 || age > 100);
console.log(`Valid age: ${age} `);


// Real-World Examples

// 1. ATM PIN verification
let pin;
let attempts3 = 3;

do {
    pin = prompt("Enter your 4-digit PIN:");
    if(pin !== "1234") {
        attempts3--;
        console.log(`Wrong PIN! ${attempts3} attempts left`);
    }
} while(pin !== "1234" && attempts3 > 0);

if(pin === "1234") {
    console.log("PIN accepted! ✅");
} else {
    console.log("Card blocked! ❌");
}

// 2. Shopping cart checkout
let cartTotal = 0;
let addMore;

do {
    let price = parseFloat(prompt("Enter item price:"));
    if(!isNaN(price)) {
        cartTotal += price;
        console.log(`Added $${price}. Total: $${cartTotal}`);
    }
    addMore = prompt("Add more items? (yes/no):").toLowerCase();
} while(addMore === "yes");

console.log(`Final total: $${cartTotal}. Thank you for shopping! 🛒`);