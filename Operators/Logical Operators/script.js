// Logical AND (&&) - returns true if ALL operands are true
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && true);   // false
console.log(false && false);  // false

// Short-circuit evaluation (stops at first false)
console.log(5 > 3 && 10 > 5);     // true
console.log(5 > 3 && 10 > 20);    // false
console.log(5 > 10 && expensiveFunction()); // expensiveFunction NOT called

// Logical OR (||) - returns true if ANY operand is true
console.log(true || true);     // true
console.log(true || false);    // true
console.log(false || true);    // true
console.log(false || false);   // false

// Short-circuit evaluation (stops at first true)
console.log(5 > 10 || 10 > 5);     // true
console.log(5 > 10 || 10 > 20);    // false
console.log(5 > 3 || expensiveFunction()); // expensiveFunction NOT called

// Logical NOT (!) - inverts boolean value
console.log(!true);     // false
console.log(!false);    // true
console.log(!!true);    // true (double NOT)
console.log(!!"hello"); // true (convert to boolean)

// Combining logical operators
const age = 25;
const hasLicense = true;
const hasCar = false;

// Can drive if: age >= 18 AND hasLicense AND (hasCar OR renting)
const canDrive = (age >= 18) && hasLicense && (hasCar || true);
console.log(canDrive);  // true