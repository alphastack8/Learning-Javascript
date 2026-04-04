// 1. No redeclaration allowed
let name = "John";
let name = "Mike";  // ❌ SyntaxError: Identifier already declared

// 2. Reassignment allowed
let age = 25;
age = 30;  // ✅ Allowed
console.log(age);  // 30

// 3. Block scope
if (true) {
    let x = 10;
    console.log(x);  // 10
}
console.log(x);  // ❌ ReferenceError: x is not defined

// 4. Loop scope - perfect for loops!
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2 (correct with let)

// 5. Temporal Dead Zone
console.log(z);  // ❌ ReferenceError (cannot access before initialization)
let z = 5;