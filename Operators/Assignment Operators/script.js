// Basic assignment (=)
let x = 10;
let y = x;  // Assign value of x to y
console.log(y);  // 10

// Addition assignment (+=)
let a = 5;
a += 3;      // Same as: a = a + 3
console.log(a);  // 8

// Subtraction assignment (-=)
let b = 10;
b -= 4;      // Same as: b = b - 4
console.log(b);  // 6

// Multiplication assignment (*=)
let c = 3;
c *= 4;      // Same as: c = c * 4
console.log(c);  // 12

// Division assignment (/=)
let d = 20;
d /= 5;      // Same as: d = d / 5
console.log(d);  // 4

// Remainder assignment (%=)
let e = 17;
e %= 5;      // Same as: e = e % 5
console.log(e);  // 2

// Exponentiation assignment (**=)
let f = 2;
f **= 3;     // Same as: f = f ** 3
console.log(f);  // 8

// Bitwise assignment operators
let g = 5;   // 0101 in binary
g &= 3;      // 0101 & 0011 = 0001 (1)
console.log(g);  // 1

g = 5;       // Reset
g |= 3;      // 0101 | 0011 = 0111 (7)
console.log(g);  // 7

g = 5;       // Reset
g ^= 3;      // 0101 ^ 0011 = 0110 (6)
console.log(g);  // 6

// Logical assignment operators (ES2021)
let h = null;
h ||= 10;    // Assigns 10 if h is falsy
console.log(h);  // 10

let i = 5;
i &&= 10;    // Assigns 10 if i is truthy
console.log(i);  // 10

let j = null;
j ??= 20;    // Assigns 20 if j is null or undefined
console.log(j);  // 20