// Syntax
for (initialization; condition; increment/decrement) {
    // code to repeat
}

// Parts explained:
// 1. initialization: where to start (let i = 0)
// 2. condition: when to stop (i < 5)
// 3. increment: how to count (i++)

// Basic Examples
// Example 1: Count 1 to 5
for(let i = 1; i <= 5; i++) {
    console.log(`Number: ${i}`);
}
// Output:
// Number: 1
// Number: 2
// Number: 3
// Number: 4
// Number: 5

// Example 2: Count backwards
for(let i = 5; i >= 1; i--) {
    console.log(`Countdown: ${i}`);
}
// Output:
// Countdown: 5
// Countdown: 4
// Countdown: 3
// Countdown: 2
// Countdown: 1

// Example 3: Step by 2 (even numbers)
for(let i = 0; i <= 10; i += 2) {
    console.log(`Even: ${i}`);
}
// Output: 0, 2, 4, 6, 8, 10

// Example 4: Multiplication table
let number = 5;
for(let i = 1; i <= 10; i++) {
    console.log(`${number} × ${i} = ${number * i}`);
}
// Output:
// 5 × 1 = 5
// 5 × 2 = 10
// ... up to 5 × 10 = 50


// Real-World Examples
// 1. Sum of numbers 1 to 100
let sum = 0;
for(let i = 1; i <= 100; i++) {
    sum += i;  // sum = sum + i
}
console.log(`Sum of 1 to 100: ${sum}`);  // 5050

// 2. Find factorial
function factorial(n) {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(`5! = ${factorial(5)}`);  // 120

// 3. Print array elements
let fruits = ["Apple", "Banana", "Orange", "Mango", "Grapes"];
for(let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// 4. Create a triangle pattern
for(let i = 1; i <= 5; i++) {
    let stars = "*".repeat(i);
    console.log(stars);
}
// Output:
// *
// **
// ***
// ****
// *****