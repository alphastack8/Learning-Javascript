// 1. Must initialize
const PI;  // ❌ SyntaxError: Missing initializer

// 2. Correct declaration
const PI = 3.14159;

// 3. Cannot reassign
PI = 3.14;  // ❌ TypeError: Assignment to constant variable

// 4. Block scope
if (true) {
    const MAX = 100;
    console.log(MAX);  // 100
}
console.log(MAX);  // ❌ ReferenceError

// 5. Objects with const - properties CAN change
const user = {
    name: "John",
    age: 25
};

user.name = "Mike";  // ✅ Allowed (modifying property)
user.email = "mike@email.com";  // ✅ Allowed (adding property)
console.log(user);  // { name: "Mike", age: 25, email: "mike@email.com" }

// But cannot reassign the object
user = { name: "Sarah" };  // ❌ Error!

// 6. Arrays with const - elements CAN change
const fruits = ["apple", "banana"];
fruits.push("orange");  // ✅ Allowed
fruits[0] = "mango";    // ✅ Allowed
console.log(fruits);    // ["mango", "banana", "orange"]

// But cannot reassign array
fruits = ["grape"];  // ❌ Error!