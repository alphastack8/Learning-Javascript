// Null represents "nothing", "empty", or "unknown value"
let emptyValue = null;
console.log(emptyValue);  // null
console.log(typeof null); // "object" (historical bug in JavaScript)

// Setting a variable to null (intentionally empty)
let user = {
    name: "John",
    age: 25
};

// Clear/remove the value
user = null;
console.log(user);  // null

// Common use cases for null

// 1. Resetting values
let selectedItem = { id: 1, name: "Product" };
console.log(selectedItem);  // Product object

// User clears selection
selectedItem = null;
console.log(selectedItem);  // null

// 2. Indicating "no value" intentionally
function findUser(id) {
    const users = [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ];
    
    const user = users.find(u => u.id === id);
    return user || null;  // Return null if not found
}

console.log(findUser(1));   // { id: 1, name: "Alice" }
console.log(findUser(999)); // null

// 3. Database/API responses
const apiResponse = {
    success: true,
    data: null,  // No data available yet
    error: null  // No error
};

// Null vs Undefined
let undefinedVar;      // undefined (never assigned)
let nullVar = null;    // null (explicitly set to empty)

console.log(undefinedVar == null);   // true (loose equality)
console.log(undefinedVar === null);  // false (strict equality)

// Checking for null
function processData(data) {
    if (data === null) {
        console.log("Data is explicitly empty");
        return;
    }
    if (data === undefined) {
        console.log("Data was never provided");
        return;
    }
    console.log("Processing:", data);
}

processData(null);        // "Data is explicitly empty"
processData(undefined);   // "Data was never provided"
processData("Hello");     // "Processing: Hello"

// Real-world: Cache implementation
class Cache {
    constructor() {
        this.data = null;
        this.timestamp = null;
        this.ttl = 60000; // 1 minute
    }
    
    set(value) {
        this.data = value;
        this.timestamp = Date.now();
    }
    
    get() {
        if (this.data === null) {
            return null;  // No data cached
        }
        
        if (Date.now() - this.timestamp > this.ttl) {
            this.clear();
            return null;  // Cache expired
        }
        
        return this.data;
    }
    
    clear() {
        this.data = null;
        this.timestamp = null;
    }
}

const cache = new Cache();
console.log(cache.get());  // null (no cache)
cache.set("Cached data");
console.log(cache.get());  // "Cached data"
cache.clear();
console.log(cache.get());  // null (cleared)

// Optional chaining with null
const config = {
    settings: null
};

// Without optional chaining
const theme = config.settings && config.settings.theme;
console.log(theme);  // null

// With optional chaining (ES2020)
const theme2 = config.settings?.theme;
console.log(theme2);  // undefined (not null, but safe)