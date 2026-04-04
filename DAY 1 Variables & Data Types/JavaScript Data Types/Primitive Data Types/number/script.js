// Different types of numbers
const integer = 42;
const decimal = 3.14;
const negative = -10;
const scientific = 5e6;  // 5,000,000
const hex = 0xFF;         // 255
const binary = 0b1010;    // 10
const octal = 0o77;       // 63

// Special numeric values
const infinity = Infinity;
const negInfinity = -Infinity;
const notANumber = NaN;

// Arithmetic operations
const sum = 10 + 5;           // 15
const difference = 10 - 5;    // 5
const product = 10 * 5;       // 50
const quotient = 10 / 5;      // 2
const remainder = 10 % 3;     // 1 (modulo)
const power = 2 ** 3;         // 8 (exponent)

// Math object methods
console.log(Math.PI);           // 3.141592653589793
console.log(Math.round(4.7));   // 5
console.log(Math.floor(4.7));   // 4
console.log(Math.ceil(4.1));    // 5
console.log(Math.random());     // Random number between 0-1
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1
console.log(Math.sqrt(16));     // 4
console.log(Math.abs(-5));      // 5

// Number methods
const num = 123.456;
console.log(num.toFixed(2));     // "123.46" (returns string)
console.log(num.toPrecision(4)); // "123.5"
console.log(num.toString());     // "123.456"

// Parsing numbers
console.log(parseInt("42"));          // 42
console.log(parseInt("42.9"));        // 42
console.log(parseFloat("42.9"));      // 42.9
console.log(parseInt("42px"));        // 42
console.log(Number("42"));            // 42
console.log(+"42");                   // 42 (unary plus)

// Checking if value is a number
console.log(isNaN(NaN));        // true
console.log(isNaN("hello"));    // true (can't convert to number)
console.log(isFinite(100));     // true
console.log(Number.isInteger(42));    // true
console.log(Number.isInteger(42.5));  // false

// Real-world examples
function calculateTotal(items) {
    let total = 0;
    for (let item of items) {
        total += item.price * item.quantity;
    }
    return total.toFixed(2);
}

const cart = [
    { name: "Apple", price: 0.99, quantity: 5 },
    { name: "Banana", price: 0.59, quantity: 3 }
];
console.log(`Total: $${calculateTotal(cart)}`);  // Total: $6.72

// Random number generator (between min and max)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10));  // Random number between 1-10

// Currency formatter
const price = 1234.5;
console.log(new Intl.NumberFormat('en-US', { 
    style: 'currency', 
    currency: 'USD' 
}).format(price));  // $1,234.50