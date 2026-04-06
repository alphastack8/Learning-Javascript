// Syntax
while (condition) {
    // code to repeat while condition is true
}

// WARNING: Make sure condition becomes false eventually!
// Otherwise → infinite loop (crashes browser)


// Basic Examples

// Example 1: Count to 5
let count = 1;
while(count <= 5) {
    console.log(`Count: ${count}`);
    count++;  // IMPORTANT: increment or condition never becomes false
}
// Output: 1, 2, 3, 4, 5

// Example 2: Countdown
let timer = 5;
while(timer > 0) {
    console.log(`Time left: ${timer}`);
    timer--;
}
console.log("BOOM! ");

// Example 3: Keep asking until correct answer
let answer = "";
while(answer !== "yes") {
    answer = prompt("Say 'yes' to continue:");  // In browser
}
console.log("Thank you!");

// Example 4: Roll dice until you get 6
let dice = 0;
let rolls = 0;
while(dice !== 6) {
    dice = Math.floor(Math.random() * 6) + 1;
    rolls++;
    console.log(`Roll ${rolls}: ${dice}`);
}
console.log(`Got 6 after ${rolls} rolls! `);

// Real-World Examples
// 1. Bank balance until goal
let balance = 100;
let goal = 1000;
let months = 0;

while(balance < goal) {
    balance += 50;  // Save $50 each month
    months++;
    console.log(`Month ${months}: $${balance}`);
}
console.log(`Reached $${goal} in ${months} months! `);

// 2. Password attempt limiter
let attempts = 3;
let password = "secret123";

while(attempts > 0) {
    let userInput = prompt(`Enter password (${attempts} attempts left):`);
    
    if(userInput === password) {
        console.log("Access granted! ");
        break;  // Exit loop
    } else {
        attempts--;
        console.log(`Wrong password! ${attempts} attempts left`);
    }
}
if(attempts === 0) {
    console.log("Access denied! ");
}

// 3. Simple number guessing game
let secretNumber = 42;
let guess = null;
let attempts2 = 0;

while(guess !== secretNumber) {
    guess = parseInt(prompt("Guess the number (1-100):"));
    attempts2++;
    
    if(guess < secretNumber) {
        console.log("Too low! ");
    } else if(guess > secretNumber) {
        console.log("Too high! ");
    } else {
        console.log(`Correct!  You got it in ${attempts2} attempts!`);
    }
}