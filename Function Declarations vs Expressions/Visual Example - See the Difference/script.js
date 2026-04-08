// FUNCTION DECLARATION
console.log(sum(5, 3)); //  8 - Works!

function sum(a, b) {
    return a + b;
}

// FUNCTION EXPRESSION
console.log(product(5, 3)); //  Error! Can't use before

const product = function(a, b) {
    return a * b;
};

console.log(product(5, 3)); //  15 - Works after definition