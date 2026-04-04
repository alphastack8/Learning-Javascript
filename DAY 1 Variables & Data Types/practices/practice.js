// 1. Use const by default
const API_URL = "https://api.example.com";
const user = { name: "John" };

// 2. Use let when value needs to change
let count = 0;
count++;
let isLoggedIn = false;

// 3. NEVER use var in modern code
var oldWay = "avoid this";  // ❌ Don't use

// 4. Examples in real scenarios

// Example 1: Loop with let
for (let i = 0; i < 5; i++) {
    console.log(i);  // Works correctly
}

// Example 2: const with objects
const config = {
    theme: "dark",
    language: "en"
};
config.theme = "light";  // ✅ Allowed

// Example 3: let vs const in conditions
let status = "pending";
if (data.success) {
    status = "success";  // ✅ Can reassign
}
const MAX_RETRIES = 3;  // ✅ Constant stays same

// Example 4: Array with const
const items = [];
items.push("item1");  // ✅ Allowed
items[0] = "updated";  // ✅ Allowed