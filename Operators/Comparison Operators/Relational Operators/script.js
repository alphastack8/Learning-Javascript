// Greater than (>)
console.log(10 > 5);    // true
console.log(5 > 10);    // false
console.log(5 > 5);     // false

// Greater than or equal (>=)
console.log(10 >= 5);   // true
console.log(5 >= 5);    // true
console.log(3 >= 5);    // false

// Less than (<)
console.log(5 < 10);    // true
console.log(10 < 5);    // false
console.log(5 < 5);     // false

// Less than or equal (<=)
console.log(5 <= 10);   // true
console.log(5 <= 5);    // true
console.log(10 <= 5);   // false

// String comparison (lexicographic/alphabetic order)
console.log("apple" < "banana");    // true ('a' < 'b')
console.log("Apple" < "apple");     // true (uppercase < lowercase in ASCII)
console.log("10" < "2");            // true (string comparison: '1' < '2')
console.log("abc" < "abd");         // true ('c' < 'd')

// Mixed types (string vs number)
console.log(10 < "20");     // true (string converts to number)
console.log(10 < "2");      // false (2 < 10)

// NaN comparisons (always false)
console.log(NaN == NaN);    // false
console.log(NaN === NaN);   // false
console.log(NaN < 5);       // false
console.log(NaN > 5);       // false

// Check if value is NaN
console.log(isNaN(NaN));    // true
console.log(Number.isNaN(NaN));  // true (preferred)