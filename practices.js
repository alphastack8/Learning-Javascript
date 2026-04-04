// 1. Redeclaration allowed
var name = "John";
var name = "Mike";  // ✅ No error
console.log(name);  // "Mike"

// 2. Reassignment allowed
var age = 25;
age = 30;  // ✅ Allowed
console.log(age);  // 30

// 3. Hoisting - can use before declaration
console.log(city);  // undefined (not an error!)
var city = "New York";

// 4. Function scope
if (true) {
    var x = 10;
}
console.log(x);  // 10 (leaks outside block!)

function test() {
    var y = 20;
}
console.log(y);  // ❌ ReferenceError (function scope works)