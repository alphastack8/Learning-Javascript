// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function
const add = (a, b) => a + b;

console.log(add(5, 3)); // 8

// With multiple statements
const calculate = (a, b, operation) => {
    if (operation === "add") return a + b;
    if (operation === "multiply") return a * b;
    return "Unknown operation";
};