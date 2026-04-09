// Regular function
function sayHello() {
    return "Hello!";
}

// Arrow function
const sayHello = () => "Hello!";

console.log(sayHello()); // Hello!

// With multiple statements
const greet = () => {
    let message = "Hello";
    let name = "World";
    return `${message} ${name}!`;
};
console.log(greet()); // Hello World!