//1.Question
let arr=[2,4,6,8,10]
let arr1 = arr.reduce((acc,curr)=>acc+curr,0)
console.log("1.Sum of the values in the array:", arr1)

//2.Question
let a=[1,3,5,7]
let b = a.reduce((acc,curr)=>acc*curr, 1)
console.log("2.Product of the values in the array:", b)

//3.Question.
const words = ['apple', 'banana', 'cherry'];
const uppercase = words.map(word => word.toUpperCase());
console.log("3.Uppercase Words:", uppercase); 

//4.Question.
const num = [1, 2, 3, 4, 5];
const multipliedByTen = num.map(num => num * 10);
console.log("4.Multiplied by Ten:", multipliedByTen); 

//5.Question
const people = [
  { name: 'John', age: 25 },
  { name: 'Sarah', age: 30 },
  { name: 'Mike', age: 35 }
];
const ages = people.map(person => person.age);
console.log("5.Ages:", ages); 

//6.Question.
const fruits = ['apple', 'banana', 'cherry'];
fruits.forEach(fruit => console.log("6.Fruit",fruit));

//7.Question.
const numbers = [1, 2, 3, 4, 5, 6];
let evenCount = 0;
numbers.forEach(number => {
  if (number % 2 === 0) {
    evenCount++;
  }
});
console.log("7.Even Count:", evenCount); // Output: Even Count: 3







