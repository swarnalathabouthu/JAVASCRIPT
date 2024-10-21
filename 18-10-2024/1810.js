//ARRAY METHODS 
// Initial array
let number = [1, 2, 3, 4, 5, 6, 7];

//push()
number.push(8);
console.log(number); 

//pop()
number.pop();
console.log(number); 

//shift()
number.shift();
console.log(number); 

//unshift()
number.unshift(1);
console.log(number);

//map()
let squares = number.map(num => num * num);
console.log(squares); 

//filter()
let evenNumbers = number.filter(num => num % 2 === 0);
console.log(evenNumbers); 

//reduce()
let Sum = number.reduce((total, num) => total + num, 0);
console.log(Sum); 

//find()
let firstEven = number.find(num => num % 2 === 0);
console.log(firstEven); 

//findIndex()
let firstEvenIndex = number.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); 

//sort()
let sorted = [...number].sort((a, b) => b - a);
console.log(sorted); 

//reverse()
let reversed = [...number].reverse();
console.log(reversed); 

//concat() 
let moreNumbers = [6, 7, 8];
let combined = number.concat(moreNumbers);
console.log(combined); 

//slice() 
let sliced = number.slice(1, 3);
console.log(sliced); 

//splice() 
number.splice(2, 0, 99);
console.log(number); 

//includes()
let hasFour = number.includes(4);
console.log(hasFour); 

//indexOf()
let index = number.indexOf(99);
console.log(index); 

//every()
let allLessThanTen = number.every(num => num < 10);
console.log(allLessThanTen); 

//some()
let someEven = number.some(num => num % 2 === 0);
console.log(someEven); 


//OBJECT METHODS 
let Person = {
    name: "Swarna",
    age: 23,
    location: "Bhupallay",
    hobbies: ["traveling", "Listening to music"],
    isEmployed: true
};

Person.age = 22;
delete Person.location;
Person.hobbies.push("Reading Books");

let entries = Object.entries(Person);
let keys = Object.keys(Person);
let values = Object.values(Person);
let hasProperty = Person.hasOwnProperty("name");
let isFrozen = Object.isFrozen(Person);
let isSealed = Object.isSealed(Person);

Object.freeze(Person);
Object.seal(Person);

let copy = Object.assign({}, Person);
let merged = Object.assign({ city: "Warangal" }, Person);

console.log(Person);
console.log(entries);
console.log(keys);
console.log(values);
console.log(hasProperty);
console.log(isFrozen);
console.log(isSealed);
console.log(copy);
console.log(merged);

//functions
function person(name) {
    console.log("Hello, " + name + "!");
}

person("Swarna");

function add(a, b) {
    return a + b;
}

let sum = add(5, 3); 
console.log(sum); 

function wish(name = "Guest") {
    console.log("Hello, " + name + "!");
}

wish();           
wish("Swarna");  