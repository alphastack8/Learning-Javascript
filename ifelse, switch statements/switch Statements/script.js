// Syntax
switch(expression) {
    case value1:
        // code to execute
        break;
    case value2:
        // code to execute
        break;
    default:
        // code if no case matches
}

// Example 1: Days of week
let day = "Monday";

switch(day) {
    case "Monday":
        console.log("Start of work week! 💼");
        break;
    case "Friday":
        console.log("Weekend is coming! 🎉");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend! Relax 😊");
        break;
    default:
        console.log("Midweek day 📅");
}
// Output: Start of work week! 💼