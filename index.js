// Library ko import karein
const prompt = require('prompt-sync')();

console.log("--- Welcome to My JS Calculator ---");

// User se inputs lein
const num1 = parseFloat(prompt("Pehla number likhein: "));
const operator = prompt("Operation batayein (+, -, *, /): ");
const num2 = parseFloat(prompt("Dosra number likhein: "));

let result;

// Calculation logic
if (operator === '+') {
    result = num1 + num2;
} else if (operator === '-') {
    result = num1 - num2;
} else if (operator === '*') {
    result = num1 * num2;
} else if (operator === '/') {
    result = num1 / num2;
} else {
    console.log("Ghalat operator!");
}

if (result !== undefined) {
    console.log(`\nJawab: ${num1} ${operator} ${num2} = ${result}`);
}