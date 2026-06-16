// Library ko import karein
const prompt = require('prompt-sync')();

console.log("--- Welcome to My JS Calculator ---");

// User se inputs lein
const num1 = parseFloat(prompt("Pehla number likhein: "));
const operator = prompt("Operation batayein (+, -, *, /): ");
const num2 = parseFloat(prompt("Dosra number likhein: "));

if (isNaN(num1) || isNaN(num2)) {
    console.log("Ghalat input! Baraye mehurbani numbers likhein.");
} else {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Error (Division by zero)";
            break;
        default:
            console.log("Ghalat operator!");
    }

    if (result !== undefined) {
        console.log(`\nJawab: ${num1} ${operator} ${num2} = ${result}`);
    }
}