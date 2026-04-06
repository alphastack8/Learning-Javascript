// Syntax
for (variable in object) {
    // code to run for each property
}


// Example 1: Loop through object
let person = {
    name: "John",
    age: 25,
    city: "New York",
    job: "Developer"
};

for(let key in person) {
    console.log(`${key}: ${person[key]}`);
}
// Output:
// name: John
// age: 25
// city: New York
// job: Developer

// Example 2: Loop through array (not recommended)
let colors = ["red", "green", "blue"];
for(let index in colors) {
    console.log(`Index ${index}: ${colors[index]}`);
}
// Output: Index 0: red, Index 1: green, Index 2: blue

// Example 3: Check if object has property
let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2023
};

for(let prop in car) {
    if(car.hasOwnProperty(prop)) {  // Check own property
        console.log(`${prop}: ${car[prop]}`);
    }
}





// Real-World Examples

// 1. Display user profile
let user = {
    username: "john_doe",
    email: "john@example.com",
    isActive: true,
    loginCount: 42,
    lastLogin: "2024-01-15"
};

console.log("=== USER PROFILE ===");
for(let field in user) {
    console.log(`${field.toUpperCase()}: ${user[field]}`);
}

// 2. Calculate total from object
let prices = {
    apple: 0.99,
    banana: 0.59,
    orange: 0.79,
    mango: 1.29
};

let total = 0;
for(let fruit in prices) {
    total += prices[fruit];
    console.log(`${fruit}: $${prices[fruit]}`);
}
console.log(`Total value: $${total.toFixed(2)}`);

// 3. Copy object properties
let source = { a: 1, b: 2, c: 3 };
let target = {};

for(let key in source) {
    target[key] = source[key];
}
console.log(target);  // { a: 1, b: 2, c: 3 }