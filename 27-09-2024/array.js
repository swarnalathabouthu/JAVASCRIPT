//Question One
let Fullname = ["Sri", "Swarna", "Latha"];
Fullname.push("Bouthu");
console.log("QuestionOne: Adding of name:",Fullname); 

//Question Two
Fullname.pop("Sri");
console.log("QuestionTwo: Removing of name:",Fullname); 

//Question Three
Fullname.unshift("Miss");
console.log("QuestionThree: Added element at name:",Fullname); 

//Question Four
Fullname.shift();
console.log("QuestionFour: Removing first element:",Fullname); 

//Question Five
Fullname.reverse();
console.log(" QuestionFive: Reverse order element:",Fullname); 

//Question Six
console.log("QuestionSix: Index of  element:",Fullname.indexOf("Swarna")); 

//Question Seven
const valuetocheck = Fullname.includes("Swarna");
console.log("QuestionSeven: value exists in array:",valuetocheck);

//Question Eight
const Num = [15, 12, 8, 11, 10];
Num.sort((a, b) => a - b);
console.log(" QuestionEight: sorted array:", Fullname.sort + "sorted in ascending order:",Num);

//Question Nine
const Stringone = Fullname.join(', ');
console.log(" QuestionNine: Seperated by commmas:",Stringone); 

//Multiple Array Methods:
console.log("Multiple Array Methods:");
//Question one
let Arr = [21, 72, 33, 41];
Arr.push(5);
console.log("Question One:");
console.log("Array after adding an element:", Arr);
Arr.shift();
console.log("Array after removing the first element:", Arr);

//Question Two
let a = ['s', 'w', 'a', 'r' , 'n', 'a'];
let reversedArray = a.reverse();
console.log("Question Two:");
console.log("Reversed Array:", reversedArray);
let joinedString = reversedArray.join(', '); 
console.log("Joined String:", joinedString);

//Question Three
let num = [15, 8, 27, 18, 14];
num.sort((a, b) => a - b);
console.log("Question Three:");
console.log("Sorted Array:", num);
num.pop();
console.log("Array after removing the last element:", num);

//Question Four
let array = [3, 4, 5];
array.unshift(1, 2);
console.log("Question Four:");
console.log("Array after adding elements at the beginning:", array);
array.shift();
console.log("Array after removing the first element:", array);
let arrayLength = array.length;
console.log("Length of the array:", arrayLength);

//Question Five
let arrayone = [15, 31, 18];
let arraytwo = [16, 14, 22];
let combinedArray = arrayone.concat(arraytwo);
console.log("Question Five:");
console.log("Combined Array:", combinedArray);
combinedArray.sort((a, b) => a - b);
console.log("Sorted Combined Array:", combinedArray);
combinedArray.pop();
console.log("Array after removing the last element:", combinedArray);

