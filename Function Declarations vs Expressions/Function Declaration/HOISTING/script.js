//  This WORKS even though we call it BEFORE declaring!
sayHello("Alice"); // Output: Hello, Alice!

function sayHello(name) {
    console.log(`Hello, ${name}!`);
}

// JavaScript internally moves it like this:
// function sayHello(name) { ... }  ← Moved to top
// sayHello("Alice");               ← Then executed


// Examples

// 1. Add two numbers
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // 8

// 2. Check if adult
function isAdult(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
console.log(isAdult(20)); // true

// 3. Calculate total with tax
function calculateTotal(price, quantity, taxRate) {
    let subtotal = price * quantity;
    let tax = subtotal * taxRate;
    return subtotal + tax;
}
console.log(calculateTotal(10, 3, 0.1)); // 33