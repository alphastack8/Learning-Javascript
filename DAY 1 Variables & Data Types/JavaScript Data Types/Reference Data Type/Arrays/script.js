// Array literal (most common)
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, null, { name: "John" }, [1, 2, 3]];

// Using Array constructor
const arr1 = new Array(5);      // Creates array of 5 empty slots
const arr2 = new Array(1, 2, 3); // [1, 2, 3]

// Array.of() - avoids confusion with single number
const arr3 = Array.of(5);    // [5] (not empty slots)
const arr4 = Array.of(1, 2, 3);  // [1, 2, 3]

// Array.from() - converts iterables to array
const str = "hello";
const chars = Array.from(str);  // ["h", "e", "l", "l", "o"]
const nodeList = Array.from(document.querySelectorAll('div'));

// Spread operator
const arr5 = [...fruits, "grape", "mango"];