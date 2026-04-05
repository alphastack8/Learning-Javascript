// Unary plus (+) - converts to number
console.log(+"123");      // 123
console.log(+"12.5");     // 12.5
console.log(+"hello");    // NaN
console.log(+true);       // 1
console.log(+false);      // 0
console.log(+null);       // 0

// Unary negation (-) - negates or converts to number
console.log(-"123");      // -123
console.log(-"12.5");     // -12.5
console.log(-true);       // -1
console.log(-(-5));       // 5

// Practical: Convert form inputs
const ageInput = "25";
const age = +ageInput;    // Convert to number
console.log(typeof age);   // "number"