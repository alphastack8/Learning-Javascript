function calculator(num1, num2, operation) {
    let result;
    
    if (operation === "+") {
        result = num1 + num2;
        console.log(`${num1} + ${num2} = ${result}`);
    } else if (operation === "-") {
        result = num1 - num2;
        console.log(`${num1} - ${num2} = ${result}`);
    } else if (operation === "*") {
        result = num1 * num2;
        console.log(`${num1} × ${num2} = ${result}`);
    } else if (operation === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
            console.log(`${num1} ÷ ${num2} = ${result}`);
        } else {
            console.log("Error: Cannot divide by zero!");
        }
    } else {
        console.log("Invalid operation! Use +, -, *, or /");
    }
    
    return result;
}

calculator(10, 5, "+");  // 10 + 5 = 15
calculator(10, 0, "/");  // Error: Cannot divide by zero!
calculator(10, 5, "%");  // Invalid operation!