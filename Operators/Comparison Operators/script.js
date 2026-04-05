// Loose equality (==) - compares value after type coercion
console.log(5 == 5);        // true
console.log(5 == "5");      // true (string converted to number)
console.log(0 == false);    // true (false converts to 0)
console.log(null == undefined);  // true
console.log([] == false);   // true (empty array converts to empty string, then to 0)
console.log("" == false);   // true

// WARNING: Avoid loose equality due to unexpected behavior
console.log(0 == "");       // true
console.log(false == "");   // true
console.log([1,2] == "1,2"); // true

// Strict equality (===) - compares value AND type (RECOMMENDED)
console.log(5 === 5);       // true
console.log(5 === "5");     // false (different types)
console.log(0 === false);   // false
console.log(null === undefined); // false
console.log([] == false);  // true

// Real-world example: Always use ===
function validateUser(age, name) {
    if (age === undefined) {
        console.log("Age is required");
    }
    if (name === "") {
        console.log("Name cannot be empty");
    }
}

// Loose inequality (!=)
console.log(5 != "5");      // false (they are equal loosely)
console.log(5 != 6);        // true

// Strict inequality (!==)
console.log(5 !== "5");     // true (different types)
console.log(5 !== 5);       // false (same value and type)