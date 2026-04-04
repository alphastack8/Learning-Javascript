// Basic symbol creation
const sym1 = Symbol();
const sym2 = Symbol();
console.log(sym1 === sym2);  // false (each symbol is unique)

// Symbols with description (for debugging)
const sym3 = Symbol("user.id");
const sym4 = Symbol("user.id");
console.log(sym3 === sym4);  // false (still unique even with same description)
console.log(sym3.toString());  // "Symbol(user.id)"
console.log(sym3.description); // "user.id"

// Symbols are not auto-converted to strings
// console.log("Hello " + sym3);  // ❌ TypeError

// Must explicitly convert
console.log("Hello " + sym3.toString());  // "Hello Symbol(user.id)"