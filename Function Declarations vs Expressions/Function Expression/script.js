// Syntax

const variableName = function(parameters) {
    // code to execute
    return value;
};

// Example

const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet("John")); // Hello, John!


        // NOT hoisted

//  This does NOT work!
sayHello("Alice"); // Error: Cannot access before initialization

const sayHello = function(name) {
    console.log(`Hello, ${name}!`);
};

//  This works (called after definition)
const sayHi = function(name) {
    console.log(`Hi, ${name}!`);
};
sayHi("Bob"); // Hi, Bob!