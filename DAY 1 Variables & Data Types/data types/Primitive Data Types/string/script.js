// Three ways to create strings
const singleQuotes = 'Hello World';
const doubleQuotes = "Hello World";
const backticks = `Hello World`;  // Template literals (ES6)

// String properties and methods
const message = "JavaScript is awesome!";

// Length property
console.log(message.length);  // 22

// Common string methods
console.log(message.toUpperCase());     // "JAVASCRIPT IS AWESOME!"
console.log(message.toLowerCase());     // "javascript is awesome!"
console.log(message.indexOf('is'));     // 11
console.log(message.includes('Java'));  // true
console.log(message.slice(0, 10));      // "JavaScript"
console.log(message.split(' '));        // ["JavaScript", "is", "awesome!"]

// String concatenation (old way)
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName);  // "John Doe"

// Template literals (modern way)
const age = 25;
const introduction = `My name is ${firstName} ${lastName} and I'm ${age} years old.`;
console.log(introduction);  // "My name is John Doe and I'm 25 years old."

// Multi-line strings
const multiLine = `
    This is line 1
    This is line 2
    This is line 3
`;
console.log(multiLine);

// Escape characters
const escaped = 'She said, "Hello!"';
const escaped2 = "It's a beautiful day";
const escaped3 = "Line1\nLine2\tTabbed";

// Real-world examples
function formatUserGreeting(name, timeOfDay) {
    return `Good ${timeOfDay}, ${name}! Welcome back.`;
}
console.log(formatUserGreeting("Alice", "morning"));  // "Good morning, Alice! Welcome back."

// String to number conversion
const strNumber = "123";
const converted = Number(strNumber);
console.log(typeof converted, converted);  // number 123