// 1. Function Declaration (hoisted)
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("John"));  // "Hello, John!"

// 2. Function Expression (not hoisted)
const sayHello = function(name) {
    return `Hello, ${name}!`;
};
console.log(sayHello("Jane"));  // "Hello, Jane!"

// 3. Arrow Function (ES6)
const add = (a, b) => a + b;
console.log(add(5, 3));  // 8

// Arrow function with single parameter (parentheses optional)
const double = x => x * 2;
console.log(double(5));  // 10

// Arrow function with multiple statements
const multiply = (a, b) => {
    const result = a * b;
    return result;
};

// 4. Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("IIFE runs immediately!");
})();

(() => console.log("Arrow IIFE"))();

// 5. Function Constructor (avoid using)
const sum = new Function('a', 'b', 'return a + b');
console.log(sum(2, 3));  // 5