// Using var
var num = 20; 
if (true) {
    var num = 40; 
    console.log(num); 
}
console.log(num); 

// Using let
let number = 40; 
if (true) {
    let number = 60; 
    console.log(number); 
}
console.log(number); 

// Using const
const x = 11;
if (true) {
    const x = 24; 
    console.log(x); 
}
console.log(x); 

//functional scope
function Add() {
    var p = 15; 
    console.log(p); 
}
Add(); 
//local scope
if (true) {
    var localVarWithVar = 20; 
    let localVarWithLet = 40; 
    console.log(localVarWithVar); 
    console.log(localVarWithLet);
}
console.log(localVarWithVar);

//local scope
for (let i = 0; i < 3; i++) {
    let loop = "local"; 
    console.log(loop);
}

//Hoisting
var Var = 15;
console.log(Var);