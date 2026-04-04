// Only two boolean values
const isTrue = true;
const isFalse = false;

// Comparison operators (return booleans)
console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 >= 5);     // true
console.log(5 <= 3);     // false
console.log(5 === 5);    // true (strict equality)
console.log(5 == "5");   // true (loose equality - avoid!)
console.log(5 === "5");  // false (strict equality - use this!)
console.log(5 !== 3);    // true

// Logical operators
const hasPermission = true;
const isLoggedIn = true;
const isAdmin = false;

console.log(hasPermission && isLoggedIn);  // true (AND)
console.log(hasPermission || isAdmin);     // true (OR)
console.log(!isAdmin);                      // true (NOT)

// Truthy and Falsy values
// Falsy values (evaluate to false in boolean context):
console.log(Boolean(false));    // false
console.log(Boolean(0));        // false
console.log(Boolean(""));       // false
console.log(Boolean(null));     // false
console.log(Boolean(undefined));// false
console.log(Boolean(NaN));      // false

// Truthy values (everything else):
console.log(Boolean(true));     // true
console.log(Boolean(42));       // true
console.log(Boolean("hello"));  // true
console.log(Boolean([]));       // true
console.log(Boolean({}));       // true
console.log(Boolean(-1));       // true

// Real-world examples
function validateUserInput(input) {
    if (!input) {
        return "Input is required!";
    }
    if (input.length < 3) {
        return "Input must be at least 3 characters";
    }
    return "Valid input";
}

console.log(validateUserInput(""));      // "Input is required!"
console.log(validateUserInput("Hi"));    // "Input must be at least 3 characters"
console.log(validateUserInput("Hello")); // "Valid input"

// Feature flags
const appConfig = {
    enableDarkMode: true,
    enableNotifications: false,
    enableAnalytics: true
};

if (appConfig.enableDarkMode) {
    console.log("Applying dark theme...");
}

// Conditional rendering
function getUserStatus(user) {
    return user.isActive && user.isVerified 
        ? "Active User" 
        : "Restricted Access";
}

// Short-circuit evaluation
const userName = "";
const displayName = userName || "Guest";
console.log(displayName);  // "Guest"

// Toggle boolean
let isLightOn = false;
isLightOn = !isLightOn;  // true
isLightOn = !isLightOn;  // false