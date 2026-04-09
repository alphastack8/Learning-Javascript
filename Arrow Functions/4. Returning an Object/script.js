// Regular function
function getUser(name, age) {
    return { name: name, age: age };
}

// Arrow function - WRONG (confuses with code block)
// const getUser = (name, age) => { name: name, age: age }; // Error

// Arrow function - CORRECT (wrap object in parentheses)
const getUser = (name, age) => ({ name: name, age: age });

console.log(getUser("John", 25)); // { name: "John", age: 25 }

// Even shorter with property shorthand
const getUser = (name, age) => ({ name, age });