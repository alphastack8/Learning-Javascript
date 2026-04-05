// Increment (++)
let count = 5;

// Post-increment (returns value THEN increments)
console.log(count++);  // 5 (returns 5, then becomes 6)
console.log(count);    // 6

// Pre-increment (increments THEN returns value)
console.log(++count);  // 7 (increments to 7, then returns 7)
console.log(count);    // 7

// Decrement (--)
let points = 10;

// Post-decrement
console.log(points--);  // 10 (returns 10, then becomes 9)
console.log(points);    // 9

// Pre-decrement
console.log(--points);  // 8 (decrements to 8, then returns 8)
console.log(points);    // 8

// Practical example
let i = 0;
while (i < 5) {
    console.log(i++);  // Prints 0,1,2,3,4
}

let j = 0;
while (++j < 5) {
    console.log(j);    // Prints 1,2,3,4
}