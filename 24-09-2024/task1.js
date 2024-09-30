// Question one
var car = {
    make: "Car",
    model: "Tata",
    year: 2020
}
Object.freeze(car);
model = "asus";
console.log("Question one:");
console.log(car);

// Question two
var user = {
    name: "swarna",
    age: 22,
    email: "swarnalathabouthu@gmail.com"
} 
Object.freeze(user);
Object.isFrozen(user);
console.log("Question two:");
console.log(user);
console.log(Object.isFrozen(user));

// Question three
var product = {
    name: "The Smile",
    category: "Book",
    Price: 200
}
Object.seal(product);
Object.isSealed(product);
console.log("Question three:");
console.log(product);
console.log(Object.isSealed(product));

// Question four
var laptop = {
    Brand: "Asus",
    Model: "i5 Gen",
    Price: 50000
}
console.log("Question four:");
console.log(Object.keys(laptop));

// Question five
var house = {
    location: "Telangana",
    Size: "about 650 square feet ",
    Price: 100000
}
console.log("Question five:");
console.log(Object.values(house));

// Question six smartphone
var smartphone = {
    Brand: "redmi",
    Model: "9 pro max",
    Price: 180000
}
Object.seal(smartphone);
price = 190000

console.log("Question six:");
console.log(Object.isSealed(smartphone));

// Question seven
var book = {
    title: "The Smile",
    author: "Swarna",
    publishedYear: 2023
}
Object.freeze(book);
publishedYear = 2024;

console.log("Question seven:");
console.log(Object.isFrozen(book));

// Question eight
var person = {
    firstname: "Bouthu",
    lastname: "Swarnalatha",
    age: 22
}
console.log("Question eight:");
console.log(Object.keys(person));
console.log(Object.values(person));

// Question nine
var course = {
    title: "Fullstack",
    instructor: "vamsi",
    duration: "2hours"
}
delete(duration);
console.log("Question nine:");
console.log(Object.entries(course));

// Question ten
var employee = {
    name: "ram",
    position: "software",
    salary: 40000
}
Object.seal(employee);
positon = "intern";
console.log("Question ten:");
console.log(Object.keys(employee));