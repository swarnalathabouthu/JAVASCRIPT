/*
Math Functions or Methods:
i)to calculate mathematical values by giving the final values accuratly.
ii)The final value is always values increases.
Types:
*/

//1.math.round(): Rounds the number to the nearest integer.
let a1 = 2.4
let a11 = 4.9
console.log(Math.round(a1))
console.log(Math.round(a11))

//2.math.ceil(): Rounds the number upto the nearest integer.
let a2 = 2.4
let a22 = 4.9
console.log(Math.ceil(a2))
console.log(Math.ceil(a22))

//3.math.floor() : Rounds a number down to the nearest integer.
let a3 = 2.4
let a33 = 4.9
console.log(Math.ceil(a3))
console.log(Math.ceil(a33))

//4.math.pow() : Raises the base number to the exponent Number.
let a4 = 2
let a44 = 4
console.log(Math.pow(a4,a44))

//5.math.sqrt() : Returns the squareroot of a given number.
let a5 = 49
console.log(Math.sqrt(a5))

//6.math.trunc(): Removes the decimal part of the number and returns the integer part.
let a6= 22.6364
console.log(Math.trunc(a6))

//7.math.abs(): Returns the absolute value of a number(converts the negstive number to positive number).
let a7=-8
console.log(Math.abs(a7))

//8.math.max() : returns the maximum value in the given number.
let a8 = (4, 6, 7, 8, 18)
console.log(Math.max(a8))

//9.math.min():returns the minimun number in the given numbers.
let a9 = (1,2,3,5,7,89,4)
console.log(Math.min(a9))

//10.Math.random(): Generates a random number between 0(inclusive) and 1(exclusive).
console.log(Math.random())
/*-------------------------------------------------------------------------------------- */
/*
ES6 FEATURES:
ES6 also known as ECMAScript 2015 aor ES6 features.
The basis form modern programming languague like Angular nad React.js
*/

//1.let and const:
//let:reassigned and block-scoped.
//const:not reassigned and block-scoped.
let x=20
let y=x
console.log(y)

const xx=23
console.log(xx)

//2.Arrow Functions
//a shoter syntax for functions and act like normal functions.
//functions are hoisted and arrow functions not hoisted.

b()
function b(){
    console.log("hello")
}

const p=()=>console.log("Hello Swarna.")
p()

//3.Template literals:
//Allows emmbed expressions in string using backtids(`) instead of quotes.
//$:interpolation: Automatic replacing of expressions with real values is called string interpolation.
let firstName = "Bouthu";
let lastName = "Swarnalatha";
let fullname = `Welcome ${firstName}, ${lastName}!`;
console.log(fullname)

//4.Destructructing assigment: Extracts values from array into distinct variables.
const fruits = ["Oranges", "Apples", "Mangos", "Watermelon"];
let [fruit1, fruit2] = fruits;
console.log(fruit1)
console.log(fruit2)

//5.Default Parameters:Defaultparameters takes where we not given argument values.
function a(x,y=600){
    console.log(x+y)
}
a(5)


//6.Speard Operators: Speard the content or simply coying the code.
var l = [1,2,3]
var m =[...l, "swarna"]
console.log(m)

var k={
    id:2,
    name: "swarna"
}
var r={
    ...k,
    age:22
}
console.log(r)
