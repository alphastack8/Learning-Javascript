// Syntax
for (variable of iterable) {
    // code to run for each value
}





// Example 1: Loop through array
let fruits2 = ["Apple", "Banana", "Orange", "Grapes"];

for(let fruit of fruits2) {
    console.log(`I love ${fruit}`);
}
// Output: I love  Apple, I love  Banana, etc.

// Example 2: Loop through string
let message = "Hello";
for(let char of message) {
    console.log(`Character: ${char}`);
}
// Output: H, e, l, l, o

// Example 3: Loop through numbers
let numbers = [10, 20, 30, 40, 50];
let sum2 = 0;

for(let num of numbers) {
    sum2 += num;
}
console.log(`Sum: ${sum2}`);  // 150



// Real-World Examples

// 1. Find largest number
let scores = [85, 92, 78, 96, 88, 91];
let highest = 0;

for(let score of scores) {
    if(score > highest) {
        highest = score;
    }
}
console.log(`Highest score: ${highest}`);

// 2. Count vowels in string
let text = "JavaScript is awesome!";
let vowels = 0;

for(let char of text.toLowerCase()) {
    if("aeiou".includes(char)) {
        vowels++;
    }
}
console.log(`Vowels count: ${vowels}`);

// 3. Filter even numbers
let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = [];

for(let num of allNumbers) {
    if(num % 2 === 0) {
        evenNumbers.push(num);
    }
}
console.log(`Even numbers: ${evenNumbers}`);

// 4. Create HTML list from array
let tasks = ["Learn JavaScript", "Build project", "Practice daily"];
let htmlList = "<ul>";

for(let task of tasks) {
    htmlList += `<li>${task}</li>`;
}
htmlList += "</ul>";
console.log(htmlList);
// Output: <ul><li>Learn JavaScript</li><li>Build project</li><li>Practice daily</li></ul>