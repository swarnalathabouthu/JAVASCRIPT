// Create button element and giving id to the button.
let Button = document.createElement("button");
Button.id = "Button";
Button.textContent = "*Click any where on the screen to change the colors*";

// Styling to the button element 
Button.style.backgroundColor = "Black";
Button.style.color = "White"
Button.style.width = "100%";
Button.style.height = "100%";
Button.style.position = "absolute";
Button.style.right = "0";
Button.style.top = "0";
Button.style.fontSize = "34px";
Button.style.cursor = "pointer";
Button.style.alignItems = "center";
Button.style.justifyContent = "center";

// Click event to change colors in the website.
Button.onclick = function () {
    var randomColors = Math.floor(Math.random() * 16777).toString(20);
    document.getElementById("Button").style.backgroundColor = '#' + randomColors;
};
document.body.appendChild(Button);

// //1
// let array = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// console.log(Math.max(array))
// console.log(Math.min(array))

// //2
// console.log(Math.floor(Math.random() * 5) + 5)

// //3
// let arr = 5.1
// console.log(Math.ceil(arr))

// //destructutring
// //1
// const arr1 = [10, 20, 30, 40]
// const [a, b] = arr1
// console.log(a)
// console.log(b)

// //2
// const student = { name: "Alice", age: 25, city: "New York" }
// const { name, age } = student
// console.log(name)
// console.log(age)

// // //3
// const employye = { person: { name: "Eve", address: { city: "Paris" } } }
// const { person: { address: { city } } } = employye
// console.log(city)

// //Rest and Spread Operators.
// 1.
// var x = [1, 2, 3]
// var y = [...x, 4, 5, 6]
// console.log(y)

// // //2.
// function sum(...numbers) {
//     return numbers.reduce((acc, num) => acc + num, 0);
// }

// console.log(sum(1, 2, 3)); // Output: 6
// console.log(sum(10, 20, 30, 40)); // Output: 100

// //3.
// var l = {
//     name: "John",
//     age: 30
// }
// var m = {
//     ...l,
//     city: "Hyderabad"
// }
// console.log(m)

