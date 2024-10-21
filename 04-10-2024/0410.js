// Write a function add(a, b) that takes two numbers a and b as arguments and returns their sum
function add(a, b) {
    return a + b;
}
console.log(add(10, 6));


// Write a function subtract(a, b) that returns the result of subtracting b from a.
function sub(a, b) {
    return a - b;
}
console.log(sub(10, 5));


// Write a function multiply(a, b) that takes two numbers and returns their product.
function mul(a, b) {  
    return a * b;
}
console.log(mul(10, 5));


//Write a function divide(a, b) that returns the result of dividing a by b. If b is zero, the function should return a message saying "Cannot divide by zero."
function div(a, b) {
    if (b === 0) {
        return "Not divide by zero";
    }
    return a / b;
}
console.log(div(10, 5));
