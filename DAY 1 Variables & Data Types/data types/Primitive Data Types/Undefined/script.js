// How undefined occurs

// 1. Declared but not initialized
let myVariable;
console.log(myVariable);  // undefined
console.log(typeof myVariable);  // "undefined"

// 2. Function with no return
function noReturn() {
    let x = 5;
}
console.log(noReturn());  // undefined

// 3. Missing object properties
const person = { name: "John" };
console.log(person.age);  // undefined

// 4. Array elements that don't exist
const arr = [1, 2, 3];
console.log(arr[5]);  // undefined

// 5. Function parameters with no argument
function greet(name) {
    console.log(name);  // undefined if no argument passed
}
greet();

// Checking for undefined
let data;
if (data === undefined) {
    console.log("Data is undefined");
}

// Using typeof (safer)
if (typeof data === "undefined") {
    console.log("Data is undefined");
}

// Common pattern: default values
function processUser(name) {
    // Old way
    if (name === undefined) {
        name = "Anonymous";
    }
    
    // Modern way (default parameter)
    // function processUser(name = "Anonymous") { ... }
    
    console.log(`Hello, ${name}`);
}

processUser();           // Hello, Anonymous
processUser("Alice");    // Hello, Alice

// Real-world example
class UserManager {
    constructor() {
        this.currentUser = undefined;
    }
    
    login(username) {
        if (username === undefined || username === "") {
            console.log("Username is required!");
            return false;
        }
        this.currentUser = username;
        return true;
    }
    
    getCurrentUser() {
        if (this.currentUser === undefined) {
            return "No user logged in";
        }
        return this.currentUser;
    }
}

const manager = new UserManager();
console.log(manager.getCurrentUser());  // "No user logged in"
manager.login("John");
console.log(manager.getCurrentUser());  // "John"

// Distinguish between undefined and other falsy values
let score = 0;
let playerScore;  // undefined

console.log(score || 100);        // 100 (because 0 is falsy)
console.log(score ?? 100);        // 0 (nullish coalescing)
console.log(playerScore ?? 100);  // 100 (undefined)