//Document-01:
//1. Check Voting Eligibility
var age = 18;
if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
} 
//Output: You are eligible to vote.
//The age is 18, which is eligible for voting.

//2. Simple Temperature Check
var temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside.");
} else {
  console.log("It's a cool day.");
}
//Output: It's a cool day.
//The temperature is below 30, so it’s cool outside.

//3. Even or Odd Number Check
var number = 7;
if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
//Output: The number is odd.
//7 is odd as it leaves a remainder of 1 when divided by 2.

//4. Check Passing Grade
var score = 60;
if (score >= 50) {
  console.log("You passed the test!");
} else {
  console.log("You did not pass the test.");
}
//output: You passed the test!
//A score of 60 meets the passing threshold of 50.

//5. Check Positive or Negative Number
var num = -10;
if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
//Output: The number is negative.
//-10 is less than 0, classifying it as negative.

//6. Basic Discount Application
var totalAmount = 120;
var discount = totalAmount > 100 ? 10 : 0;
console.log("Discount applied:", discount);
//Output: Discount applied: 10
//Total is over 100, so a 10 discount applies.

//7. Check Multiple of 5
var value = 20;
if (value % 5 === 0) {
  console.log("The value is a multiple of 5.");
} else {
  console.log("The value is not a multiple of 5.");
}
//Output: The value is a multiple of 5.
//20 is divisible by 5, so it’s a multiple.

//8. Check Driving Eligibility
var driverAge = 17;
if (driverAge >= 18) {
  console.log("Eligible to drive.");
} else {
  console.log("Not eligible to drive.");
}
//Output: Not eligible to drive.
//Driver age of 17 is below the minimum, so not eligible.

//9. Simple Age Group Check
var age = 45;
if (age < 18) {
  console.log("Minor");
} else if (age < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}
//Output: Adult
//Age 45 falls into the adult category.

//10. Product Stock Availability
var stock = 5;
var purchaseQuantity = 3;
if (purchaseQuantity <= stock) {
  console.log("Order placed successfully.");
} else {
  console.log("Not enough stock available.");
}
//Output: Order placed successfully.
//Purchase quantity is within stock availability.


//Slightly Tricky Snippets
//11. Calculate Total Cost with Taxes
var price = 200;
var taxRate = 0.08;
var totalCost = price + (price * taxRate);
console.log("Total Cost:", totalCost);
//Output: Total Cost: 216
//Total cost adds 8% tax to 200, totaling 216.

//12. Nested Conditions: Score Grading
var marks = 78;
if (marks >= 90) {
  console.log("Grade: A");
} else if (marks >= 75) {
  console.log("Grade: B");
} else if (marks >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}
//Output: Grade: B
//A score of 78 fits grade B.


//13. Ternary Operator: Adult Check
var personAge = 21;
var status = personAge >= 18 ? "Adult" : "Minor";
console.log("Status:", status);
//Output: Status: Adult
//Age 21 is classified as “Adult.”

//14. Logical AND Condition
var hasID = true;
var hasTicket = false;
if (hasID && hasTicket) {
  console.log("Entry allowed.");
} else {
  console.log("Entry not allowed.");
}
//Output: Entry not allowed.
//Missing a ticket restricts entry.

//15. Calculate BMI
var weight = 70; // in kg
var height = 1.75; // in meters
var bmi = weight / (height * height);
console.log("BMI:", bmi.toFixed(2));
//Output: BMI: 22.86
//Calculated BMI results in 22.86.


//16. Restaurant Service Charge
var billAmount = 250;
var serviceCharge = billAmount >= 200 ? billAmount * 0.1 : billAmount * 0.05;
console.log("Service Charge:", serviceCharge);
//Output: Service Charge: 25
//10% service charge applies for a bill over 200, resulting in 25.


//17. Logical OR Condition: Password Check
var passwordLength = 5;
if (passwordLength < 8 || passwordLength > 15) {
  console.log("Password length is not acceptable.");
} else {
  console.log("Password length is acceptable.");
}
//Output: Password length is not acceptable.
//Password length is below 8, so it’s unacceptable.


//18. Calculate Final Price After Discount
var basePrice = 150;
var discount = basePrice > 100 ? 20 : 10;
var finalPrice = basePrice - discount;
console.log("Final Price:", finalPrice);
//Output: Final Price: 130
//A 20 discount applies, making the final price 130.

//19. Leap Year Check
var year = 2024;
if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}
//Output: Leap Year
//2024 is a leap year, meeting the required conditions.

//20. Check Driving and Drinking Age
var age = 20;
if (age >= 18) {
  if (age >= 21) {
    console.log("Eligible for driving and drinking.");
  } else {
    console.log("Eligible for driving only.");
  }
} else {
  console.log("Not eligible for driving or drinking.");
}
//Output: Eligible for driving only.
//Age 20 allows driving but not drinking.

//Document-02:
//Easy Snippets
//1. Simple Array of Fruits
var fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); 
//Apple
//First fruit in the array is "Apple."

//2. Add an Element to an Array
var colors = ["Red", "Green", "Blue"];
colors.push("Yellow");
console.log(colors); 
//[ 'Red', 'Green', 'Blue', 'Yellow' ]
//"Yellow" is added to colors.

//3. Iterate Through an Array
var animals = ["Dog", "Cat", "Elephant"];
for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}
//Dog
//Cat
//Elephant
//Array elements are logged one by one.

//4. Access Object Properties
var person = { name: "John", age: 30, city: "New York" };
console.log(person.name); 
//  John
// Accessing name property returns "John."

//5. Add a New Property to an Object
var car = { make: "Toyota", model: "Camry" };
car.year = 2022;
console.log(car);
//{ make: 'Toyota', model: 'Camry', year: 2022 }
//Adds a year property to car.

//6. Array Length Check
var numbers = [1, 2, 3, 4, 5];
if (numbers.length > 3) {
  console.log("Array has more than 3 elements.");
}
//Array has more than 3 elements.
//Array length is more than 3 elements.

//7. Check if an Array Contains an Element
var colors = ["Red", "black", "Blue"];
if ("Green" in colors) {
  console.log("Green is in the array.");
}else{
console.log("no values prsnt in array")
}
//no values prsnt in array
//"Green" isn’t present in the colors array.

//8. Combine Two Arrays
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var combined = arr2.concat(arr1);
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]
//[ 4, 5, 6, 1, 2, 3 ]
//Combines two arrays in order of arr2 + arr1.

//9. Check if an Object Has a Property
var student = { name: "Alice", age: 22 };
if ("age" in student) {
  console.log("Age is a property of student.");
}
//Age is a property of student.
//Checks if age exists in student.

//10. Simple Array Sorting
var scores = [0o1, 10, 40, 30];
scores.sort();
console.log(scores); 
//[ 1, 10, 30, 40 ]
//Sorts scores in ascending order.

//Slightly Tricky Snippets
//11. Nested Array Access
var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
// Output: 5
//ccesses nested array element, 5.

//12. Nested Object Access
var user = {
  name: "Mark",
  address: {
    city: "Los Angeles",
    zip: 90001
  }
};
//Output: Los Angeles
//Accesses nested city property in user.


//13. Loop Through an Object's Properties
var book = { title: "1984", author: "George Orwell", year: 1949 };
for (var key in book) {
  console.log(key + ": " + book[key]);
}
/*
Output:
title: 1984
author: George Orwell
year: 1949
*/
//Loops through and displays each key-value pair in book.

//14. Filtering an Array
var numbers = [5, 10, 15, 20];
var filtered = numbers.filter(function(number) {
  return number > 10;
});
console.log(filtered); 
// Output: [15, 20]
//Filters numbers for values over 10.

//15. Removing the Last Element of an Array
var fruits = ["Apple", "Banana", "Cherry"];
var lastFruit = fruits.pop();
console.log(fruits); //[ 'Apple', 'Banana' ]
console.log(lastFruit); //Cherry
//Removes "Cherry" from fruits and shows the remaining array and last element.

//16. Convert Object Values to Array
var car = { make: "Toyota", model: "Camry", year: 2022 };
var carValues = Object.values(car);
console.log(carValues); 
//[ 'Toyota', 'Camry', 2022 ]
//Extracts values of car as an array.

//17. Convert Array to String
var letters = ["A", "B", "C"];
var string = letters.join("-");
console.log(string);
//A-B-C
//Joins letters array into a hyphen-separated string.